const { logger } = require('@vuepress/shared-utils');
const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');

const { typesMetadata, getLinkForKeyPath } = require('../utils/metadata');

let processed = {};
// @todo make this configurable per build for versioned docs
let targetVersion = '8.0.0'

/**
 * Metadata plugin
 */
module.exports = (options = {}, context) => ({
  name: 'titanium/metadata',

  /**
   * Extend page data of pages under /api/ with metadata key, process the metadata
   * required by that page and then adds additonal headers to the page
   *
   * @param {Page} page
   */
  extendPageData(page) {
    if (!/^\/api\//.test(page.regularPath)) {
      return;
    }

    page.frontmatter.layout = 'ApiLayout';
    page.frontmatter.sidebarDepth = 0;

    const typeName = page.frontmatter.metadataKey || page.title;
    const metadata = typesMetadata[typeName];

    if (!metadata) {
      logger.warn(`no metadata found for API page ${page.path}`);
      return;
    }

    if (metadata.deprecated && metadata.deprecated.removed && semver.lte(metadata.deprecated.removed, targetVersion)) {
      logger.warn(`according to metadata ${typeName} (${page.path}) was removed in ${metadata.deprecated.removed}`);
    }

    page.metadataKey = typeName;
    page.frontmatter.pageClass = 'api-page';

    if (processed[typeName]) {
      const metadataProcessor = processed[typeName];
      metadataProcessor.appendAdditionalHeaders(page);
      return;
    }

    const metadataProcessor = new MetadataProcessor(context);
    metadataProcessor.transoformMetadataAndCollectHeaders(metadata);
    metadataProcessor.appendAdditionalHeaders(page);

    processed[typeName] = metadataProcessor;
  },

  /**
   * Create dynamic module with processed metadata which is used in webpack server entry
   * to pre-populate the store
   */
  clientDynamicModules() {
    return {
      name: 'metadata.js',
      content: `export default ${JSON.stringify(typesMetadata)}`
    }
  },

  /**
   * Enhance the Koa dev server and serve api metadata directly from memory
   */
  enhanceDevServer (app) {
    app.use((ctx, next) => {
      ctx.assert(ctx.request.accepts('json'), 406);
      const metadataRoutePattern = /\/([\w.]+).json$/;
      const match = ctx.path.match(metadataRoutePattern);
      if (!match) {
        return next();
      }

      const typeName = match[1];
      const metadata = findMetadataWithLowerCasedKey(typeName);
      if (metadata) {
        ctx.body = JSON.stringify(metadata);
        return;
      }

      return;
    });
  },

  /**
   * Split metadata per type and generate a JSON file for each one that gets
   * loaded by Vuex on subsequent page loads once Vue takes over on the client.
   */
  async generated () {
    const tempMetadataPath = path.resolve(context.tempPath, 'metadata');
    fs.ensureDirSync(tempMetadataPath);
    for(let typeName in processed) {
      const metadata = typesMetadata[typeName];
      const destPath = path.resolve(tempMetadataPath, `${typeName.toLowerCase()}.json`);
      fs.writeFileSync(destPath, JSON.stringify(metadata));
    }

    await fs.copy(tempMetadataPath, path.resolve(context.outDir, 'metadata'));
  }
});

function findMetadataWithLowerCasedKey(lowerCasedTypeName) {
  for(let typeName in typesMetadata) {
    if (typeName.toLowerCase() === lowerCasedTypeName) {
      return typesMetadata[typeName];
    }
  }

  return null;
}

/**
 * Processor for metadata that powers API reference pages.
 *
 * Applies transforms to the Metadata so we can properly use it in our VuePress environment.
 * Also collects additionals headers required for the sidebar navigation on API pages.
 *
 * Each instance of this processor can only be used to transform one single type.
 */
class MetadataProcessor {
  constructor(context) {
    this.markdown = context.markdown;
    this.base = context.base;
    this.additionalHeaders = [];
    this.constantNamingPattern = /^[A-Z0-9_]+$/;
    this.hasConstants = false;
  }

  /**
   * Prepares metadata for usage in VuePress and collects additional headers
   * which will be inserted manually into the page. Changes to the metadata
   * will be written back into the given object.
   */
  transoformMetadataAndCollectHeaders(metadata) {
    delete metadata.description;

    this.filterInheritedAndRemovedMembers(metadata);

    this.sortByName(metadata.properties);
    this.sortByName(metadata.methods);

    // We need to temporarily disbale the vue router link rule since the rendered markdown
    // will be directly inserted via v-html so Vue components won't work
    const vueRouterLinkRule = this.markdown.renderer.rules.link_open;
    this.markdown.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    metadata.summary = this.renderMarkdown(metadata.summary);
    this.transformMembersAndCollectHeaders('properties', metadata);
    this.transformMembersAndCollectHeaders('methods', metadata);
    this.transformMembersAndCollectHeaders('events', metadata);
    this.markdown.renderer.rules.link_open = vueRouterLinkRule;

    this.splitPropertiesAndConstants(metadata);
  }

  appendAdditionalHeaders(page) {
    page.headers = (page.headers || []).concat(this.additionalHeaders);
    if (this.hasConstants) {
      page.headers.push({
        level: 2,
        title: 'Constants',
        slug: 'constants'
      });
    }
  }

  filterInheritedAndRemovedMembers(metadata) {
    const filterInheritedAndRemoved = member => {
      if (member.inherits && member.inherits !== metadata.name) {
        return false;
      }

      if (member.deprecated && member.deprecated.removed && semver.lte(member.deprecated.removed, targetVersion)) {
        return false;
      }

      return true;
    }
    metadata.properties = metadata.properties.filter(filterInheritedAndRemoved);
    metadata.methods = metadata.methods.filter(filterInheritedAndRemoved);
    metadata.events = metadata.events.filter(filterInheritedAndRemoved);
  }

  transformMembersAndCollectHeaders(memberType, metadata) {
    const membersMetadata = metadata[memberType];
    if (!membersMetadata || membersMetadata.length === 0) {
      return;
    }

    let headers = [];
    membersMetadata.forEach((memberMetadata, index) => {
      if (memberMetadata.summary) {
        membersMetadata[index].summary = this.renderMarkdown(memberMetadata.summary);
      }
      if (memberMetadata.description) {
        membersMetadata[index].description = this.renderMarkdown(memberMetadata.description);
      }
      if (memberMetadata.examples && memberMetadata.examples.length) {
        let combinedExamplesMarkdown = '#### Examples\n\n';
        memberMetadata.examples.forEach(example => {
          combinedExamplesMarkdown += `##### ${example.description}\n${example.code}`;
        });
        memberMetadata.examples = this.renderMarkdown(combinedExamplesMarkdown);
      }
      if (memberMetadata.deprecated && memberMetadata.deprecated.notes) {
        memberMetadata.deprecated.notes = this.renderMarkdown(memberMetadata.deprecated.notes);
      }

      if (memberType === 'properties' && this.constantNamingPattern.test(memberMetadata.name)) {
        this.hasConstants = true;
        return;
      }

      headers.push({
        level: 3,
        title: memberMetadata.name,
        slug: memberMetadata.name.toLowerCase()
      });
    });
    if (headers.length) {
      this.additionalHeaders.push({
        level: 2,
        title: memberType.charAt(0).toUpperCase() + memberType.slice(1),
        slug: memberType
      });
      this.additionalHeaders = this.additionalHeaders.concat(headers);
    }
  }

  renderMarkdown(markdownString) {
    // @FIXME: This can be removed once we have a means to generate client dynamic modules
    markdownString = this.rewriteTypeLinks(markdownString);
    const html = this.markdown.renderInline(markdownString);
    return html;
  }

  rewriteTypeLinks(markdownString) {
    const customLinkPattern = /<([^>\/]+)>/g;
    const mdLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

    markdownString = markdownString.replace(customLinkPattern, (match, linkValue) => {
      const link = getLinkForKeyPath(linkValue, this.base);
      if (link) {
        return `[${link.name}](${link.path})`;
      }
      return match;
    });

    markdownString = markdownString.replace(mdLinkPattern, (match, linkText, linkValue) => {
      const link = getLinkForKeyPath(linkValue, this.base);
      if (link) {
        return `[${link.name}](${link.path})`;
      }
      return match;
    });

    return markdownString;
  }

  sortByName(unsortedArray) {
    if (!unsortedArray) {
      return;
    }
    unsortedArray.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }

  splitPropertiesAndConstants(metadata) {
    const properties = [];
    const constants = [];
    metadata.properties.forEach(property => {
      if (this.constantNamingPattern.test(property.name)) {
        constants.push(property);
      } else {
        properties.push(property);
      }
    });
    metadata.properties = properties;
    metadata.constants = constants;
  }
}
(window.webpackJsonp=window.webpackJsonp||[]).push([[954],{2521:function(e,a,t){"use strict";t.r(a);var r=t(21),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"appcelerator-cli-troubleshooting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-troubleshooting"}},[e._v("#")]),e._v(" Appcelerator CLI Troubleshooting")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("When running into issues with the Appcelerator CLI, there are some simple steps to figure out additional information.")]),e._v(" "),t("h2",{attrs:{id:"submitting-a-bug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submitting-a-bug"}},[e._v("#")]),e._v(" Submitting a bug")]),e._v(" "),t("p",[e._v("Refer to "),t("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Reporting_Bugs_or_Requesting_Features/"}},[e._v("Reporting Bugs or Requesting Features")]),e._v(" for more information. Check "),t("a",{attrs:{href:"https://jira.appcelerator.org/projects/CLI/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIRA"),t("OutboundLink")],1),e._v(" first as the issue may already have been reported with a fix or workaround. When submitting a bug, it is often helpful to provide a stack trace and debug log. You can do so by running the CLI with an extra parameter of "),t("code",[e._v("DEBUG=*")]),e._v(" before the regular command and a trace flag after the regular command. For example (replace "),t("code",[e._v("<command>")]),e._v(" with the actual command):")],1),e._v(" "),t("p",[t("strong",[e._v("OS X/Linux")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DEBUG")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("* appc "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -l trace\n")])])]),t("p",[t("strong",[e._v("Windows")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("cmd /C "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"set DEBUG=* && appc <command> -l trace"')]),e._v("\n")])])]),t("p",[e._v("Another useful piece of information is which version of Node you are running and which "),t("strong",[e._v("versions")]),e._v(" of the Appc CLI you are using. Here are some useful commands to get the Appc CLI versions:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -g appcelerator "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# shows you the version of Appc CLI from NPM that is currently installed")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -g appcelerator\n/usr/local/lib\n└── appcelerator@4.2.12\n\nappc use "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# shows you the version of Appc CLI from Registry that is currently selected and installed")]),e._v("\n$ appc use\nThe following versions are available:\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.2")]),e._v(".4    Not Installed\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.3")]),e._v(".0    Not Installed\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".0    Installed\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".1    Installed\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".2    Installed "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Active"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("h2",{attrs:{id:"errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[e._v("#")]),e._v(" Errors")]),e._v(" "),t("h3",{attrs:{id:"please-re-try-this-install-again"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#please-re-try-this-install-again"}},[e._v("#")]),e._v(" Please re-try this install again")]),e._v(" "),t("p",[e._v("This error manifests items in several different ways, such as:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Invalid file download checksum. This could be a result of the file being modified in transit or it could be because the download was interrupted or had an error....Please re-try this install again.")])]),e._v(" "),t("li",[t("p",[e._v("Server responded with unexpected error: SSL authorization failed. URL: "),t("a",{attrs:{href:"http://appc-registry-server-distribution.s3.amazonaws.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("appc-registry-server-distribution.s3.amazonaws.com"),t("OutboundLink")],1),e._v(" does not have a valid fingerprint which can be used to verify the SSL certificate...Please re-try your install again. If you continue to have this problem, please contact Appcelerator Support at support@appcelerator.com.")])])]),e._v(" "),t("p",[e._v("This is often best solved by two options: reinstalling the appcelerator command line via NPM or logging out with -D:")]),e._v(" "),t("p",[t("strong",[e._v("Reinstall")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sudo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g appcelerator\nappc use latest\n")])])]),t("p",[t("strong",[e._v("Log out -D")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("appc "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("logout")]),e._v(" -D\nappc login "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# reauthenticate again with access code")]),e._v("\n")])])]),t("h3",{attrs:{id:"application-deployment-failed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-deployment-failed"}},[e._v("#")]),e._v(" Application deployment failed")]),e._v(" "),t("ul",[t("li",[e._v("Application deployment failed. Error was: Error: Error loading connector/appc.arrowdb. RequestSSLError: SSL authorization failed. URL: api.cloud.appcelerator.com does not have a valid fingerprint which can be used to verify the SSL "),t("a",{attrs:{href:"http://certificate.at/",target:"_blank",rel:"noopener noreferrer"}},[e._v("certificate."),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);
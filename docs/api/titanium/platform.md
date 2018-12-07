# Titanium.Platform

<ProxySummary/>

## Examples

### Battery Event Example

Obtaining battery data when the battery state changes.

    Titanium.Platform.addEventListener('battery', function(e){
      Ti.API.info('The battery state has changed to ' + e.state);
      Ti.API.info('The battery level is ' + e.level);
      Ti.API.info('The battery event source is ' + e.source);
      Ti.API.info('The battery event name ' + e.type);
    });

<ApiDocs/>

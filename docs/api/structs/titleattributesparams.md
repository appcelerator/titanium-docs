# titleAttributesParams

<ProxySummary/>

## Examples

### Simple Example

var win = Ti.UI.createWindow({
    title: 'Title',
    barColor: 'yellow',
    titleAttributes:  {
        color:'blue',
        font: {fontFamily:'Snell Roundhand', fontSize:36},
        shadow:{color:'gray', offset:{width:1,height:1}}
    }
});
var nav = Ti.UI.createNavigationWindow({window: win});
nav.open();

<ApiDocs/>

# Titanium.UI.TextField

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/textfield/textfield_android.png" height="25" /></td>
    <td><img src="images/textfield/textfield_ios.png" height="25" /></td>
    <td><img src="images/textfield/textfield_wp.png" height="25" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

Use the <Titanium.UI.createTextField> method or **`<TextField>`** Alloy element to create a text field.

## Examples

### Basic Text Field

Create a simple text field with green text color.

    var win = Ti.UI.createWindow({
      backgroundColor: 'white'
    });

    var textField = Ti.UI.createTextField({
      backgroundColor: '#fafafa',
      color: 'green',
      width: 250, 
      height: 40
    });

    win.add(textField);
    win.open();

### Custom Keyboard Toolbar (iOS)

On iOS, a configurable toolbar can be displayed above the virtual keyboard.
Toolbars can be used with both text areas and text fields. See <Titanium.UI.iOS.Toolbar>
for more information.

This code excerpt creates a text field with a toolbar:

    var win = Ti.UI.createWindow({
        backgroundColor: 'white'
    });

    var send = Ti.UI.createButton({
        title: 'Send',
        style: Ti.UI.iOS.SystemButtonStyle.DONE,
    });

    var camera = Ti.UI.createButton({
        systemButton: Ti.UI.iOS.SystemButton.CAMERA,
    });

    var cancel = Ti.UI.createButton({
        systemButton: Ti.UI.iOS.SystemButton.CANCEL
    });

    var flexSpace = Ti.UI.createButton({
        systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE
    });

    var textfield = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        hintText: 'Focus to see keyboard with toolbar',
        keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],
        keyboardToolbarColor: '#999',
        keyboardToolbarHeight: 40,
        top: 10,
        width: 300, 
        height: 35
    });

    win.add(textField);
    win.open();

### Alloy XML Markup

Previous basic text field with green text color example using Alloy.

Alternatively, define the properties using the TSS file.

    <Alloy>
        <Window id="win" backgroundColor="white">
            <TextField class="myTextField" color="green" width="250" height="45" />
        </Window>
    </Alloy>

### Alloy Custom Keyboard Toolbar (iOS)

Previous custom keyboard toolbar example as an Alloy view.  Use the `<KeyboardToolbar>` XML
element to set the `keyboardToolbar` property.

You can also declare the `leftButton` and `rightButton` properties in XML markup as the
`<LeftButton>` and `<RightButton>` XML elements.

    <Alloy>
        <Window fullscreen="true" backgroundColor="white">
            <TextField
                platform="ios"
                borderStyle="Ti.UI.INPUT_BORDERSTYLE_BEZEL"
                keyboardToolbarColor="#999" 
                keyboardToolbarHeight="40"
                top="10" 
                height="35" 
                width="300"
                value="Focus to see keyboard with toolbar">

                <!-- Sets the keyboardToolbar property -->
                <KeyboardToolbar>
                    <Toolbar>
                        <Items>
                            <Button systemButton="CANCEL" />
                            <FlexSpace/>
                            <Button systemButton="CAMERA" />
                            <FlexSpace/>
                            <Button style="DONE">Send</Button>
                        </Items>
                    </Toolbar>
                </KeyboardToolbar>
            </TextField>
        </Window>
    </Alloy>

<ApiDocs/>

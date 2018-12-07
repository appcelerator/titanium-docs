# Titanium.UI.Slider

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/slider/slider_android.png" height="25" /></td>
    <td><img src="images/slider/slider_ios.png" height="25" /></td>
    <td><img src="images/slider/slider_wp.png" height="25" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

A slider lets the user select from a range of values by dragging the slider thumb.

Use the <Titanium.UI.createSlider> method or **`<Slider>`** Alloy element to create a slider.

### Android Platform Implementation Notes

On Android, the user can also maniuplate the slider using the arrow keys. For this
reason, placing other focusable UI elements to the left or right of
the slider is not recommended.

On Android, both `min` and `max` must be specified for the slider to work properly.

Earlier versions of the Titanium SDK implicitly enforced that both the [leftTrackImage](Titanium.UI.Slider.leftTrackImage) and
[rightTrackImage](Titanium.UI.Slider.rightTrackImage) properties be specified before the properties would be honored. Beginning with
Titanium SDK 4.0.0 this limitation has been removed. However it is recommended that either both or neither be specified.

## Examples

### Simple Slider

The following sample demonstrates creating a slider and adding a listener to
handle the change events.

    var slider = Titanium.UI.createSlider({
        top: 50,
        min: 0,
        max: 100,
        width: Ti.UI.FILL,
        value: 50
        });

    var label = Ti.UI.createLabel({
        text: slider.value,
        width: Ti.UI.FILL,
        top: 30,
        left: 0,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });

    slider.addEventListener('change', function(e) {
        label.text = String.format('%3.1f', e.value);
    });

### Alloy XML Markup

Previous example as an Alloy view.

Implement the `updateLabel` callback in the controller to update the label value
and set the initial `text` value for the label in the TSS file or controller.

index.xml:

    <Alloy>
        <Window id="window" backgroundColor="white">
            <Slider id="slider" top="50" min="0" max="100" width="Ti.UI.FILL" value="50" onChange="updateLabel"/>
            <Label id="label" width="Ti.UI.FILL" top="30" left="0" />
        </Window>
    </Alloy>

index.js:

    $.slider.text = $.slider.value;
    function updateLabel(e) {
        $.label.text = String.format('%3.1f', e.value);
    }
    $.window.open();

<ApiDocs/>

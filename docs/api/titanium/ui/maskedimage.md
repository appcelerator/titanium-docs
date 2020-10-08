---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/MaskedImage.yml
---
# Titanium.UI.MaskedImage

<TypeHeader/>

## Overview

This is a control that can be used to display an image combined with
another image and/or color. The layers are drawn in the following order:

* The `mask`, or background image.
* The `image`, or foreground image.
* The `tint`, or constant tint color.

The way the layers are combined depends on the value of the `mode` property.
The `mode` value can be set to one of the <Titanium.UI> `BLEND_MODE` constants.
These constants correspond directly to the blend modes described by Apple and Google here:

["Bitmap Images and Image Masks" in Quartz2D Reference](https://developer.apple.com/library/content/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_images/dq_images.html#//apple_ref/doc/uid/TP30001066-CH212-TPXREF101)

["PorterDuff.Mode" Android Reference](https://developer.android.com/reference/android/graphics/PorterDuff.Mode.html)

When compositing two images, the `mask` property specifies the background, or
destination (D) image, and the `image` property specifies the foreground, or
source (S) layer. For example, to use an image as an alpha mask for another image,
you could use the following code:

``` js
var imageMask = Titanium.UI.createMaskedImage({
    mask : 'mask.png', // alpha mask
    image : 'demo_image.png', // image to mask
    mode : Titanium.UI.BLEND_MODE_SOURCE_OUT
});
```

Note that this control lacks many of the features associated with a standard
[ImageView](Titanium.UI.ImageView) control.

Use the <Titanium.UI.createMaskedImage> method to create a masked image view.

## Examples

### Lighten Blend Mode

The following code excerpt blends the background image with the given `tint` color:

``` js
var imageMask = Titanium.UI.createMaskedImage({
    mask : 'demo_image.png', // background image
    tint: 'red',
    mode : Titanium.UI.BLEND_MODE_LIGHTEN,
});
```

<ApiDocs/>

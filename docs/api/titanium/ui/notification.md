# Titanium.UI.Notification

<ProxySummary/>

## Overview

A toast notification is an unobtrusive, pop-up notification that does not
block the UI. Use the <Titanium.UI.createNotification> method or **`<Notification>`** Alloy element 
to create a Toast notification.

On Android, by default, a toast notification appears centered on the bottom half of the screen.
On Windows Phone, by default, a toast notification appears over the status bar on the top part
of the screen.

## Examples

### Simple Toast Notification

The simplest use case is also the most common.

    var toast = Ti.UI.createNotification({
        message:"Please Stand By",
        duration: Ti.UI.NOTIFICATION_DURATION_LONG
    });
    toast.show();

### Alloy XML Markup

Previous example as an Alloy view.

index.xml

    <Alloy>
        <Window>
            <Notification id="toast" platform="android" message="Please Stand By" duration="Ti.UI.NOTIFICATION_DURATION_LONG" />
        </Window>
    </Alloy>

index.js

    $.index.open();
    $.toast.show();

<ApiDocs/>

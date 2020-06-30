(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{1506:function(e,t,o){"use strict";o.r(t);var i=o(21),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"modules-cloudpush"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloudpush"}},[e._v("#")]),e._v(" Modules.CloudPush")]),e._v(" "),o("TypeHeader"),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("The CloudPush module supports Android push notifications for a device by providing a connection\nto the push notification server to the device to receive push notifications and to optionally\npresent a tray notification to the user when a new push notification is received.")]),e._v(" "),o("p",[e._v("This module is only used to receive push notifications.  For information on configuring your\nproject to send push notifications, see "),o("type-link",{attrs:{type:"Modules.Cloud.PushNotifications"}},[e._v("Modules.Cloud.PushNotifications")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"push-protocols"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#push-protocols"}},[e._v("#")]),e._v(" Push Protocols")]),e._v(" "),o("p",[e._v("The CloudPush module only supports "),o("a",{attrs:{href:"https://firebase.google.com/docs/cloud-messaging",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase Cloud Messaging"),o("OutboundLink")],1),e._v(" (FCM) for push\nnotifications.")]),e._v(" "),o("h3",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[e._v("To use the CloudPush module in your JavaScript code, you need to require it in and\nget a device token with the "),o("code",[e._v("retrieveDeviceToken")]),e._v(" method to enable push notifications with Arrow Push.\nIn your project's "),o("code",[e._v("tiapp.xml")]),e._v(", you need to add some keys to configure push notifications.")]),e._v(" "),o("p",[e._v("Note that this module is not included in the Titanium namespace, but it is bundled with the Titanium SDK as of\nversion 2.0.0. To use it, you must require it, like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("var CloudPush = require('ti.cloudpush');\n")])])]),o("p",[e._v("Then, call the "),o("code",[e._v("retrieveDeviceToken")]),e._v(" method to get a unique token specific to that device and\nArrow DB application.  This token is used with "),o("type-link",{attrs:{type:"Modules.Cloud.PushNotifications"}},[e._v("Arrow PushNotifications calls")]),e._v("\nto subscribe and unsubscribe the device to push notification channels.")],1),e._v(" "),o("p",[e._v("Once the device is subscribed to at least one push channel, listen to the module's "),o("code",[e._v("callback")]),e._v(",\n"),o("code",[e._v("trayClickLaunchedApp")]),e._v(", and "),o("code",[e._v("trayClickFocusedApp")]),e._v(" events to monitor for incoming push notifications.")]),e._v(" "),o("p",[e._v("This module must also be added to the modules section in your tiapp.xml. This can be done using the Modules list in\nthe Titanium Studio TiApp Editor, or by editing the XML directly and adding the following line to the modules\nelement:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<module platform="android">ti.cloudpush</module>\n')])])]),o("p",[e._v("Your app must prove that it is allowed to talk to Arrow. This keeps your data secure by preventing anyone from\nmaking requests to Arrow that impersonate your app.")]),e._v(" "),o("p",[e._v("Titanium Studio creates a pair of keys (Development and Production) for each Titanium application depending on the\nuser preference specified during new project creation. This pair of keys will be stored in "),o("code",[e._v("tiapp.xml")]),e._v(" and one of the\nkeys will be used during application build depending on the build type (development or production).")]),e._v(" "),o("p",[e._v("To use push notifications, in the "),o("code",[e._v("tiapp.xml")]),e._v(" file, you need to specify the Arrow Push keys and push\ntype. The supported properties in "),o("code",[e._v("tiapp.xml")]),e._v(" are:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('\x3c!-- Property keys for Arrow Push (required) --\x3e\n<property name="acs-api-key-development" type="string">YOUR DEVELOPMENT API KEY HERE</property>\n<property name="acs-api-key-production" type="string">YOUR PRODUCTION API KEY HERE</property>\n<property name="acs-api-key" type="string">YOUR API KEY HERE</property>\n')])])]),o("p",[e._v("If a deployment-specific setting is provided (production or development) then that value will be used for the current deployment environment.")]),e._v(" "),o("p",[o("em",[e._v("WARNING")]),e._v(": The default properties of this module are used until you set a property for the first time. Because the\nproperties are persisted to the device settings (via "),o("type-link",{attrs:{type:"Titanium.App.Properties"}},[e._v("Titanium.App.Properties")]),e._v("), the most recent value you set will\nalways be used.")],1),e._v(" "),o("h3",{attrs:{id:"virtual-private-cloud-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#virtual-private-cloud-configuration"}},[e._v("#")]),e._v(" Virtual Private Cloud Configuration")]),e._v(" "),o("p",[e._v("If you are using a virtual private cloud (VPC), you need to configure your Arrow Push dispatcher\nURL in order to send push notifications with FCM.  In the "),o("code",[e._v("tiapp.xml")]),e._v(" file, add the "),o("code",[e._v("acs-push-api-url")]),e._v("\napplication property and set the node text to the push dispatcher URL provided to you.  The URL may\nbe the same as your custom ArrowDB endpoint and have deployment-specific settings, that is, two\nURLs--one for production and another for the development environment.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<ti:app>\n    <property name="acs-push-api-url-production">https://api-prod.fooinc.com</property>\n    <property name="acs-push-api-url-development">https://api-dev.fooinc.com</property>\n</ti:app>\n')])])]),o("h3",{attrs:{id:"grouped-notifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grouped-notifications"}},[e._v("#")]),e._v(" Grouped Notifications")]),e._v(" "),o("p",[e._v("If the device receives multiple push notifications from the application, Android can group these\nnotifications together as one notification.")]),e._v(" "),o("p",[e._v("To use grouped notifications, add a grouped notification template to either the "),o("code",[e._v("tiapp.xml")]),e._v(" file\nor the "),o("code",[e._v("i18n")]),e._v(" folder for internationalized versions:")]),e._v(" "),o("p",[o("code",[e._v("tiapp.xml")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<property name="acs-grouped-notification-message-development" type="string">You have $number$ unread messages.</property>\n<property name="acs-grouped-notification-message-production" type="string">You have $number$ unread messages.</property>\n-or-\n<property name="acs-grouped-notification-message" type="string">You have $number$ unread messages.</property>\n')])])]),o("p",[o("code",[e._v("i18n/es/strings.xml")]),e._v(" (example for Spanish):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n   <string name="acs_grouped_notification_message">Tienes $number$ mensajes no leidos.</string>\n</resources>\n')])])]),o("p",[e._v("The "),o("code",[e._v("$number$")]),e._v(" variable indicates the number of unread messages.")]),e._v(" "),o("h2",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("h3",{attrs:{id:"listening-for-push-notifications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#listening-for-push-notifications"}},[e._v("#")]),e._v(" Listening for Push Notifications")]),e._v(" "),o("p",[e._v("This example lets the application retrieve the device token and listens for several events\nto monitor incoming push notifications.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("var CloudPush = require('ti.cloudpush');\nCloudPush.retrieveDeviceToken({\n    success: function deviceTokenSuccess(e) {\n        // Use this device token with Ti.Cloud.PushNotifications calls\n        // to subscribe and unsubscribe to push notification channels\n        Ti.API.info('Device Token: ' + e.deviceToken);\n    },\n    error: function deviceTokenError(e) {\n        alert('Failed to register for push! ' + e.error);\n    }\n});\n// These events monitor incoming push notifications\nCloudPush.addEventListener('callback', function (evt) {\n    alert(evt.payload);\n});\nCloudPush.addEventListener('trayClickLaunchedApp', function (evt) {\n    Ti.API.info('Tray Click Launched App (app was not running)');\n});\nCloudPush.addEventListener('trayClickFocusedApp', function (evt) {\n    Ti.API.info('Tray Click Focused App (app was already running)');\n});\n")])])]),o("ApiDocs")],1)}),[],!1,null,null,null);t.default=n.exports}}]);
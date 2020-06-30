(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{2640:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"native-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-modules"}},[t._v("#")]),t._v(" Native Modules")]),t._v(" "),e("p",[t._v("Demonstrates using a native module in an Alloy application, in this case the Paint module provided by Appcelerator.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("💡 App folder location")]),t._v(" "),e("p",[e("em",[t._v("alloy")]),t._v("/test/apps/"),e("strong",[t._v("advanced/native_modules")])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(499),alt:"ti.paint"}})]),t._v(" "),e("p",[t._v("The native_module sample app is configured to use the "),e("a",{attrs:{href:"https://marketplace.axway.com/apps/4977#!overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paint module"),e("OutboundLink")],1),t._v(" provided by Appcelerator. To use a module in an Alloy project, simply add it to an existing Alloy view using a "),e("code",[t._v("<Module/>")]),t._v(" element, specifying the module's ID. The element's "),e("code",[t._v("method")]),t._v(" parameter specifies the method that will be invoked on the module to initialize it. If no method is specified the module's "),e("code",[t._v("createView()")]),t._v(" method will be invoked, by default. The ti.paint module's create method is called "),e("code",[t._v("createPaintView()")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("app/views/index.xml")])]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Module")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ti.paint"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("createPaintView"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("platform")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Once you've imported sample app, you next to need to download and install the ti.paint module, and modify the application's tiapp.xml file to include it.")]),t._v(" "),e("p",[e("strong",[t._v("Download and install the ti.paint module")]),t._v(":")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download the "),e("a",{attrs:{href:"https://github.com/appcelerator-archive/ti.paint",target:"_blank",rel:"noopener noreferrer"}},[t._v("ti.paint module"),e("OutboundLink")],1),t._v(" ZIP from GitHub.")])]),t._v(" "),e("li",[e("p",[t._v("To manually install the module, copy the ZIP file to the root of the Titanium SDK folder (for example, "),e("strong",[t._v("~/")]),t._v(" "),e("strong",[t._v("Library/Application Support/Titanium")]),t._v(" on OS X). See "),e("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Using_Modules/Using_a_Module/#module-install-locations"}},[t._v("Module install locations")]),t._v("\nfor other platforms. In Appcelerator Studio, you can also install the module by selecting "),e("strong",[t._v("Help > Install Mobile Module")]),t._v(" and locating the ZIP file.")],1)]),t._v(" "),e("li",[e("p",[t._v("Open the project's "),e("code",[t._v("tiapp.xml")]),t._v(" file and insert "),e("strong",[e("code",[t._v("<module>ti.paint</module>")])]),t._v(" into the existing "),e("code",[t._v("<modules></modules>")]),t._v(" element, as shown below.")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("ti")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://ti.appcelerator.org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("ti.paint"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    ...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xml")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Save "),e("code",[t._v("tiapp.xml")]),t._v(" and build the application for iOS simulator or device. (The Paint module does not currently work on Android.)")])])]),t._v(" "),e("h2",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See also")]),t._v(" "),e("ul",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/"}},[t._v("Using Titanium Modules")])],1)]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://marketplace.axway.com/apps/4977#!overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paint module"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports},499:function(t,a,s){t.exports=s.p+"assets/img/ti.paint.b3adf1f2.png"}}]);
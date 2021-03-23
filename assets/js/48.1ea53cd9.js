(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1792:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-button"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-button"}},[t._v("#")]),t._v(" Titanium.UI.Button")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Android")]),t._v(" "),n("th",[t._v("iOS")]),t._v(" "),n("th",[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:s(450),alt:"Android"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(451),alt:"iOS"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(452),alt:"Windows"}})])])])]),t._v(" "),n("p",[t._v("A button displays its  selected state while it is being pressed. The focused state is\nonly used on Android devices that have navigation keys or a keyboard, to indicate\nwhich button has input focus.")]),t._v(" "),n("p",[t._v("You can specify background images for each state, as well as button text and a button\nicon. On iOS, there are button styles which define appearance for each state, even if\nno button images are set.")]),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createButton"}},[t._v("Titanium.UI.createButton")]),t._v(" method or a "),n("strong",[n("code",[t._v("<Button>")])]),t._v(" Alloy element to create a button\n(see "),n("a",{attrs:{href:"#!/api/Titanium.UI.Button-examples"}},[t._v("Examples")]),t._v(") .")],1),t._v(" "),n("h3",{attrs:{id:"android-platform-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-notes"}},[t._v("#")]),t._v(" Android Platform Notes")]),t._v(" "),n("p",[t._v("Android uses default button images for the normal, focused, selected and disabled\nstates. If you use a custom button image, you should specify versions for the focused\nand selected states (and the disabled state, if the button is ever disabled).")]),t._v(" "),n("p",[t._v("Android also supports setting the background color for each of the states. These are not\nsupported on iOS.")]),t._v(" "),n("h3",{attrs:{id:"ios-platform-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-notes"}},[t._v("#")]),t._v(" iOS Platform Notes")]),t._v(" "),n("p",[t._v("iOS buttons have two special properties, "),n("code",[t._v("style")]),t._v(" and "),n("code",[t._v("systemButton")]),t._v(".")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("style")]),t._v(" property specifies the type of button decoration, and can be set to one\nof the values described in "),n("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButtonStyle"}},[t._v("Titanium.UI.iOS.SystemButtonStyle")]),t._v(".")],1),t._v(" "),n("p",[t._v("To use a custom button style, such as a background gradient, you may need to explicitly set\nthe button's "),n("code",[t._v("style")]),t._v(" property to "),n("code",[t._v("PLAIN")]),t._v(", to prevent the button style from overriding any background color or gradient.")]),t._v(" "),n("p",[t._v("Also note:")]),t._v(" "),n("ul",[n("li",[t._v("When assigning a custom image to the "),n("code",[t._v("backgroundImage")]),t._v(" property, the image must be\npartially or wholly transparent for the background color or background gradient to be visible.")]),t._v(" "),n("li",[t._v("Similarly, for an assigned background gradient to show through, the "),n("code",[t._v("backgroundColor")]),t._v(" may need to be\nset to 'transparent'.")])]),t._v(" "),n("p",[t._v("Unlike Android, iOS doesn't supply any default background images for buttons--\nsystem button styles serve this purpose.")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("systemButton")]),t._v(" property lets you create a predefined system-defined button,\nsuch as the "),n("strong",[t._v("Camera")]),t._v(" or "),n("strong",[t._v("Add")]),t._v(" buttons, for use in toolbars and nav bars.\nSpecifically, system buttons may be used in the following locations:")]),t._v(" "),n("ul",[n("li",[n("type-link",{attrs:{type:"Titanium.UI.iOS.Toolbar"}},[t._v("Titanium.UI.iOS.Toolbar")]),t._v(". The "),n("code",[t._v("items")]),t._v(" array can contain system buttons.")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.iPad.Popover"}},[t._v("Titanium.UI.iPad.Popover")]),t._v(". The "),n("code",[t._v("leftNavButton")]),t._v(" and "),n("code",[t._v("rightNavButton")]),t._v(" properties can\nrefer to system buttons")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.iOS.SplitWindow"}},[t._v("Titanium.UI.iOS.SplitWindow")]),t._v(". The "),n("code",[t._v("toolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.TextField"}},[t._v("Titanium.UI.TextField")]),t._v(". The "),n("code",[t._v("keyboardToolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.TextArea"}},[t._v("Titanium.UI.TextArea")]),t._v(". The "),n("code",[t._v("keyboardToolbar")]),t._v(" array can contain system buttons.")],1),t._v(" "),n("li",[n("type-link",{attrs:{type:"Titanium.UI.Window"}},[t._v("Titanium.UI.Window")]),t._v(". The "),n("code",[t._v("leftNavButton")]),t._v(" and "),n("code",[t._v("rightNavButton")]),t._v(" properties can refer to\nsystem buttons and the "),n("code",[t._v("toolbar")]),t._v(" array can contain system buttons.")],1)]),t._v(" "),n("p",[t._v("Use the constants in "),n("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButton"}},[t._v("Titanium.UI.iOS.SystemButton")]),t._v("\nto specify a button type. The size, style and decoration of system buttons is set\nautomatically, so you can create a button by setting only the "),n("code",[t._v("systemButton")]),t._v(" property.")],1),t._v(" "),n("p",[t._v("For example:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cancelButton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" systemButton"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SystemButton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CANCEL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("In Alloy, you can omit the namespace when setting the "),n("code",[t._v("systemButton")]),t._v(" property:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cancelbtn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("systemButton")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("CANCEL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Button")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Note that the "),n("code",[t._v("systemButton")]),t._v(" property specifies "),n("em",[t._v("appearance")]),t._v(", not behavior. For\nexample, to bring up the camera when the user presses the "),n("strong",[t._v("Camera")]),t._v(" button, you must\nadd an event listener to the button and call "),n("type-link",{attrs:{type:"Titanium.Media.showCamera"}},[t._v("Titanium.Media.showCamera")]),t._v(" when the\nbutton is clicked.")],1),t._v(" "),n("h4",{attrs:{id:"ios-pressed-button-effects"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-pressed-button-effects"}},[t._v("#")]),t._v(" iOS Pressed Button Effects")]),t._v(" "),n("p",[t._v("If you do not supply separate background images for the normal and selected states,\niOS supplies a built-in effect for pressed buttons. For most iOS buttons, the effect\ndims the entire button (except for the text) while the button is being pressed.")]),t._v(" "),n("p",[t._v("For toolbar buttons that use the "),n("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButtonStyle.PLAIN"}},[t._v("PLAIN")]),t._v(" style\nor use system icons such as "),n("type-link",{attrs:{type:"Titanium.UI.iOS.SystemButton.CAMERA"}},[t._v("CAMERA")]),t._v(", a glow effect is\nused. The glow effect shows as a white circular glow or highlight at the center of the button\nwhen the button is pressed.")],1),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-button-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-button-example"}},[t._v("#")]),t._v(" Simple Button Example")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    top"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbutton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You clicked the button"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous example as an Alloy view.")]),t._v(" "),n("p",[t._v("button.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- The title property can also be defined as node text. --\x3e")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Button")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doClick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("50"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("button.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doClick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Titanium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You clicked the button"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports},450:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAAAyCAMAAAByKeWyAAAAvVBMVEVaWVv///9cW13x8fHr6utWVVdOTU/9/f3u7u7f39+tra1raWxRUFOMi4zo6OhwbnBXVlhbWlxeXV9TUlR3dnd0c3U8Oj1YV1lMSk1EQkX39/dPTlDDwsP8/Pz5+fnz8/OTkpSAf4He397KyspJR0p6eXtlZGbMzM3FxcWOjo9tbG61tbaqqqvt7e3k5OTQ0NCxsbKIh4lBP0L7+/v19fXW1tbIx8iEg4U/PUC8u7ykpKWWlZegn6GamZsgHCWuuOyWAAACrElEQVRYw+2Y626bMBiGbYOBpAZiO8RgkkBbQhpyPjWHtrv/yxqGsK3Vflmi2qo+UpRXjsWjj8/YKMCE7WN+PcvYaIn9H5ZVWty1gv+6hPbNIlOC20FkC7upxQkEBa2AyEw2FtPvgVZQlqSxeC1aXONzLPYXquXbom8RzfAXqOWvFsoYraYyWn5qykEEQDPaJISQroWK3U5QQHvRGaNsULGjZJDVv0YDTm9X2mW7kFI9i0DXay5QL39dFJbbXZR0X0GwmanJiL91fQwUZNIdzmcYUy0LBsky4IgE5vh+8Az3+/F4bKIZnHIEAIs6tkvUhfnVsOXIHuY9qmcxzAAzHnilZQinpzRNXT6Dj8qCooeRyylAlisPm9ObB+dEaFpULfHN0v0Rnc9RnL63CDGF8yw6u+NlzqluLZw2lnmslhJ5b0Fk4shJyBh5sLdE0yKP6/X0KKWyeNMyT7KX9xZre3DuSGmfwheiecdsQzEqLU9QOo5jbqOPFvdgVpZH+KZrWW79frE1qzt2yX3fZx/6guJTYhSlJV7DVNdi+hbOiltfIoExUH3BCCGmLGXAxcp2I9ZjppwQ3e73e79W8mZArNAqa3neWWHIS8t9FJZc4Jpl4cLuIEw1TuTqqcSIBN5e9WU1fHp6vrAZNFXYZB14VOFUPNid+eP+8EI0n0pvVVk6zv35YigSL9/W4Rgekypcs2CayEMn5Zp7MuoHTADBgj7rFZO+IqB5HXzg1yGnHExmp9yiVM8CrFiorTm2BOWhVRLGAIehCgSQegRXEyyMtE8xhG5fFKAbgDYB1VBQD/3jZ+V/Zfl+g/22tPoGy3+vMbXBo1ZgVpo0lmTO4thqgZjcDWVjkd5w022FzaM5bvoyMsxVpxVWZmI3FnskDacVEjmCjaXEbolP/efqJ//ZZwIKjmcMAAAAAElFTkSuQmCC"},451:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAyCAMAAAATMcfwAAAAkFBMVEX////6/P/x9//8/v/4+//k7v+vzv+Ruv9Rhf9Mf//1+f9Ogf/g7P/T5P+71P+kxf/0+P/o8f9hlv+Hsv+qyv/v9f/D2v/s9P/O4f+10P/I3v9bj/9Uiv+Er/+dwf9mmv9jl/9Jd/+20v9XjP/b6f+/2P+Arv98q/9wov9dkv+Xvv91pv/X5v9rnv+Ktf+Br/9ciuSvAAAB1UlEQVRYw+2TyXKjMBBA3UiITQKJZZAFgQk7Xv//70YGz2DPxSE5JAfeAbq6Va8E3b3b2NjY+AkAQn8jQM8lNCX0Yw1IVJLOIW9bCY81TkkDYBIGa4xYZRf/7j6fLfexZu7z2DXa/GCsMv6y3/az0Qx/R/zJSLzANXzH+rIRASD0bJyzgD5lBE6lpCn6z4hNJpmJP2EEFZR1Xl7ZkxGl8Tmrs5II+ICxj9MbgoWhNrZl1pFgCM8UHozC8s5FXJT2QX3AOA7WRGSPEeeXcvDpKX4bCV+MXJZZwBoW1EPBXxsdL595HyNDhMMhwZjus04sRpPYvYn0gB2zo3htLLt4osjDKJHeYFVVtS/GuqH/jO3FbqemxPXIXhs7Ajdcqv9jWjnvdzy2GElvz4vjZ5la1+tEOV3MJk54+Wo/stVkJPUoVxpP+srcdRNa+cZilAc7mIbyUJfNOuPcGQRC9Va6GKnuDAWEzakz6yYciiwrmlNxzGP+MI+0dy6qUVfvukdrdyYpjp7jOLXlPu4MPvW2znod47sXoEQ26V3OGNUXSKgicSt1EgslEKSK6qaAkBWppIDdSyBx8V1uGO7thVNKhQG3KME7pA/M50xqJrDb2NjY2Pg+/gAndS1UAjmfpAAAAABJRU5ErkJggg=="},452:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAyCAMAAABoFQU8AAAAsVBMVEUAAAD///9CQkIZGRmbm5toaGgICAhaWlrp6el2dnYLCwsFBQVWVlYQEBC7u7umpqYmJiajo6NbW1tTU1OWlpZ/f39KSko3NzcjIyMbGxve3t7Nzc3Jycm/v79eXl5NTU0fHx8VFRXT09PQ0NDFxcWNjY1sbGwwMDAsLCz8/Pzw8PC1tbWgoKB1dXVvb2/o6Ojg4ODZ2dmsrKyrq6uDg4NiYmKdnZ2SkpJ8fHw9PT3ExMRv4IIjAAABWUlEQVRYw+3W126DMBSAYRfKCGASdsweYSQEslff/8FK1kVvQqWeSGnr/4IrS59srCMjGo1Ge8Vkx3yHyXTkhxIfTt9gmob8Y0kQLRYiSxR6pQZB1HxDGoBIAyq9goRjzBMig0tyWZTdd8RV92W7TTQ2zRhcksI07KTIV+7L2kAZDbUxvKRnQifZE+N8cAmP+EK9SVKCZVDJU24SGUw87XSXpFZNvS0BlARXPZhm7Rn46Fl6rVXcVWrcvW4urARQWojL5XKRGU49dKrcVy7SvAw2Y4Q3agl5erosS9HEsH1xtXID4yox/nk7+YfzhBtxCvYVS1hcXCQnmMdIGkLuKUz1s+Qr7CFrnIhJiustz92tfXQh/5NRR53ErG1Uva9Sn8OhFsV5HuNt5qYWedI0wkT6MpakvzJhf5nUgkhtvzRb77ift1vP+qUpzHOvT0IsAxWLaDQa7X/3CXiRKDPhuB3eAAAAAElFTkSuQmCC"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1131:function(t,e,n){"use strict";n.r(e);var a=n(21),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"modules-map-annotation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-map-annotation"}},[t._v("#")]),t._v(" Modules.Map.Annotation")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("p",[t._v("The "),n("code",[t._v("Annotation")]),t._v(" object gives you low-level control over annotations that can be added to\n"),n("type-link",{attrs:{type:"Modules.Map.View"}},[t._v("map view")]),t._v(". An annotation must have its "),n("code",[t._v("latitude")]),t._v(" and "),n("code",[t._v("longitude")]),t._v("\nproperties set to appear on a map.")],1),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Modules.Map.createAnnotation"}},[t._v("Modules.Map.createAnnotation")]),t._v(" method to create an annotation.  Starting with Alloy\n1.4.0, use the "),n("strong",[n("code",[t._v("<Annotation>")])]),t._v(" Alloy element to define one in XML markup.")],1),t._v(" "),n("p",[t._v("An annotation can also have a title, a subtitle, and two inset buttons or views on the left\nand right side of the title. All of these items are optional.")]),t._v(" "),n("p",[t._v("The controls on the left and right side of the annotation can be specified in one of two\nways:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("To display an image, set the "),n("a",{attrs:{href:"Titanium.Map.Annotation.leftButton"}},[t._v("leftButton")]),t._v(" or\n"),n("a",{attrs:{href:"Titanium.Map.Annotation.rightButton"}},[t._v("rightButton")]),t._v(" property to an image URL. (On\niOS, you can also use a "),n("a",{attrs:{href:"Titanium.UI.iPhone.SystemButton"}},[t._v("SystemButton")]),t._v(" constant\nto use one of the native system button icons.)")])]),t._v(" "),n("li",[n("p",[t._v("To add another type of view to the annotation, set the\n"),n("a",{attrs:{href:"Titanium.Map.Annotation.leftView"}},[t._v("leftView")]),t._v(" or\n"),n("a",{attrs:{href:"Titanium.Map.Annotation.rightView"}},[t._v("rightView")]),t._v(" property to a "),n("type-link",{attrs:{type:"Titanium.UI.View"}},[t._v("View")]),t._v("\nobject.")],1)])]),t._v(" "),n("p",[t._v("An annotation has two states: selected and deselected. A deselected annotation\nis marked by a pin image. When the user selects the pin, the full annotation is\ndisplayed.")]),t._v(" "),n("p",[t._v("You can specify a custom image for the map pin by setting the\n"),n("type-link",{attrs:{type:"Modules.Map.Annotation.image"}},[t._v("image")]),t._v(" property.")],1),t._v(" "),n("p",[t._v("When the user clicks on an annotation, a "),n("code",[t._v("click")]),t._v(" event is generated.")]),t._v(" "),n("p",[t._v("On iOS, You can add a click event listener to a specific annotation, or add a\nclick event listener to the map view to receive click events from all annotations\non the map.")]),t._v(" "),n("p",[t._v("On Android, you must add the click event listener to the map view; the annotation\nitself does not generate these events.")]),t._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);e.default=o.exports}}]);
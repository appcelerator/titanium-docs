(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1136:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"scrolling-views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrolling-views"}},[t._v("#")]),t._v(" Scrolling Views")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("Titanium offers two types of scrolling view containers: the ScrollView and the ScrollableView. While the names are similar, their purpose and functionality differs. We'll take a look at both in this section.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("h3",{attrs:{id:"scrollview-vs-scrollableview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-vs-scrollableview"}},[t._v("#")]),t._v(" ScrollView vs. ScrollableView")]),t._v(" "),s("p",[s("img",{attrs:{src:a(793),alt:"Screen_shot_2011-12-08_at_11.42.09_AM"}})]),t._v(" "),s("p",[t._v("As shown in the preceding image:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScrollView"),s("OutboundLink")],1),t._v(" is a scrollable area of content that doesn’t have to fill the viewport. Users can drag to scroll in either direction.")])]),t._v(" "),s("li",[s("p",[t._v("A "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScrollableView"),s("OutboundLink")],1),t._v(' is a screen-size component containing multiple sub-views. ScrollableViews are sort of like a coverflow view, or scrolling image gallery in that they contain "pages" that "snap" into place as you swipe across the container. In common usage, ScrollableViews typically display a page indicator. ScrollableViews scroll horizontally (side-to-side) only.')])])]),t._v(" "),s("p",[t._v("View the video, "),s("a",{attrs:{href:"./attachments_29229692_1_scrollingviews.mov"}},[t._v("scrollingviews.mov")]),t._v(", which may make the differences clearer.")]),t._v(" "),s("h3",{attrs:{id:"scrollview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollview"}},[t._v("#")]),t._v(" ScrollView")]),t._v(" "),s("p",[t._v("You create a ScrollView using the "),s("code",[t._v("createScrollView()")]),t._v(" method, as shown here:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createScrollView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* left & right work too */")]),t._v("\n  contentHeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  contentWidth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SIZE")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("height")]),t._v(" and "),s("code",[t._v("width")]),t._v(" properties define the dimensions of the ScrollView – meaning how much space within the window is used by the ScrollView. The "),s("code",[t._v("contentHeight")]),t._v(" and "),s("code",[t._v("contentWidth")]),t._v(" properties define the dimensions of the scrolling content within the ScrollView. By default, these values are set to the size of the content. If you set "),s("code",[t._v("contentHeight")]),t._v("/"),s("code",[t._v("contentWidth")]),t._v(' smaller than the content requires, that content will be clipped. If you set those dimensions larger than the content, extra "padding" will be displayed.')]),t._v(" "),s("h4",{attrs:{id:"scrollview-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-properties"}},[t._v("#")]),t._v(" ScrollView properties")]),t._v(" "),s("p",[t._v("There are a few interesting properties on the ScrollView. These include:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Property")])]),t._v(" "),s("th",[s("strong",[t._v("Description")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("zoomScale, minZoomScale, maxZoomScale")]),t._v(" "),s("td",[t._v("You can control zooming of the content within the ScrollView with these properties. Each accepts a numeric value between 0 and 1.")])]),t._v(" "),s("tr",[s("td",[t._v("horizontalBounce, verticalBounce")]),t._v(" "),s("td",[t._v('(iOS only) These Boolean values control whether the ScrollView displays that "bounce" effect when the user has reached the end of the scrolling content.')])]),t._v(" "),s("tr",[s("td",[t._v("showHorizontalScrollIndicator, showVerticalScrollIndicator")]),t._v(" "),s("td",[t._v("These Boolean values control whether the scroll indicator (scrollbar-like gizmo) is displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("scrollType")]),t._v(" "),s("td",[t._v('On Android, you can set the ScrollView to either "vertical" or "horizontal" but not both.')])]),t._v(" "),s("tr",[s("td",[t._v("canCancelEvents")]),t._v(" "),s("td",[t._v("On iOS, you can set this value to "),s("code",[t._v("true")]),t._v(" (default) so that events are handled by the ScrollView rather than the views it contains.")])])])]),t._v(" "),s("h5",{attrs:{id:"android-specifics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#android-specifics"}},[t._v("#")]),t._v(" Android specifics")]),t._v(" "),s("p",[t._v("As noted in the preceding table, on Android, a ScrollView can be either vertical or horizontal but not both. If you do not specify a type, the following logic is used to determine which scrolling direction to enable:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If you provide a "),s("code",[t._v("width")]),t._v(" and "),s("code",[t._v("contentWidth")]),t._v(" and they are equal "),s("code",[t._v("scrollType")]),t._v(' defaults to "vertical"')])]),t._v(" "),s("li",[s("p",[t._v("If you provide a "),s("code",[t._v("height")]),t._v(" and "),s("code",[t._v("contentHeight")]),t._v(" and they are equal "),s("code",[t._v("scrollType")]),t._v(' defaults to "horizontal"')])])]),t._v(" "),s("p",[t._v("If Titanium cannot determine a default scroll direction and you have not explicitly set one, (as of API 1.8) you will see a warning in the console: "),s("code",[t._v("TiUIScrollView ... Scroll direction could not be determined..")])]),t._v(" "),s("h4",{attrs:{id:"scrollview-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollview-events"}},[t._v("#")]),t._v(" ScrollView events")]),t._v(" "),s("p",[t._v("You can add eventListeners to your ScrollView the same way you'd add them to buttons, labels, and so forth. Check out the "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),s("OutboundLink")],1),t._v(" for a complete list of event types supported as well as the event object properties available within an event's listener.")]),t._v(" "),s("h3",{attrs:{id:"scrollableview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollableview"}},[t._v("#")]),t._v(" ScrollableView")]),t._v(" "),s("p",[t._v("ScrollableViews display a set of Ti.UI.View objects within a scrolling container. You can create those sub-views prior to creating the ScrollableView or add them later, as shown here:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#123'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#234'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#345'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createScrollableView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    views"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("view1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("view2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("view3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  showPagingControl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrollable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add another view")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" view4 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#456'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscrollable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and you could remove a view with")]),t._v("\nscrollable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("view1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In general, you should define the views first and add them to the "),s("code",[t._v("views")]),t._v(" array when you create the ScrollableView. That method will (in theory) render the quickest.")]),t._v(" "),s("h4",{attrs:{id:"scrollableview-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollableview-properties"}},[t._v("#")]),t._v(" ScrollableView properties")]),t._v(" "),s("p",[t._v("There are a few interesting properties on the ScrollView. These include:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Property")])]),t._v(" "),s("th",[s("strong",[t._v("Description")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("showPagingControl")]),t._v(" "),s("td",[t._v("Boolean, set to "),s("code",[t._v("false")]),t._v(" (default) to hide the paging control (the dots that show which page you're viewing)")])]),t._v(" "),s("tr",[s("td",[t._v("pagingControlColor")]),t._v(" "),s("td",[t._v("Set the background color for the paging control; you can't control the color of the dots.")])]),t._v(" "),s("tr",[s("td",[t._v("pagingControlHeight")]),t._v(" "),s("td",[t._v("Set the height of the paging control area.")])]),t._v(" "),s("tr",[s("td",[t._v("currentPage")]),t._v(" "),s("td",[t._v("This property accepts an index number of the view to display (zero-based, so "),s("code",[t._v("currentPage=2")]),t._v(" would show the third view within the ScrollableView)")])]),t._v(" "),s("tr",[s("td",[t._v("cacheSize")]),t._v(" "),s("td",[t._v("This iOS-only property accepts an integer value to control the number of views pre-rendered. See the "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),s("OutboundLink")],1),t._v(" for considerations when using this property.")])])])]),t._v(" "),s("h4",{attrs:{id:"scrollableview-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollableview-methods"}},[t._v("#")]),t._v(" ScrollableView methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("Method")])]),t._v(" "),s("th",[s("strong",[t._v("Description")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("scrollToView()")]),t._v(" "),s("td",[t._v("Accepts an integer or object reference of the sub-view to scroll into view within the ScrollableView.")])]),t._v(" "),s("tr",[s("td",[t._v("addView()")]),t._v(" "),s("td",[t._v("Adds a view to the ScrollableView, as shown in the code above.")])]),t._v(" "),s("tr",[s("td",[t._v("removeView()")]),t._v(" "),s("td",[t._v("Removes a view from the ScrollableView, as shown in the code above.")])])])]),t._v(" "),s("h4",{attrs:{id:"scrollableview-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollableview-events"}},[t._v("#")]),t._v(" ScrollableView events")]),t._v(" "),s("p",[t._v("The ScrollableView supports the standard set of events. The "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),s("OutboundLink")],1),t._v(" list the events and event object properties available to you.")]),t._v(" "),s("h3",{attrs:{id:"hands-on-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[t._v("#")]),t._v(" Hands-on Practice")]),t._v(" "),s("h4",{attrs:{id:"goal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),s("p",[t._v("In this lab, you will create a scroll view containing a list of baseball players. That list will extend left/right beyond the width of the viewport. When the user taps a player's name, three images of that player will be displayed in a scrollable view located below the scroll view. The finished app will look like this:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(794),alt:"20110623-p6a1spsixn1r5mrmfe1eswgwj5"}})]),t._v(" "),s("h4",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the starting point code, which includes the necessary graphics, from "),s("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/335.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://assets.appcelerator.com.s3.amazonaws.com/app_u/code/335.zip"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Download and extract the starting point code. Import the project into Studio.")])]),t._v(" "),s("li",[s("p",[t._v("In app.js, define three image view objects which initially display the images/harmon1.jpg, images/harmon2.jpg, and images/harmon3.jpg files. There's a placeholder comment in the file to help you locate the appropriate location.")])]),t._v(" "),s("li",[s("p",[t._v("Declare a scrollable view that is 30 points down from the top of the window. It should show a 30 point high paging controller. Set its views to be the three image views you created.")])]),t._v(" "),s("li",[s("p",[t._v("Write the "),s("code",[t._v("updateSVImages()")]),t._v(" function to update the three image views when called. This function accepts a simple array of image strings. Update the event listener to call your function, passing the required array of images. Make sure the first image view is displayed when the event listener is triggered.")])]),t._v(" "),s("li",[s("p",[t._v("In "),s("code",[t._v("createCustomScrollView()")]),t._v(" create a scroll view object that fills the width of the screen but is 30 points tall. Make sure to provide for sufficient content width. Set the background color to be green.")])]),t._v(" "),s("li",[s("p",[t._v("To the "),s("code",[t._v("container")]),t._v(" component, add the five labels using the "),s("code",[t._v("createCustomLabel()")]),t._v(" function provided.")])]),t._v(" "),s("li",[s("p",[t._v("Write the event listener to watch for the click event. When fired, it should test for the existence of the "),s("code",[t._v("player")]),t._v(" custom property. If it exists, fire the app level event to match the one you defined in the scrollable view. Pass an array of images constructed from the image path and the player's name as stored in the "),s("code",[t._v("player")]),t._v(" property.")])]),t._v(" "),s("li",[s("p",[t._v("Build and run your app in the simulator/emulator. Correct any errors and build again. Compare your finished work to the screenshot above. You should be able to click a player's name and have his pictures show in the scrollable view.")])])]),t._v(" "),s("h3",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("API docs - "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollView-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScrollView"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("API docs - "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ScrollableView-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScrollableViews"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Integrating_Web_Content/The_WebView_Component/"}},[t._v("WebViews")]),t._v(" as scrollable containers")],1)])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this section, you learned the differences between the ScrollView and ScrollableView components. You also learned how to implement each of them. Along with the WebView, these scrolling content containers enable you to display more information than will fit onto a single screen.")])])}),[],!1,null,null,null);e.default=o.exports},793:function(t,e,a){t.exports=a.p+"assets/img/Screen_shot_2011-12-08_at_11.42.09_AM.7c3caed2.png"},794:function(t,e,a){t.exports=a.p+"assets/img/20110623-p6a1spsixn1r5mrmfe1eswgwj5.5a4fd520.jpg"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[922],{2196:function(e,t,a){"use strict";a.r(t);var r=a(21),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-user-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-user-information"}},[e._v("#")]),e._v(" Titanium User Information")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The examples in this page use the "),a("em",[a("strong",[e._v("Prototype")])]),e._v(" library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("These set of actions can retrieve a Titanium User log-in information from the Studio.")]),e._v(" "),a("h2",{attrs:{id:"invocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invocation"}},[e._v("#")]),e._v(" Invocation")]),e._v(" "),a("p",[e._v("This command is executed immediately in a synchronous way.")]),e._v(" "),a("h2",{attrs:{id:"get-the-user-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-user-information"}},[e._v("#")]),e._v(" Get the User Information")]),e._v(" "),a("p",[e._v("The following "),a("em",[e._v("dispatch")]),e._v(" call will get the Titanium user basic information:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("userInfo = dispatch($H({\n  controller: 'portal.user',\n  action: \"getUser\"\n}).toJSON()).evalJSON();\n")])])]),a("p",[e._v("The returned "),a("em",[e._v("user information")]),e._v(" JSON holds this information:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("key")]),e._v(" "),a("th",[e._v("description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("id")]),e._v(" "),a("td",[e._v("A user ID")])]),e._v(" "),a("tr",[a("td",[e._v("name")]),e._v(" "),a("td",[e._v("The user-name")])]),e._v(" "),a("tr",[a("td",[e._v("email")]),e._v(" "),a("td",[e._v("The user-email")])]),e._v(" "),a("tr",[a("td",[e._v("hash")]),e._v(" "),a("td",[e._v("An email MD5 hash that can be used to retrieve the user's Gravatar")])])])]),e._v(" "),a("h2",{attrs:{id:"sample-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-of-use"}},[e._v("#")]),e._v(" Sample of use")]),e._v(" "),a("p",[e._v("From "),a("em",[a("strong",[a("a",{attrs:{href:"https://github.com/aptana/studio3-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("studio3-sdk"),a("OutboundLink")],1)])]),e._v(" repository ("),a("em",[e._v("user.js")]),e._v(")")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/**\n * Render the items that will display the Titanium-User information\n */\nrender : function() {\n  userDiv = $(\'user\');\n  with(Elements.Builder) {\n  if( typeof (console) !== \'undefined\' && typeof (dispatch) !== \'undefined\') {\n    console.log("Dispatching the \'getUser\' action on the \'portal.user\' controller...");\n    userInfo = dispatch($H({\n      controller: \'portal.user\',\n      action: "getUser"\n    }).toJSON()).evalJSON();\n    userTable = table({\n      "border": "1",\n      "style": "border-collapse:collapse"\n    }, tbody(\n    tr(\n      th("ID"),\n      th("Name"),\n      th("Email"),\n      th("Image")),\n    tr(\n      td(userInfo["id"]),\n      td(userInfo["name"]),\n      td(userInfo["email"]),\n      td(img({"src": "http://www.gravatar.com/avatar/" + userInfo["hash"]}))\n    )\n    ));\n    userDiv.appendChild(userTable);\n    }\n  }\n}\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
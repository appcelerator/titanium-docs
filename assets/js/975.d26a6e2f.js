(window.webpackJsonp=window.webpackJsonp||[]).push([[975],{2095:function(a,t,e){"use strict";e.r(t);var s=e(21),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"using-the-assert-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-assert-api"}},[a._v("#")]),a._v(" Using the Assert API")]),a._v(" "),e("p",[a._v("This page explains how to use the Assert API feature that is part of the Studio JavaScript debugger.")]),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v('Use the Assert API to determine whether a condition that you specify is true or false at a given moment. You can do this by adding the code "aptana.assert_CallName_" to your code where you want to test the condition.')]),a._v(" "),e("h2",{attrs:{id:"instructions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[a._v("#")]),a._v(" Instructions")]),a._v(" "),e("p",[a._v("The Assert API has a variety of available calls for you to test various conditions in your code. The list below displays the reference information for each call.")]),a._v(" "),e("h3",{attrs:{id:"aptana-fail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-fail"}},[a._v("#")]),a._v(" aptana.fail")]),a._v(" "),e("p",[a._v("Displays if the code fails at the specified point.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.fail(message,arg1,arg2,...);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.fail("Failed!", "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assert"}},[a._v("#")]),a._v(" aptana.assert")]),a._v(" "),e("p",[a._v("Asserts the specified statement.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assert(object, arg1, arg2, ...);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assert(null, "This is my assert message!", "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertequals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertequals"}},[a._v("#")]),a._v(" aptana.assertEquals")]),a._v(" "),e("p",[a._v("Returns true if the arguments are equal.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertEquals(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertEquals(1,2, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotequals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotequals"}},[a._v("#")]),a._v(" aptana.assertNotEquals")]),a._v(" "),e("p",[a._v("Returns true if the arguments are not equal.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotEquals(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotEquals(1,1 "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertgreater"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertgreater"}},[a._v("#")]),a._v(" aptana.assertGreater")]),a._v(" "),e("p",[a._v("Returns true if the first argument is greater than the second argument(s).")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertGreater(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertGreater(1,2,"arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotgreater"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotgreater"}},[a._v("#")]),a._v(" aptana.assertNotGreater")]),a._v(" "),e("p",[a._v("Returns true if the first argument is not greater than the second argument(s).")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotGreater(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotGreater(1,2,"arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertless"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertless"}},[a._v("#")]),a._v(" aptana.assertLess")]),a._v(" "),e("p",[a._v("Returns true if the first argument is less than the second argument(s).")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertLess(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertLess(2,1, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotless"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotless"}},[a._v("#")]),a._v(" aptana.assertNotLess")]),a._v(" "),e("p",[a._v("Returns true if the first argument is not less than the second argument(s).")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotLess(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotLess(2,1, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertcontains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertcontains"}},[a._v("#")]),a._v(" aptana.assertContains")]),a._v(" "),e("p",[a._v("Returns true if the objects contain the arguments.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertContains(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertContains("x",window, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotcontains"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotcontains"}},[a._v("#")]),a._v(" aptana.assertNotContains")]),a._v(" "),e("p",[a._v("Returns true if the objects do not contain the arguments.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotContains(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotContains("document",window, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-asserttrue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-asserttrue"}},[a._v("#")]),a._v(" aptana.assertTrue")]),a._v(" "),e("p",[a._v("Returns true if the specified condition is true.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertTrue(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertTrue(false, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertfalse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertfalse"}},[a._v("#")]),a._v(" aptana.assertFalse")]),a._v(" "),e("p",[a._v("Returns true if the specified condition is false.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertFalse(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertFalse(true, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnull"}},[a._v("#")]),a._v(" aptana.assertNull")]),a._v(" "),e("p",[a._v("Returns true if the specified object/arguments are null.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNull(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNull(window, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotnull"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotnull"}},[a._v("#")]),a._v(" aptana.assertNotNull")]),a._v(" "),e("p",[a._v("Returns true if the specified object/arguments are not null.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotNull(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotNull(null, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertundefined"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertundefined"}},[a._v("#")]),a._v(" aptana.assertUndefined")]),a._v(" "),e("p",[a._v("Returns true if the specified object/arguments are undefined.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertUndefined(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertUndefined(window, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotundefined"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotundefined"}},[a._v("#")]),a._v(" aptana.assertNotUndefined")]),a._v(" "),e("p",[a._v("Returns true if the specified object/arguments are not undefined.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotUndefined(object,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" aptana"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("assertNotUndefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arg1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arg2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h3",{attrs:{id:"aptana-assertinstanceof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertinstanceof"}},[a._v("#")]),a._v(" aptana.assertInstanceOf")]),a._v(" "),e("p",[a._v("Returns true if the argument(s) are an instance of the object(s).")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertInstanceOf(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertInstanceOf("str",Date, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnotinstanceof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnotinstanceof"}},[a._v("#")]),a._v(" aptana.assertNotInstanceOf")]),a._v(" "),e("p",[a._v("Returns true if the argument(s) are not an instance of the objects.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotInstanceOf(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotInstanceOf(new Date(),Date, "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-asserttypeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-asserttypeof"}},[a._v("#")]),a._v(" aptana.assertTypeOf")]),a._v(" "),e("p",[a._v("Returns true if the argument(s) are the type of the objects.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertTypeOf(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertTypeOf(1, "string", "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"aptana-assertnottypeof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aptana-assertnottypeof"}},[a._v("#")]),a._v(" aptana.assertNotTypeOf")]),a._v(" "),e("p",[a._v("Returns true if the argument(s) are not a type of objects.")]),a._v(" "),e("p",[e("strong",[a._v("Syntax")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("aptana.assertNotTypeOf(o1,o2,arguments);\n")])])]),e("p",[e("strong",[a._v("Example")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('aptana.assertNotTypeOf(1,"number", "arg1", "arg2");\n')])])]),e("h3",{attrs:{id:"related-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[a._v("#")]),a._v(" Related Topics")]),a._v(" "),e("ul",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/About_the_Debug_perspective/"}},[a._v("About the Debug perspective")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Installing_the_JavaScript_debugger/"}},[a._v("Installing the JavaScript debugger")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Uninstalling_the_debugger/"}},[a._v("Uninstalling the debugger")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Running_the_debugger/"}},[a._v("Running the debugger")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Accessing_your_debugger_log/"}},[a._v("Accessing your debugger log")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Stepping_into_and_over_functions/"}},[a._v("Stepping into and over functions")])],1)]),a._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Debugging_JavaScript/Adding_a_breakpoint/"}},[a._v("Adding a breakpoint")])],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);
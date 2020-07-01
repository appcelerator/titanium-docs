(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{1385:function(e,a,t){"use strict";t.r(a);var s=t(21),v=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"debugger-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debugger-protocol"}},[e._v("#")]),e._v(" Debugger Protocol")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("A reference to the Studio Debugger Protocol used in Aptana Studio, Titanium Studio and Appcelerator Studio.")]),e._v(" "),t("p",[e._v("Request packet format:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("length*request_id*command*arg0*arg1*arg2*...argN\n")])])]),t("p",[e._v("Reply packet format:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("length*request_id*arg0*arg1*arg2*...argN\n")])])]),t("p",[e._v("Unsolicited message format:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("length*message*arg0*arg1*arg2*...argN\n")])])]),t("p",[e._v("where:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("length")]),e._v(" : integer value of the remaining part of a packet")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("request_id")]),e._v(" : any string identifying request/response")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("command")]),e._v(" : request command name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("message")]),e._v(" : unsolicited message name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg0..N")]),e._v(" : command/response specific arguments")])])]),e._v(" "),t("p",[e._v("An argument could be split into sub-arguments:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("arg=subarg0|subarg1|subarg2|...subargN\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),t("p",[e._v("Requests with empty "),t("em",[e._v("request_id")]),e._v(" should not be replied.")])]),e._v(" "),t("h2",{attrs:{id:"arguments-encoding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arguments-encoding"}},[e._v("#")]),e._v(" Arguments encoding")]),e._v(" "),t("p",[e._v("All the arguments (args and subargs) should have the following set of characters encoded:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("# => #0")])]),e._v(" "),t("li",[t("p",[e._v("| => #1")])]),e._v(" "),t("li",[t("p",[e._v("* => #2")])])]),e._v(" "),t("h2",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),t("h3",{attrs:{id:"get-debugger-extension-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-debugger-extension-version"}},[e._v("#")]),e._v(" Get debugger extension version")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("version")]),e._v("\nRequest arguments: "),t("em",[e._v("none")]),e._v("\nReply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : debugger protocol version (currently are "),t("strong",[e._v("1")]),e._v(" or "),t("strong",[e._v("2")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : debugger extension/addon version")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825719*version\n <= 1176979825719*1*0.2.8.14083\n")])])]),t("h3",{attrs:{id:"force-debugger-extension-update"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#force-debugger-extension-update"}},[e._v("#")]),e._v(" Force debugger extension update")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("update")]),e._v("\nRequest arguments: "),t("em",[e._v("none")]),e._v("\nReply arguments:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : "),t("em",[e._v("(optional)")]),e._v(" version of updated debugger extension/addon (if available)")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825720*update\n <= 1176979825720*0.2.8.15000\n")])])]),t("h3",{attrs:{id:"set-debugger-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-debugger-options"}},[e._v("#")]),e._v(" Set debugger options")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("option")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : name of an option")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : new value of an option")])])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825721*option*suspendOnFirstLine*false\n <= 1176979825721\n")])])]),t("h3",{attrs:{id:"turn-on-debug-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#turn-on-debug-mode"}},[e._v("#")]),e._v(" Turn on debug mode")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("enable")]),e._v("\nRequest arguments: "),t("em",[e._v("none")]),e._v("\nReply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825726*enable\n <= 1176979825726\n")])])]),t("h3",{attrs:{id:"turn-off-debug-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#turn-off-debug-mode"}},[e._v("#")]),e._v(" Turn off debug mode")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("disable")]),e._v("\nRequest arguments: "),t("em",[e._v("none")]),e._v("\nReply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825727*disable\n <= 1176979825727\n")])])]),t("h3",{attrs:{id:"terminate-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminate-session"}},[e._v("#")]),e._v(" Terminate session")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("terminate")]),e._v("\nRequest arguments: "),t("em",[e._v("none")]),e._v("\nReply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825820*terminate\n <= 1176979825820\n")])])]),t("h3",{attrs:{id:"create-modify-remove-breakpoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-modify-remove-breakpoint"}},[e._v("#")]),e._v(" Create/modify/remove breakpoint")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("breakpoint")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : name of an action (allowed actions: "),t("em",[e._v("create")]),e._v(", "),t("em",[e._v("change")]),e._v(", "),t("em",[e._v("remove")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : URI of a file")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : line number")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg3")]),e._v(" : breakpoint state ("),t("em",[e._v("1")]),e._v(" - enabled, "),t("em",[e._v("0")]),e._v(" - disabled)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg4")]),e._v(" : hit count (no hit count if value is less or equal to 0)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg5")]),e._v(" : condition expression string (no condition if empty)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg6")]),e._v(" : condition meaning ("),t("em",[e._v("1")]),e._v(" - on true, "),t("em",[e._v("0")]),e._v(" - on expression value change)")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : action result status ("),t("em",[e._v("created")]),e._v(", "),t("em",[e._v("changed")]),e._v(", "),t("em",[e._v("removed")]),e._v(")")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825728*breakpoint*create*http://127.0.0.1:8000/debug_tests.html*116*1*0**1\n <= 1176979825728*created\n\n => 1176979825729*breakpoint*remove*http://127.0.0.1:8000/debug_tests.html*116\n <= 1176979825729*removed\n")])])]),t("h3",{attrs:{id:"create-modify-remove-exception-breakpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-modify-remove-exception-breakpoints"}},[e._v("#")]),e._v(" Create/modify/remove exception breakpoints")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("exception")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : name of an action (allowed actions: "),t("em",[e._v("create")]),e._v(", "),t("em",[e._v("change")]),e._v(", "),t("em",[e._v("remove")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : exception type name")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : action result status ("),t("em",[e._v("created")]),e._v(", "),t("em",[e._v("changed")]),e._v(", "),t("em",[e._v("removed")]),e._v(")")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825729*exception*create*TypeError\n <= 1176979825729*created\n")])])]),t("h3",{attrs:{id:"set-detail-formatters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-detail-formatters"}},[e._v("#")]),e._v(" Set detail formatters")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("detailFormatters")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0..argN")]),e._v(" : detail formatters 0-N")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : type name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : formatter expression text")])])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825730*detailFormatters*Date|this.toGMTString();\n <= 1176979825730\n")])])]),t("h3",{attrs:{id:"open-page-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-page-url"}},[e._v("#")]),e._v(" Open page URL")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("openURL")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : page URI to open")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825729*openUrl*http://127.0.0.1:8000/debug_tests.html\n <= 1176979825729\n")])])]),t("h3",{attrs:{id:"get-file-sources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-file-sources"}},[e._v("#")]),e._v(" Get file sources")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("getSource")]),e._v("\nRequest arguments:")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : file URI to retrieve sources")])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : command status ("),t("em",[e._v("success")]),e._v(", "),t("em",[e._v("failure")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : file contents")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825730*getSource*http://127.0.0.1:8000/debug_tests.html\n <= 1176979825730*success*<html><body></body></html>\n")])])]),t("h3",{attrs:{id:"suspend-script-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suspend-script-execution"}},[e._v("#")]),e._v(" Suspend script execution")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("suspend")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825731*suspend\n <= 1176979825731\n => 1176979825731*suspend*2\n <= 1176979825731\n")])])]),t("h3",{attrs:{id:"resume-script-execution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resume-script-execution"}},[e._v("#")]),e._v(" Resume script execution")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("resume")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825732*resume\n <= 1176979825732\n => 1176979825732*resume*2\n <= 1176979825732\n")])])]),t("h3",{attrs:{id:"step-into"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-into"}},[e._v("#")]),e._v(" Step into")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("stepInto")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825733*stepInto\n <= 1176979825733\n => 1176979825733*stepInto*2\n <= 1176979825733\n")])])]),t("h3",{attrs:{id:"step-over"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-over"}},[e._v("#")]),e._v(" Step over")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("stepOver")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825734*stepOver\n <= 1176979825734\n => 1176979825734*stepOver*2\n <= 1176979825734\n")])])]),t("h3",{attrs:{id:"step-return"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-return"}},[e._v("#")]),e._v(" Step return")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("stepReturn")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825735*stepReturn\n <= 1176979825735\n => 1176979825735*stepReturn*2\n <= 1176979825735\n")])])]),t("h3",{attrs:{id:"step-to-frame"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-to-frame"}},[e._v("#")]),e._v(" Step to frame")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("stepToFrame")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : frame id to step to")])]),e._v(" "),t("p",[e._v("Request arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : frame id to step to")])])]),e._v(" "),t("p",[e._v("Reply arguments: "),t("em",[e._v("none")]),e._v("\nExample:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825736*stepToFrame*2\n <= 1176979825736\n => 1176979825736*stepToFrame*2*2\n <= 1176979825736\n")])])]),t("h3",{attrs:{id:"get-stack-frames"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-stack-frames"}},[e._v("#")]),e._v(" Get stack frames")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("frames")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("): "),t("em",[e._v("none")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0..argN")]),e._v(" : frames 0-N")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : frame id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : frame/function name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(' : function arguments separated by ", "')])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg3")]),e._v(" : file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg4")]),e._v(" : line number")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg5")]),e._v(" : function native flag ("),t("em",[e._v("temporary unused")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg6")]),e._v(" : engine's internal frame PC (if available)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg7")]),e._v(" : function's script id")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825740*frames\n <= 1176979825740*0|testVariables||http://127.0.0.1:8000/debug_tests.html|166|false|226|238*1|onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1|false|4|261\n => 1176979825740*frames*2\n <= 1176979825740*0|testVariables||http://127.0.0.1:8000/debug_tests.html|166|false|226|238*1|onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1|false|4|261\n")])])]),t("h3",{attrs:{id:"get-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-variables"}},[e._v("#")]),e._v(" Get variables")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("variables")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : variable name")])]),e._v(" "),t("p",[e._v("Request arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : variable name")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0..argN")]),e._v(" : variable properties 0-N")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : property name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : property type")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(" : property flags (see "),t("a",{attrs:{href:"#variable-property-flags"}},[e._v("#Variable property flags")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg3")]),e._v(" : property value")])])]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"#special-variables"}},[e._v("#Special variables")]),e._v(".")]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('=> 1176979825731*variables*frame[0]\n <= 1176979825731*this|Window|o|[object Window]*vArray|Array|lowpv|item0,,,itemN*vBool|Boolean|lwpv|false*vDate|Date|lwpv|Thu Apr 19 2007 17:50:33 GMT+0700*vError|Error|lowpv|Error*vMyObj|MyObject|lowpv|[object Object]*vNum|Number|lwpv|7*vObj|Object|lowpv|[object Object]*vObj2|Object|lowpv|Object toString() method is used here*vRect|Shape|lowpv|[object Object]*vStr|String|lwpv|"Hello, World!"\n\n => 1176979825733*variables*eval[0]\n <= 1176979825733*height|integer|wn|1*type|String|wn|"rect"*width|integer|wn|1*x|integer|wn|0*y|integer|wn|0\n => 1176979825733*variables*2*eval[0]\n <= 1176979825733*height|integer|wn|1*type|String|wn|"rect"*width|integer|wn|1*x|integer|wn|0*y|integer|wn|0\n')])])]),t("h3",{attrs:{id:"get-variable-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-variable-details"}},[e._v("#")]),e._v(" Get variable details")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("details")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : variable name")])]),e._v(" "),t("p",[e._v("Request arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : variable name")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : command status ("),t("em",[e._v("result")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : detailed value (toString representation)")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825734*details*frame[0].vRect\n <= 1176979825734*result*{x: 0, y: 0, w: 10, h: 10}\n => 1176979825734*details*2*frame[0].vRect\n <= 1176979825734*result*{x: 0, y: 0, w: 10, h: 10}\n")])])]),t("h3",{attrs:{id:"evaluate-expression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evaluate-expression"}},[e._v("#")]),e._v(" Evaluate expression")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("eval")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : evaluation context (variable name)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : expression")])])]),e._v(" "),t("p",[e._v("Request arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : evaluation context (variable name)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : expression")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : command status ("),t("em",[e._v("result")]),e._v(", "),t("em",[e._v("exception")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : evaluation id or exception text")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : evaluation result")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : property type")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : property flags (see "),t("a",{attrs:{href:"#variable-property-flags"}},[e._v("#Variable property flags")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(" : property value")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825732*eval*frame[0]*vRect\n <= 1176979825732*result*0*Shape|ow|[object Object]\n or\n <= 1176979825732*exception*Undefined variable\n => 1176979825732*eval*2*frame[0]*vRect\n <= 1176979825732*result*0*Shape|ow|[object Object]\n")])])]),t("h3",{attrs:{id:"change-variable-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-variable-value"}},[e._v("#")]),e._v(" Change variable value")]),e._v(" "),t("p",[e._v("Command: "),t("strong",[e._v("setValue")]),e._v("\nRequest arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : variable name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : value reference name")])])]),e._v(" "),t("p",[e._v("Request arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : variable name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : value reference name")])])]),e._v(" "),t("p",[e._v("Reply arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : command status ("),t("em",[e._v("result")]),e._v(", "),t("em",[e._v("exception")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : value property or exception text")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : property type")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : property flags (see [aptanastudiodev:"),t("a",{attrs:{href:"#variable-property-flags"}},[e._v("#Variable property flags")]),e._v("])")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(" : property value")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("=> 1176979825735*setValue*frame[0].vRect2*eval[1]\n <= 1176979825735*result*String|w|Hello!\n => 1176979825735*setValue*2*frame[0].vRect2*eval[1]\n <= 1176979825735*result*String|w|Hello!\n")])])]),t("h2",{attrs:{id:"unsolicited-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsolicited-messages"}},[e._v("#")]),e._v(" Unsolicited messages")]),e._v(" "),t("h3",{attrs:{id:"suspend-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suspend-notification"}},[e._v("#")]),e._v(" Suspend notification")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("suspended")]),e._v("\nMessage arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : suspend reason ("),t("em",[e._v("breakpoint")]),e._v(", "),t("em",[e._v("keyword")]),e._v(", "),t("em",[e._v("requested")]),e._v(", "),t("em",[e._v("exception")]),e._v(", "),t("em",[e._v("firstLine")]),e._v(" or any of stepping command names)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : top frame's file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : top frame's line number")])])]),e._v(" "),t("p",[e._v("Message arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : suspend reason ("),t("em",[e._v("breakpoint")]),e._v(", "),t("em",[e._v("keyword")]),e._v(", "),t("em",[e._v("requested")]),e._v(", "),t("em",[e._v("exception")]),e._v(", "),t("em",[e._v("firstLine")]),e._v(" or any of stepping command names)")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : top frame's file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg3")]),e._v(" : top frame's line number")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= suspended*keyword*http://127.0.0.1:8000/debug_tests.html*166\n <= suspended*stepInto*http://127.0.0.1:8000/debug_tests.html*167\n <= suspended*2*keyword*http://127.0.0.1:8000/debug_tests.html*166\n <= suspended*2*stepInto*http://127.0.0.1:8000/debug_tests.html*167\n")])])]),t("h3",{attrs:{id:"resume-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resume-notification"}},[e._v("#")]),e._v(" Resume notification")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("resumed")]),e._v("\nMessage arguments ("),t("strong",[e._v("version 1")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg0")]),e._v(" : resume reason ("),t("em",[e._v("started")]),e._v(", "),t("em",[e._v("abort")]),e._v(" or any of stepping command names)")])]),e._v(" "),t("p",[e._v("Message arguments ("),t("strong",[e._v("version 2")]),e._v("):")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : resume reason ("),t("em",[e._v("started")]),e._v(", "),t("em",[e._v("abort")]),e._v(" or any of stepping command names)")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= resumed*start\n <= resumed*stepInto\n <= resumed*resume\n <= resumed*2*start\n <= resumed*2*stepInto\n <= resumed*2*resume\n")])])]),t("h3",{attrs:{id:"client-action-notifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client-action-notifications"}},[e._v("#")]),e._v(" Client action notifications")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("client")]),e._v("\nMessage arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : action ("),t("em",[e._v("suspend")]),e._v(", "),t("em",[e._v("terminate")]),e._v(", "),t("em",[e._v("open")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1..argN")]),e._v(" : optional action arguments")])])]),e._v(" "),t("p",[t("strong",[e._v("suspend")]),e._v(" : request to suspend debugger (all threads)\n"),t("strong",[e._v("terminate")]),e._v(" : request to terminate debugger session\n"),t("strong",[e._v("open")]),e._v(" : request to open file/URI in IDE editor")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("arg1")]),e._v(" : file URI")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= threads*created*1*main\n <= threads*created*2*worker\n <= threads*destroyed*2\n")])])]),t("h3",{attrs:{id:"log-console-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#log-console-message"}},[e._v("#")]),e._v(" Log console message")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("log")]),e._v("\nMessage arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : log type ("),t("em",[e._v("out")]),e._v(", "),t("em",[e._v("warn")]),e._v(", "),t("em",[e._v("err")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : message text")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : (optional) source context ("),t("em",[e._v("src")]),e._v(", "),t("em",[e._v("trace")]),e._v(")")])])]),e._v(" "),t("p",[t("strong",[e._v("src")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg3")]),e._v(" : file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg4")]),e._v(" : line number")])])]),e._v(" "),t("p",[t("strong",[e._v("trace")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg3..argN")]),e._v(" : trace frame descriptions 3-N")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : frame/function name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(' : function arguments separated by ", "')])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(" : file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg3")]),e._v(" : line number")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= log*out*Start message\n <= log*out*src*http://127.0.0.1:8000/debug_tests.html*170\n <= log*out*trace*testVariables||http://127.0.0.1:8000/debug_tests.html|166*onclick|MouseEvent|http://127.0.0.1:8000/debug_tests.html|1\n")])])]),t("h3",{attrs:{id:"scripts-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scripts-notification"}},[e._v("#")]),e._v(" Scripts notification")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("scripts")]),e._v("\nMessage arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : action ("),t("em",[e._v("created")]),e._v(", "),t("em",[e._v("resolved")]),e._v(", "),t("em",[e._v("destroyed")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1..argN")]),e._v(" : scripts definitions 1-N")])])]),e._v(" "),t("p",[t("strong",[e._v("created")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : script id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : file URI")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg2")]),e._v(" : function name")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg3")]),e._v(" : base script line number")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg4")]),e._v(" : script line count")])])]),e._v(" "),t("p",[t("strong",[e._v("resolved")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("subarg0")]),e._v(" : script id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("subarg1")]),e._v(" : function name")])])]),e._v(" "),t("p",[t("strong",[e._v("destroyed")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("em",[e._v("subarg0")]),e._v(" : script id")])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= scripts*created*225|http://127.0.0.1:8000/debug_tests.html|testStepping|26|8\n <= scripts*created*234|http://127.0.0.1:8000/debug_tests.html|anonymous|137|1\n <= scripts*resolved*234|toString*240|myFunc0*241|myFunc1*242|myFunc2*252|onreadystatechange\n <= scripts*destroyed*234*235*236\n")])])]),t("h3",{attrs:{id:"threads-notification-version-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threads-notification-version-2"}},[e._v("#")]),e._v(" Threads notification (Version 2)")]),e._v(" "),t("p",[e._v("Message: "),t("strong",[e._v("threads")]),e._v("\nMessage arguments:")]),e._v(" "),t("ul",[t("li",[t("p",[t("em",[e._v("arg0")]),e._v(" : action ("),t("em",[e._v("created")]),e._v(", "),t("em",[e._v("destroyed")]),e._v(")")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg1")]),e._v(" : thread id")])]),e._v(" "),t("li",[t("p",[t("em",[e._v("arg2")]),e._v(" : thread name (optional)")])])]),e._v(" "),t("p",[e._v("Example:")]),e._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[e._v("<= threads*created*1*main\n <= threads*created*2*worker\n <= threads*destroyed*2\n")])])]),t("h2",{attrs:{id:"appendix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[e._v("#")]),e._v(" Appendix")]),e._v(" "),t("h3",{attrs:{id:"variable-property-flags"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variable-property-flags"}},[e._v("#")]),e._v(" Variable property flags")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("w : writable (assignment will lead to an error)")])]),e._v(" "),t("li",[t("p",[e._v("c : constant (the property is a real constant, may not be supported on all platforms)")])]),e._v(" "),t("li",[t("p",[e._v("n : enumeratable (visible to for/in loop)")])]),e._v(" "),t("li",[t("p",[e._v("p : permanent (property cannot be deleted)")])]),e._v(" "),t("li",[t("p",[e._v("a : argument to function")])]),e._v(" "),t("li",[t("p",[e._v("v : local variable in function")])]),e._v(" "),t("li",[t("p",[e._v("l : local/scope variable (top-level in scope)")])]),e._v(" "),t("li",[t("p",[e._v("e : exception (exception occurred, value is exception)")])]),e._v(" "),t("li",[t("p",[e._v("r : error (error occurred, value is error)")])]),e._v(" "),t("li",[t("p",[e._v("o : object/composite value (expandable, has properties)")])])]),e._v(" "),t("h3",{attrs:{id:"special-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-variables"}},[e._v("#")]),e._v(" Special variables")]),e._v(" "),t("p",[e._v("When the debugger suspend was caused by an exception and the exception details are available, the exception variable (with the 'e' property flag) should be returned on the top scope. If the debugger allows to change/reject the exception, the variable should also have 'w' writable property.")])])}),[],!1,null,null,null);a.default=v.exports}}]);
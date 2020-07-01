(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{1999:function(e,r,t){"use strict";t.r(r);var i=t(21),o=Object(i.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"studio-5-1-3-ga-13-august-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#studio-5-1-3-ga-13-august-2019"}},[e._v("#")]),e._v(" Studio 5.1.3.GA - 13 August 2019")]),e._v(" "),t("p",[e._v("Studio 5.1.3 is a patch release that includes improvements and bug fixes.")]),e._v(" "),t("p",[e._v("As of this release, Studio 5.1.x will not be supported six months (2020-02-13) from 5.1.3.GA's release date. See "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/"}},[e._v("Axway Appcelerator Deprecation Policy")]),e._v(" and "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes"}},[e._v("Nominal Lifetimes")]),e._v(" documents for details.")],1),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9169",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9169"),t("OutboundLink")],1),e._v(" - Fix miscellaneous debugger issues")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Fixed debugging issue with Android apps on Windows")])]),e._v(" "),t("li",[t("p",[e._v("Change default caught and uncaught exceptions/errors to break on no exceptions")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue when Hyperloop in enabled that a project cannot be debugged")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue when trying to debug on iOS sim/device for the second time without killing the previous instance of app on the device the debugger does not connect")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue when using Titanium SDK 7.5.X or 8.0.X so that Safari Web Inspector connects properly")])]),e._v(" "),t("li",[t("p",[e._v("Removed remnants of Android profiler")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issues supporting some ES6+ types in debugger view (like Map, Set, WeakMap, WeakSet).")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue where the debugger hangs in SDK 8.1.0")])]),e._v(" "),t("li",[t("p",[e._v("Fixed logging error when Filesystem API isn't used")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue where Alloy wasn't generating sourcemaps for files under "),t("code",[e._v("lib")]),e._v(" directory")])]),e._v(" "),t("li",[t("p",[e._v("Added support for inline source mapping")])]),e._v(" "),t("li",[t("p",[e._v("Improved debugging of applications in third party tools and Studio")])]),e._v(" "),t("li",[t("p",[e._v("Fixed issue where the debugger suspends on generated file for encrypted JS")])])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9178",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9178"),t("OutboundLink")],1),e._v(" - Support inline source mapping")]),e._v(" "),t("ul",[t("li",[e._v("Added support for source maps the CLI build generates ( mapping between "),t("code",[e._v("Resources")]),e._v(" <-> "),t("code",[e._v("build")]),e._v(" )")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9185",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9185"),t("OutboundLink")],1),e._v(" - Update Node.js version distributed via studio to v8.16.0")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The version of Node.js that is distributed with Studio is 8.16.0 and minimum version will be bumped to 8.0")])]),e._v(" "),t("li",[t("p",[e._v("If Studio doesn't find Node.js 8.0, it will install 8.16.0")])])])])]),e._v(" "),t("h2",{attrs:{id:"fixed-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9049",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9049"),t("OutboundLink")],1),e._v(" - Unable to view application source when debugging Android project on Windows")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9161",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9161"),t("OutboundLink")],1),e._v(" - iOS Debug: The debugger does not connect when trying to debug second time")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9166",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9166"),t("OutboundLink")],1),e._v(" - iOS Debug: The iOS debug breaks on few anonymous files before app launches")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9170",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9170"),t("OutboundLink")],1),e._v(" - Debugger: Exception in variable view due to empty labels for few variables")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9171",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9171"),t("OutboundLink")],1),e._v(" - Debugger: debugger hangs against 8.1.0 SDK on first breakpoint in ti.main.js")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9174",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9174"),t("OutboundLink")],1),e._v(" - Debugger: Breakpoints set in alloy /lib files do not get hit")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9177",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9177"),t("OutboundLink")],1),e._v(" - Android Debug: Array variable cannot be expanded in variables view")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TISTUD-9183",target:"_blank",rel:"noopener noreferrer"}},[e._v("TISTUD-9183"),t("OutboundLink")],1),e._v(" - Android Debug: The debugger suspends on wrong js file during alloy project debug on Android device")])])])])}),[],!1,null,null,null);r.default=o.exports}}]);
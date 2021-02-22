(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1244:function(e,t,a){"use strict";a.r(t);var o=a(21),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"atom-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#atom-package"}},[e._v("#")]),e._v(" Atom Package")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("With the release of "),o("a",{attrs:{href:"#undefined"}},[e._v("SDK 7.0.0")]),e._v(", Axway Appcelerator introduces the Titanium package for "),o("strong",[o("a",{attrs:{href:"https://atom.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom"),o("OutboundLink")],1)]),e._v(". The initial release includes the following features:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Toolbar with quick access to build commands and code signing assistance")])]),e._v(" "),o("li",[o("p",[e._v("Output console")])]),e._v(" "),o("li",[o("p",[e._v("Autocomplete for properties, methods, and events of Titanium objects and project references")])]),e._v(" "),o("li",[o("p",[e._v("Jump-to-definition support")])]),e._v(" "),o("li",[o("p",[e._v("Create new Alloy widgets, controllers, views, styles, models, or alloy.jmk files in existing projects")])]),e._v(" "),o("li",[o("p",[e._v("Utilize the Atom Command Palette to initiate commands")])])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("Atom 1.21 or later is required.")])]),e._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("Installing the Atom Package for Axway Appcelerator can be accomplished via the editor itself or by using the apm CLI command.")]),e._v(" "),o("h3",{attrs:{id:"via-atom-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#via-atom-editor"}},[e._v("#")]),e._v(" Via Atom Editor")]),e._v(" "),o("p",[o("img",{attrs:{src:a(727),alt:"Screen_Shot_2017-12-01_at_10.21.05_AM"}})]),e._v(" "),o("p",[e._v("Installation via the editor is just like any other Atom package.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Open "),o("strong",[e._v("Atom")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Navigate to the package/theme installer: "),o("strong",[e._v("Packages")]),e._v(" > "),o("strong",[e._v("Settings view")]),e._v(" > "),o("strong",[e._v("Install Packages/Themes")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("In the "),o("strong",[e._v("Install Packages")]),e._v(" section, type "),o("em",[e._v("appcelerator-titanium")]),e._v(" in the Packages search field. You should see the appcelerator-titanium -atom-plugin listed in the results of this package search.")])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("strong",[e._v("Install button")]),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"via-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#via-cli"}},[e._v("#")]),e._v(" Via CLI")]),e._v(" "),o("p",[e._v("If you have the apm command installed, from the command line run:")]),e._v(" "),o("p",[e._v("apm install appcelerator-titanium")]),e._v(" "),o("h3",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("Some functionality provided by the Appcelerator Titanium package, such as jump-to-definition, requires the "),o("a",{attrs:{href:"https://ide.atom.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Atom IDE"),o("OutboundLink")],1),e._v(" package to be installed. Follow the above instructions but search for the package named "),o("em",[e._v("atom-ide-ui")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),o("h3",{attrs:{id:"commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Command")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("appc:build")])]),e._v(" "),o("td",[e._v("Build using the current selected command and configuration")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:stop")])]),e._v(" "),o("td",[e._v("Stop the current build")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:console")])]),e._v(" "),o("td",[e._v("Toggle the console")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:generate")])]),e._v(" "),o("td",[e._v("Open dialog to generate a new alloy file or component")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:open view")])]),e._v(" "),o("td",[e._v("Open the related Alloy XML file")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:open style")])]),e._v(" "),o("td",[e._v("Open the related Alloy TSS file")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:open controller")])]),e._v(" "),o("td",[e._v("Open the related JavaScript file")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("appc:open close related")])]),e._v(" "),o("td",[e._v("Toggle the related Alloy XML, TSS and Javascript files")])])])]),e._v(" "),o("h3",{attrs:{id:"snippets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#snippets"}},[e._v("#")]),e._v(" Snippets")]),e._v(" "),o("p",[e._v("With "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Atom_Package/Atom_Package_Release_Notes/Atom_Package_1.1.0_Release_Note/"}},[e._v("1.1.0")]),e._v(" of the package, we introduced snippets.")],1),e._v(" "),o("p",[e._v("Code snippets for common Alloy and Titanium APIs are provided for use in Alloy controllers and modules. A description of the snippet and link to documentation are provided where appropriate. Type the prefix and the autocomplete overlay will be displayed with matching snippets.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Prefix")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("tidebug")])]),e._v(" "),o("td",[e._v("Debug log message")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tierror")])]),e._v(" "),o("td",[e._v("Error log message")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiinfo")])]),e._v(" "),o("td",[e._v("Info log message")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiwarn")])]),e._v(" "),o("td",[e._v("Warn log message")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("titrace")])]),e._v(" "),o("td",[e._v("Trace log message")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiaddevent")])]),e._v(" "),o("td",[e._v("Add event listener")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiremevent")])]),e._v(" "),o("td",[e._v("Remove event listener")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tifireevent")])]),e._v(" "),o("td",[e._v("Fire event")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tialer")])]),e._v(" "),o("td",[e._v("Show alert dialog")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiopt")])]),e._v(" "),o("td",[e._v("Show option dialog")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tianim")])]),e._v(" "),o("td",[e._v("View animation")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tifile")])]),e._v(" "),o("td",[e._v("Open file")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tisound")])]),e._v(" "),o("td",[e._v("Play sound")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tiaudio")])]),e._v(" "),o("td",[e._v("Play local or remote audio")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("tivideo")])]),e._v(" "),o("td",[e._v("Play local or remote video")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ticamera")])]),e._v(" "),o("td",[e._v("Open camera")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("alglo")])]),e._v(" "),o("td",[e._v("Alloy Globals object")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("alcfg")])]),e._v(" "),o("td",[e._v("Allog CFG object")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("alcon")])]),e._v(" "),o("td",[e._v("Alloy create controller function")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("alcol")])]),e._v(" "),o("td",[e._v("Alloy create collection function")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("almod")])]),e._v(" "),o("td",[e._v("Alloy create model function")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("alwid")])]),e._v(" "),o("td",[e._v("Alloy create widget function")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ifios")])]),e._v(" "),o("td",[e._v("iOS conditional statement")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("idand")])]),e._v(" "),o("td",[e._v("Android conditional statement")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("Irwin")])]),e._v(" "),o("td",[e._v("Windows conditional statement")])])])]),e._v(" "),o("h3",{attrs:{id:"shortcuts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shortcuts"}},[e._v("#")]),e._v(" Shortcuts")]),e._v(" "),o("p",[e._v("As of "),o("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Atom_Package/Atom_Package_Release_Notes/Atom_Package_1.1.0_Release_Note/"}},[e._v("1.1.0")]),e._v(", we introduced shortcuts:")],1),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Keymap")]),e._v(" "),o("th",[e._v("Operation")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("ctrl + alt + a")])]),e._v(" "),o("td",[e._v("Open or close related files")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ctrl + alt + c")])]),e._v(" "),o("td",[e._v("Open related Controller")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ctrl + alt + s")])]),e._v(" "),o("td",[e._v("Open related Style")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("ctrl + alt + v")])]),e._v(" "),o("td",[e._v("Open related View")])])])]),e._v(" "),o("h3",{attrs:{id:"build-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-tools"}},[e._v("#")]),e._v(" Build tools")]),e._v(" "),o("h4",{attrs:{id:"toolbar"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#toolbar"}},[e._v("#")]),e._v(" Toolbar")]),e._v(" "),o("p",[e._v("The toolbar provides a UI for commonly used commands when developing a Titanium application.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(728),alt:"33169533-f0e0a89e-d03c-11e7-99f8-7cb91858dbed"}})]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Build select and run: Select to run on simulator or device, package for ad-hoc or App Store distribution, or a custom build option.")])]),e._v(" "),o("li",[o("p",[e._v("Platform select: Select available platforms to build on.")])]),e._v(" "),o("li",[o("p",[e._v("Target select: Select simulator/emulator or local device. When attaching a device, select Refresh Targets option to add it to the target list.")])]),e._v(" "),o("li",[o("p",[e._v("Code signing and keystore configuration: When building for device (iOS) or distribution (iOS and Android) the option to configure code signing or keystore credentials are available.")])]),e._v(" "),o("li",[o("p",[e._v("Info panel: Provides information about the active project.")])]),e._v(" "),o("li",[o("p",[e._v("Generate component: Presents a dialog to generate a Titanium component: Controller, View, Style, Model, Widget or Alloy.jmk file.")])]),e._v(" "),o("li",[o("p",[e._v("Console: Toggle display of the console which outputs debug information during build and run.")])])]),e._v(" "),o("h4",{attrs:{id:"build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" Build")]),e._v(" "),o("p",[o("img",{attrs:{src:a(729),alt:"33169524-ed2b85ca-d03c-11e7-881e-4eb9e301649d"}})]),e._v(" "),o("p",[e._v("The build select button executes and provides selections of the build command. Depending on the target platform selected, the drop-down will display options for the "),o("code",[e._v("appc run")]),e._v(" command:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Run: build and run the app on selected simulator/emulator or device")])]),e._v(" "),o("li",[o("p",[e._v("Ad-hoc: (iOS only) build and package the app for ad-hoc distribution using selected code signing")])]),e._v(" "),o("li",[o("p",[e._v("Publish: build and package the app for distribution through the App Store or Google Play using selected code signing or keystore credentials")])]),e._v(" "),o("li",[o("p",[e._v("Custom: execute "),o("code",[e._v("appc run -d <project_dir>")]),e._v(" with custom arguments")])])]),e._v(" "),o("h5",{attrs:{id:"ios-code-signing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ios-code-signing"}},[e._v("#")]),e._v(" iOS code signing")]),e._v(" "),o("p",[e._v("When building for a device and ad-hoc or App Store distribution, a certificate and provisioning profile must be selected. Click the "),o("a",{attrs:{href:"#toolbar"}},[e._v("code signing/keystore button")]),e._v(" to display the code signing options.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(730),alt:"33169525-ed3f58a2-d03c-11e7-9b58-48b361328d69"}})]),e._v(" "),o("p",[e._v("Certificates are populated according to the selected build option (developer/distribution). Available provisioning profiles are displayed but only those which match the selected certificate and app ID are enabled.")]),e._v(" "),o("h5",{attrs:{id:"android-keystore"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#android-keystore"}},[e._v("#")]),e._v(" Android keystore")]),e._v(" "),o("p",[e._v("When building for distribution through Google Play, the app must be signed with a keystore. Click the "),o("a",{attrs:{href:"#toolbar"}},[e._v("code signing/keystore button")]),e._v(" to display the keystore options.")]),e._v(" "),o("p",[e._v("The path to the keystore can be entered manually or by using the file picker. Keystore path and alias are stored in package configuration.")]),e._v(" "),o("h4",{attrs:{id:"console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[e._v("#")]),e._v(" Console")]),e._v(" "),o("p",[o("img",{attrs:{src:a(731),alt:"33169526-ed531cf2-d03c-11e7-8d08-5657f691aca2"}})]),e._v(" "),o("p",[e._v("The console displays debug logging during the build and run. The log level is passed to the "),o("code",[e._v("appc run")]),e._v(" command so selecting the log level does not alter output from the current executing command. There are options to automatically scroll the console to the latest message and to open it when a build is initiated.")]),e._v(" "),o("p",[e._v("By default the executing command is displayed in the console to aid debugging. This can be disabled in the package settings.")]),e._v(" "),o("h3",{attrs:{id:"autocompletion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#autocompletion"}},[e._v("#")]),e._v(" Autocompletion")]),e._v(" "),o("p",[e._v("Autocomplete support is provided to help speed up development by providing quick references to Titanium APIs and Alloy markup as well as references to modules, widgets, and assets within your project.")]),e._v(" "),o("h4",{attrs:{id:"generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generation"}},[e._v("#")]),e._v(" Generation")]),e._v(" "),o("p",[e._v("On initial launch, autocomplete suggestions are generated for the current selected Titanium SDK. You can check and set this using the CLI:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("$ appc ti sdk\n\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nInstalled SDKs:\n   "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".0.GA "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("selected"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("  "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("7.0")]),e._v(".0.GA\n\n$ appc ti sdk "),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v("\n")])])]),o("p",[e._v("Autocomplete suggestions can be regenerated by selecting the "),o("em",[e._v("Regenerate autocomplete suggestions")]),e._v(" option from the package settings and relaunching Atom.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(732),alt:"33169527-ed667b9e-d03c-11e7-8a48-9c34f4c8b5e2"}})]),e._v(" "),o("h4",{attrs:{id:"titanium-and-alloy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#titanium-and-alloy"}},[e._v("#")]),e._v(" Titanium and Alloy")]),e._v(" "),o("p",[e._v("Titanium APIs and Alloy markup suggestions are provided in Titanium JavaScript and Alloy XML and TSS files. This includes classes, properties, methods, and events. Addition information is provided with a link to the associated documentation. Deprecated properties are also indicated.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(733),alt:"33011938-54d3d302-cdd7-11e7-910c-531f51454f74"}})]),e._v(" "),o("h4",{attrs:{id:"project-references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#project-references"}},[e._v("#")]),e._v(" Project references")]),e._v(" "),o("p",[e._v("Suggestions for other controllers, modules, and widgets are presented when referencing through a Titanium function or Alloy markup.")]),e._v(" "),o("h4",{attrs:{id:"class-and-id-references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#class-and-id-references"}},[e._v("#")]),e._v(" Class and ID references")]),e._v(" "),o("p",[e._v("Suggestions for classes and IDs declared or defined in related Alloy XML and TSS files are presented.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(734),alt:"33011939-54ebd5c4-cdd7-11e7-8cdd-b39a8c8b92d3"}})]),e._v(" "),o("h4",{attrs:{id:"images"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#images"}},[e._v("#")]),e._v(" Images")]),e._v(" "),o("p",[e._v("Image suggestions are presented where appropriate including a thumbnail preview and information about the scaled versions available.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(735),alt:"33011941-551aca50-cdd7-11e7-86ec-cae8ea0430ff"}})]),e._v(" "),o("h3",{attrs:{id:"alloy-file-and-component-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-file-and-component-generation"}},[e._v("#")]),e._v(" Alloy file and component generation")]),e._v(" "),o("p",[o("img",{attrs:{src:a(736),alt:"33011944-555909fa-cdd7-11e7-8bc8-0301059b360d"}})]),e._v(" "),o("p",[e._v("A UI for the "),o("code",[e._v("alloy generate")]),e._v(" command is provided. The "),o("strong",[e._v("Generate File")]),e._v(" dialog is presented by clicking the "),o("strong",[e._v("+")]),e._v(" icon in the toolbar or using the command from the menu or palette. Select the type of file or component to generate and provide the required information. The generated file(s) are then opened.")]),e._v(" "),o("h3",{attrs:{id:"open-related-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#open-related-files"}},[e._v("#")]),e._v(" Open related files")]),e._v(" "),o("p",[e._v("Opening Alloy-related files is supported (see "),o("a",{attrs:{href:"#commands"}},[e._v("Commands")]),e._v(").")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("From View, open related Style and/or Controller")])]),e._v(" "),o("li",[o("p",[e._v("From Style, open related View and/or Controller")])]),e._v(" "),o("li",[o("p",[e._v("From Controller, open related View and/or Style")])])]),e._v(" "),o("h3",{attrs:{id:"jump-to-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jump-to-definition"}},[e._v("#")]),e._v(" Jump-to-definition")]),e._v(" "),o("p",[e._v("Jump-to-definition support is provided for quickly accessing the definition or usage of Alloy markup and to easily generate new definitions. Images can be opened directly from their path.")]),e._v(" "),o("h4",{attrs:{id:"alloy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy"}},[e._v("#")]),e._v(" Alloy")]),e._v(" "),o("p",[e._v("From Views, click through to style definitions for tags, classes, and IDs in related or global TSS. Click through to event definitions in the related controller.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(737),alt:"33011943-554470ee-cdd7-11e7-9e04-1e49272c3f6d"}})]),e._v(" "),o("p",[e._v("A prompt is displayed to generate undefined styles or functions.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(738),alt:"33011942-553025bc-cdd7-11e7-8389-572b2bf811e0"}})]),e._v(" "),o("h4",{attrs:{id:"strings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[e._v("#")]),e._v(" Strings")]),e._v(" "),o("p",[e._v("Click on localized string references to jump to their definition. The option to generate undefined strings is provided.")]),e._v(" "),o("h4",{attrs:{id:"images-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#images-2"}},[e._v("#")]),e._v(" Images")]),e._v(" "),o("p",[e._v("Click on an image path to open the image in a new tab. For iOS, where multiple scaled images exist with the same name the first is opened (e.g. @2x).")])])}),[],!1,null,null,null);t.default=i.exports},727:function(e,t,a){e.exports=a.p+"assets/img/Screen_Shot_2017-12-01_at_10.21.05_AM.1d788c61.png"},728:function(e,t,a){e.exports=a.p+"assets/img/33169533-f0e0a89e-d03c-11e7-99f8-7cb91858dbed.fc61f037.png"},729:function(e,t,a){e.exports=a.p+"assets/img/33169524-ed2b85ca-d03c-11e7-881e-4eb9e301649d.513cf131.png"},730:function(e,t,a){e.exports=a.p+"assets/img/33169525-ed3f58a2-d03c-11e7-9b58-48b361328d69.30d8d264.png"},731:function(e,t,a){e.exports=a.p+"assets/img/33169526-ed531cf2-d03c-11e7-8d08-5657f691aca2.e2d1e649.png"},732:function(e,t,a){e.exports=a.p+"assets/img/33169527-ed667b9e-d03c-11e7-8a48-9c34f4c8b5e2.bd25b272.png"},733:function(e,t,a){e.exports=a.p+"assets/img/33011938-54d3d302-cdd7-11e7-910c-531f51454f74.180c8463.png"},734:function(e,t,a){e.exports=a.p+"assets/img/33011939-54ebd5c4-cdd7-11e7-8cdd-b39a8c8b92d3.7402af7a.png"},735:function(e,t,a){e.exports=a.p+"assets/img/33011941-551aca50-cdd7-11e7-86ec-cae8ea0430ff.82fdd595.png"},736:function(e,t,a){e.exports=a.p+"assets/img/33011944-555909fa-cdd7-11e7-8bc8-0301059b360d.b54e8c0b.png"},737:function(e,t,a){e.exports=a.p+"assets/img/33011943-554470ee-cdd7-11e7-9e04-1e49272c3f6d.91b0173c.png"},738:function(e,t,a){e.exports=a.p+"assets/img/33011942-553025bc-cdd7-11e7-8389-572b2bf811e0.a1dbaeba.png"}}]);
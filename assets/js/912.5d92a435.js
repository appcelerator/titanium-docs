(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{2664:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"alloy-getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-getting-started"}},[t._v("#")]),t._v(" Alloy Getting Started")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This guide provides basic instructions on creating a quick Alloy project. Alloy is an MVC framework to help you quickly build Titanium applications.")]),t._v(" "),a("h2",{attrs:{id:"command-line-interface-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-installation"}},[t._v("#")]),t._v(" Command-line interface installation")]),t._v(" "),a("p",[t._v("To create and manage Alloy applications, you need the Alloy command-line interface. If you already installed Appcelerator Studio or the Appcelerator CLI, the Alloy CLI will be automatically installed for you. If you need to install Appcelerator Studio, see the "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/"}},[t._v("Titanium SDK Getting Started")]),t._v(" or if you need to manually install the Appcelerator CLI:")],1),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download and install Node.js from "),a("a",{attrs:{href:"http://nodejs.org/#download",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nodejs.org/#download"),a("OutboundLink")],1),t._v(", which includes the npm package manager needed to install the Appcelerator CLI.")])]),t._v(" "),a("li",[a("p",[t._v("From a terminal, run the following command to install the CLI:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" appcelerator -g\n")])])])]),t._v(" "),a("li",[a("p",[t._v("After installation, run the setup command to install required components:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc setup\n")])])]),a("p",[t._v("After the CLI downloads and installs the required components, you will be prompted to login and authorize your computer. The CLI will ask to send an authorization token to your e-mail account or as a text to your mobile phone. Enter the authorization token once you receive it to complete the registration process.")])])]),t._v(" "),a("h2",{attrs:{id:"create-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-project"}},[t._v("#")]),t._v(" Create a project")]),t._v(" "),a("h3",{attrs:{id:"using-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-studio"}},[t._v("#")]),t._v(" Using Studio")]),t._v(" "),a("p",[t._v("To create a new Alloy project, start Appcelerator Studio, then")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("From the menu, select "),a("strong",[t._v("File > New > Mobile App Project")]),t._v(". The "),a("strong",[t._v("New Mobile App Project")]),t._v(" wizard appears.")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("Alloy")]),t._v(" in the "),a("strong",[t._v("Available Templates")]),t._v(" box, choose a template, then click the "),a("strong",[t._v("Next")]),t._v(" button.")])]),t._v(" "),a("li",[a("p",[t._v("Complete all of the fields, then click the "),a("strong",[t._v("Finish")]),t._v(" button.")])])]),t._v(" "),a("p",[t._v("A new skeleton Alloy project will be generated. If you are familiar with classic Titanium development, the "),a("code",[t._v("Resources")]),t._v(" folder is hidden from the App and Project Explorer. All work for an Alloy project is done in the "),a("code",[t._v("app")]),t._v(" directory.")]),t._v(" "),a("h3",{attrs:{id:"using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[t._v("#")]),t._v(" Using the CLI")]),t._v(" "),a("p",[t._v("To create a new Alloy project, use the Appcelerator CLI to create a new Alloy project. Run the following command in a terminal:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc new -t titanium\n")])])]),a("p",[t._v("You will be prompted to enter an application name and application ID.")]),t._v(" "),a("p",[t._v("A new skeleton Alloy project will be generated in the directory named after the application name.")]),t._v(" "),a("h2",{attrs:{id:"simple-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[t._v("#")]),t._v(" Simple example")]),t._v(" "),a("p",[t._v("The following example converts the "),a("code",[t._v("image_view_file.js")]),t._v(" file from the Titanium KitchenSink sample application to an Alloy project.")]),t._v(" "),a("p",[t._v("To see the example in the KitchenSink application, click on the "),a("code",[t._v("Base UI")]),t._v(" tab, then navigate to "),a("strong",[t._v("Views > Images Views > Image File")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[t._v("#")]),t._v(" View")]),t._v(" "),a("p",[t._v("The view file declares the structure of the GUI. For example, the file below defines a window with an image and label.")]),t._v(" "),a("p",[t._v("Replace the contents of "),a("code",[t._v("app/views/index.xml")]),t._v(" with the following:")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ImageView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("imageView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("clickImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Click Image of Apple Logo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[t._v("#")]),t._v(" Style")]),t._v(" "),a("p",[t._v("The style file formats and styles the components in the view file. For example, the style below defines the background color of the window; position, dimensions and color of the label; and position, dimensions and location of the image.")]),t._v(" "),a("p",[t._v("Replace the contents of "),a("code",[t._v("app/styles/index.tss")]),t._v(" with the following:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"Window": {\n  backgroundColor:"white"\n},\n"#l":{\n  bottom:20,\n  width: Ti.UI.SIZE,\n  height: Ti.UI.SIZE,\n  color:\'#999\'\n},\n"#imageView":{\n  image:"/images/apple_logo.jpg",\n  width:24,\n  height:24,\n  top:100\n}\n')])])]),a("h3",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[t._v("#")]),t._v(" Controller")]),t._v(" "),a("p",[t._v("The controller file contains the presentation logic, which responds to input from the user. For example, the controller code below creates an alert dialog when the user clicks on the image and opens the window when the application starts.")]),t._v(" "),a("p",[t._v("Replace the contents of "),a("code",[t._v("app/controllers/index.js")]),t._v(" with the following:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Titanium"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAlertDialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Image View'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You clicked me!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"asset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset"}},[t._v("#")]),t._v(" Asset")]),t._v(" "),a("p",[t._v("Create a folder called "),a("code",[t._v("app/assets/images")]),t._v(" and copy the "),a("a",{attrs:{href:"https://raw.github.com/appcelerator-developer-relations/KitchenSink/master/Resources/images/apple_logo.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("apple_logo.jpg")]),t._v(" file"),a("OutboundLink")],1),t._v(" from the "),a("a",{attrs:{href:"https://github.com/appcelerator-developer-relations/KitchenSink",target:"_blank",rel:"noopener noreferrer"}},[t._v("KitchenSink project"),a("OutboundLink")],1),t._v(". This file will be copied to "),a("code",[t._v("Resources/images/apple_logo.jpg")]),t._v(" by Alloy during the build process.")]),t._v(" "),a("h3",{attrs:{id:"compile-and-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-run"}},[t._v("#")]),t._v(" Compile and run")]),t._v(" "),a("p",[t._v("The Alloy CLI converts the view, style and controller in to a Titanium project, which can be built and ran by Studio or the Appcelerator CLI.")]),t._v(" "),a("h4",{attrs:{id:"using-studio-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-studio-2"}},[t._v("#")]),t._v(" Using Studio")]),t._v(" "),a("p",[t._v("In the "),a("strong",[t._v("Project Explorer")]),t._v(" view, select your project, then from the global tool bar, select "),a("strong",[t._v("Run")]),t._v(" from the "),a("strong",[t._v("Launch Mode")]),t._v(" drop-down and select the device to launch the application on in the "),a("strong",[t._v("Target")]),t._v(" drop-down. Alloy will generate the Titanium files from the Alloy project files, which will then be compiled by Studio and launched on the device simulator.")]),t._v(" "),a("h4",{attrs:{id:"using-the-cli-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli-2"}},[t._v("#")]),t._v(" Using the CLI")]),t._v(" "),a("p",[t._v("From a console window, go to the root directory of the project, then")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("The Appcelerator CLI contains hooks to the Alloy CLI, so you do not need to run any Alloy commands.")]),t._v(" "),a("p",[t._v("Refer to the "),a("RouterLink",{attrs:{to:"/guide/Appcelerator_CLI/Appcelerator_CLI_How-tos/Appcelerator_Command-Line_Interface_Reference/"}},[t._v("Appcelerator Command-Line Interface Reference")]),t._v(" for more information about using the "),a("code",[t._v("appc run")]),t._v(" command.")],1),t._v(" "),a("h2",{attrs:{id:"more-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[t._v("#")]),t._v(" More examples")]),t._v(" "),a("p",[t._v("For more examples of Alloy, see "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_How-tos/Alloy_Samples/"}},[t._v("Alloy Samples")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),a("p",[t._v("Review "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/"}},[t._v("Alloy Concepts")]),t._v(" to learn more about Alloy and how to structure your project. From there, visit the links on "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/"}},[t._v("Alloy Views")]),t._v(", "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/"}},[t._v("Alloy Controllers")]),t._v(", and "),a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/"}},[t._v("Alloy Models")]),t._v(" to learn how to write views, controllers and models, respectively.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);
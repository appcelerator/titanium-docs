(window.webpackJsonp=window.webpackJsonp||[]).push([[1278],{1894:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installing-required-python-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-required-python-packages"}},[t._v("#")]),t._v(" Installing Required Python Packages")]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("Python's setuptools is a third-party library that enhances the default Python distribution utilities ("),s("code",[t._v("distutil")]),t._v("). One of its components is the "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/EasyInstall",target:"_blank",rel:"noopener noreferrer"}},[t._v("EasyInstall"),s("OutboundLink")],1),t._v(" ("),s("code",[t._v("easy_install")]),t._v(") package manager, which is used to install a number of prerequisite libraries for compiling Titanium's SDK and API Docs.")]),t._v(" "),s("h2",{attrs:{id:"compatibility-and-download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-and-download"}},[t._v("#")]),t._v(" Compatibility and download")]),t._v(" "),s("p",[t._v("Python's "),s("code",[t._v("setuptools")]),t._v(" can be installed from the following locations:")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/guide/download/attachments/29004836/download_05.png",alt:"download_05"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Operating System")]),t._v(" "),s("th",[t._v("Package Version")]),t._v(" "),s("th",[t._v("Package Architecture Version")]),t._v(" "),s("th",[t._v("Download Location")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("OS X")]),t._v(" "),s("td",[t._v("Latest version compatible with installed Python version")]),t._v(" "),s("td",[t._v("32-bit and 64-bit")]),t._v(" "),s("td",[t._v("Installed on OS by default")])]),t._v(" "),s("tr",[s("td",[t._v("Windows")]),t._v(" "),s("td",[t._v("Latest version compatible with installed Python version")]),t._v(" "),s("td",[t._v("32-bit "),s("strong",[t._v("only")])]),t._v(" "),s("td",[s("a",{attrs:{href:"http://pypi.python.org/pypi/setuptools#downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official setuptools Website"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",[t._v("Ubuntu")]),t._v(" "),s("td",[t._v("Latest version compatible with installed Python version")]),t._v(" "),s("td",[t._v("32-bit and 64-bit")]),t._v(" "),s("td",[t._v("Default Repositories")])])])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("Before attempting to install "),s("em",[t._v("setuptools")]),t._v(", ensure that you have followed the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Titanium_Advanced_Tools/Installing_Python/"}},[t._v("Installing Python")]),t._v(" guide.")],1),t._v(" "),s("h3",{attrs:{id:"os-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os-x"}},[t._v("#")]),t._v(" OS X")]),t._v(" "),s("p",[t._v("Note that the typical file system location of this software can be found in the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#macos-software-locations"}},[t._v("mac OS Software Locations")]),t._v(" section of these guides.")],1),t._v(" "),s("p",[t._v("OS X ships with "),s("em",[t._v("setuptools")]),t._v(" installed by default. Hence, simply follow the steps in the "),s("a",{attrs:{href:"#using-easyinstall-to-install-packages"}},[t._v("Using EasyInstall to install packages")]),t._v(" section")]),t._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),s("p",[t._v("Note that the typical file system location of this software can be found in the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/#windows-software-locations"}},[t._v("Windows Software Locations")]),t._v(" section of these guides.")],1),t._v(" "),s("p",[t._v("To install "),s("em",[t._v("setuptools")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Follow the official "),s("a",{attrs:{href:"http://pypi.python.org/pypi/setuptools",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation Instructions"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Verify that "),s("code",[t._v("path/to/easy_install")]),t._v(" is in the system "),s("code",[t._v("PATH")]),t._v(", by following the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Software_Locations_and_Environment_Variables/"}},[t._v("Software Locations and Environment Variables")]),t._v(" guide.")],1)]),t._v(" "),s("li",[s("p",[t._v("Follow the steps in the "),s("a",{attrs:{href:"#UsingEasyInstalltoInstallPackages"}},[t._v("Using EasyInstall to Install Packages")]),t._v(" section.")])])]),t._v(" "),s("h2",{attrs:{id:"using-easyinstall-to-install-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-easyinstall-to-install-packages"}},[t._v("#")]),t._v(" Using EasyInstall to install packages")]),t._v(" "),s("p",[t._v("The following Python libraries are necessary for compiling Titanium's SDK and API Docs. Install them using the supplied commands. On Mac OS X, prefix the commands with "),s("code",[t._v("sudo")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"pycrypto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pycrypto"}},[t._v("#")]),t._v(" PyCrypto")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("easy_install pycrypto\n")])])]),s("h3",{attrs:{id:"pyopenssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyopenssl"}},[t._v("#")]),t._v(" pyOpenSSL")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("easy_install pyopenssl\n")])])]),s("h3",{attrs:{id:"pyyaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pyyaml"}},[t._v("#")]),t._v(" PyYAML")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("easy_install pyyaml\n")])])]),s("h3",{attrs:{id:"pygments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pygments"}},[t._v("#")]),t._v(" Pygments")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("easy_install Pygments\n")])])]),s("h3",{attrs:{id:"markdown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[t._v("#")]),t._v(" Markdown")]),t._v(" "),s("p",[t._v("Markdown is required for building module documentation when packaging a Titanium module.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("easy_install markdown\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
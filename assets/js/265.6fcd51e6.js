(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{1196:function(e,t,r){"use strict";r.r(t);var a=r(21),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"modules-ldap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-ldap"}},[e._v("#")]),e._v(" Modules.LDAP")]),e._v(" "),r("TypeHeader"),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("h2",{attrs:{id:"desription"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#desription"}},[e._v("#")]),e._v(" Desription")]),e._v(" "),r("p",[e._v("Provides access to LDAP directory servers by utilizing the [OpenLDAP library][openldap] (iOS) and [UnboundID LDAP SDK for Java][unboundid] (Android).")]),e._v(" "),r("h2",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("This module requires Release 2.1.3 or newer of the Titanium SDK.")]),e._v(" "),r("p",[e._v("This module does not include support for the ARMv6 architecture on iOS. Refer to the "),r("a",{attrs:{href:"http://docs.appcelerator.com/titanium/release-notes/?version=2.1.3.RC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Titanium Mobile 2.1.3.RC Release Notes"),r("OutboundLink")],1),e._v("\nfor further details about ARMv6 support.")]),e._v(" "),r("h2",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[e._v("View the "),r("a",{attrs:{href:"http://docs.appcelerator.com/platform/latest/#!/guide/Using_Titanium_Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Titanium Modules"),r("OutboundLink")],1),e._v(" document for instructions on getting\nstarted with using this module in your application.")]),e._v(" "),r("h2",{attrs:{id:"accessing-the-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-module"}},[e._v("#")]),e._v(" Accessing the Module")]),e._v(" "),r("p",[e._v("Use "),r("code",[e._v("require")]),e._v(" to access this module from JavaScript:")]),e._v(" "),r("p",[e._v('var ldap = require("ti.ldap");')]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("ldap")]),e._v(" variable is a reference to the module object.")]),e._v(" "),r("h2",{attrs:{id:"ldap-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap-resources"}},[e._v("#")]),e._v(" LDAP Resources")]),e._v(" "),r("p",[e._v("Visit the [OpenLDAP][openldap] or [UnboundID LDAP SDK for Java][unboundid] websites for details on the LDAP implementations used in this module.")]),e._v(" "),r("h2",{attrs:{id:"ldap-version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap-version"}},[e._v("#")]),e._v(" LDAP Version")]),e._v(" "),r("p",[e._v("This module supports version 3 of the Lightweight Directory Access Protocol (LDAPv3).")]),e._v(" "),r("h2",{attrs:{id:"interaction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interaction"}},[e._v("#")]),e._v(" Interaction")]),e._v(" "),r("p",[e._v("The basic interaction for accessing an LDAP directory server is as follows:")]),e._v(" "),r("ol",[r("li",[e._v("Create a connection object ("),r("code",[e._v("createConnection")]),e._v(")")]),e._v(" "),r("li",[e._v("Connect to the server ("),r("code",[e._v("connect")]),e._v(")")]),e._v(" "),r("li",[e._v("Bind to the server ("),r("code",[e._v("simpleBind")]),e._v(" or "),r("code",[e._v("saslBind")]),e._v(")")]),e._v(" "),r("li",[e._v("Search the directory ("),r("code",[e._v("search")]),e._v(")")]),e._v(" "),r("li",[e._v("Iterate on the search results ("),r("code",[e._v("firstEntry")]),e._v(", "),r("code",[e._v("nextEntry")]),e._v(", "),r("code",[e._v("firstAttribute")]),e._v(", "),r("code",[e._v("nextAttribute")]),e._v(")")]),e._v(" "),r("li",[e._v("Disconnect from the server ("),r("code",[e._v("disconnect")]),e._v(")")])]),e._v(" "),r("h2",{attrs:{id:"ldaps-and-cert-files"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldaps-and-cert-files"}},[e._v("#")]),e._v(" LDAPS and Cert Files")]),e._v(" "),r("p",[e._v("When using ldaps:// set "),r("code",[e._v("useTLS")]),e._v(" to true when calling "),r("code",[e._v("createConnection")]),e._v(". If you use TLS and do not pass a "),r("code",[e._v("certFile")]),e._v(" to the "),r("code",[e._v("createConnection")]),e._v(" method, the server's certificate will be accepted automatically. TLS must be enabled for the "),r("code",[e._v("certFile")]),e._v(" to be used to validate the server's cert.")]),e._v(" "),r("h3",{attrs:{id:"android"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[e._v("#")]),e._v(" Android")]),e._v(" "),r("p",[e._v("The cert needs to be a BKS keystore ([Instructions for creating BKS keystore][bks.instructions]). A BKS keystore can be created by using [importcert.sh][importcert.sh]. Ensure that you use [bouncycastle jar v146 or older][bouncycastle.jar] or you may get the following exception when using the keystore.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('"java.io.IOException: Wrong version of key store."\n')])])]),r("p",[e._v("Before using the keystore in the app, make sure that it is in the "),r("code",[e._v("applicationData")]),e._v(" directory, it will not work if the keystore is in the "),r("code",[e._v("resourcesDirectory")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"ios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ios"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),r("p",[e._v("The cert should be a pem file.")]),e._v(" "),r("p",[e._v("If you receive the following error:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("[ERROR] Error initializing TLS: Can't contact LDAP server (error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed (self signed certificate in certificate chain))\n")])])]),r("p",[e._v("You may need to pass your "),r("code",[e._v("caCertFile")]),e._v(" to "),r("code",[e._v("createConnection")]),e._v(".")]),e._v(" "),r("ApiDocs")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
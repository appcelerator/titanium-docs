(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1692:function(e,t,a){"use strict";a.r(t);var o=a(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"errors-logging-in-to-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors-logging-in-to-studio"}},[e._v("#")]),e._v(" Errors Logging In to Studio")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("If you are unable to log in to Studio, please try the following diagnostic steps and then submit this as part of your question on the Q & A forum.")]),e._v(" "),a("h2",{attrs:{id:"trouble-logging-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trouble-logging-in"}},[e._v("#")]),e._v(" Trouble logging in")]),e._v(" "),a("h3",{attrs:{id:"launch-studio-from-the-command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launch-studio-from-the-command-line"}},[e._v("#")]),e._v(" Launch Studio from the command line")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Try the to login using the "),a("code",[e._v("appc login")]),e._v(" command or using the command below on the command line:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl -F "username=XXXX" -F "password=YYYY" https://dashboard.appcelerator.com/api/v1/auth/login\n')])])]),a("p",[e._v("(replacing XXXX and YYYY with your username and password. The username needs to be url-escaped, like user@company.com => user%40company.com)")])]),e._v(" "),a("li",[a("p",[e._v("If the above command returns success, try to run Studio from the command line and then log in. Check the generated exception log on the command line.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("From Mac: open a terminal and run "),a("code",[e._v("<install_dir>/AppceleratorStudio.app/Contents/MacOS/AppceleratorStudio")]),e._v(" (by default, the installation directory is "),a("code",[e._v("/Applications/Titanium Studio")]),e._v(")")])]),e._v(" "),a("li",[a("p",[e._v("From Windows: open a command prompt and run "),a("code",[e._v("<install_dir>\\AppceleratorStudio.exe -consoleLog")]),e._v(" (by default, the installation directory is "),a("code",[e._v("C:\\Users\\<username>\\AppData\\Local\\Titanium Studio")]),e._v(")")])])])])]),e._v(" "),a("h3",{attrs:{id:"check-the-log-file-for-thrown-exceptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-the-log-file-for-thrown-exceptions"}},[e._v("#")]),e._v(" Check the log file for thrown exceptions")]),e._v(" "),a("p",[e._v("Check the "),a("strong",[e._v("Studio log")]),e._v(" file to see if an exception was thrown when attempting to login. See "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Studio_Troubleshooting/Accessing_the_Log_File/"}},[e._v("Accessing the Log File")]),e._v(" for details on how to access the log file.")],1),e._v(" "),a("p",[e._v("If the exception generated is "),a("strong",[e._v("javax.net.ssl.SSLHandshakeException")]),e._v(", "),a("strong",[e._v("javax.net.ssl.SSLPeerUnverifiedException")]),e._v(" or "),a("strong",[e._v('"PKIX path building failed"')]),e._v(", it means that the required certificate could not be added to Java's certificate store. You need to manually download and import the necessary certificates.")]),e._v(" "),a("h4",{attrs:{id:"os-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-x"}},[e._v("#")]),e._v(" OS X")]),e._v(" "),a("p",[e._v("For "),a("strong",[e._v("Appcelerator Studio")]),e._v(", on an OS X system, run:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("openssl s_client -showcerts -connect dashboard.appcelerator.com:443 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[e._v("2")]),e._v(">")]),e._v("/dev/null"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("openssl x509 -outform PEM "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("dashboard.pem\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" keytool -import -keystore /System/Library/Java/Support/CoreDeploy.bundle/Contents/Home/lib/security/cacerts -alias dashboard -file dashboard.pem\n")])])]),a("p",[e._v("The first command downloads the server certificate, and the second command imports it to system Java's cacerts store.")]),e._v(" "),a("h4",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("Use the following steps:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Download InstallCert.jar to a local directory.")])]),e._v(" "),a("li",[a("p",[e._v("Open "),a("code",[e._v("cmd.exe")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Change directory into the directory and run "),a("code",[e._v("java -classpath InstallCert.jar InstallCert dashboard.appcelerator.com")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("It should output the same exception stacktrace as above and detect what certificate needs to be added; enter "),a("code",[e._v("1")]),e._v(".")])])]),e._v(" "),a("p",[e._v("Let it run until it finishes, and afterward, Java should be able to complete a handshake with the host, and you could verify by running the program again.")]),e._v(" "),a("h3",{attrs:{id:"login-failure-due-to-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-failure-due-to-environment-variables"}},[e._v("#")]),e._v(" Login failure due to environment variables")]),e._v(" "),a("p",[e._v("If you cannot log into Studio even though you entered valid username and password information and the same credentials when used on appcelerator.com does work, it might be due one of the following possible causes:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v('The NODE_ENV environment variable is set to "development". The appc-platform-sdk module essentially assumes you are an internal developer for Appcelerator and forces you to a pre-production or development environment if you have it configured.')])]),e._v(" "),a("li",[a("p",[e._v("You don't have development info configured. Studio will send you to a pre-prod environment.")])]),e._v(" "),a("li",[a("p",[e._v("Pre-prod only environments has certain accounts whitelisted for login and returns 4xx invalid login for everyone else.")])])]),e._v(" "),a("p",[e._v("If one of these issues matches your problem, try these suggestions to fix it:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Use another (namespaced) environment variable")]),e._v(". This is only useful for your engineers internally. Use a namespace like APPC_NODE_ENV. The NODE_ENV environment variable can be used by other developers and other projects for many uses (for better or worse).")])]),e._v(" "),a("li",[a("p",[e._v("If you're in development mode, print out the top of appc commands that hit the API. If you're going to silently change how your entire module behaves for the end user, based on this common environment variable, you should at least read that you're in a development/pre-production mode and print this out to the user.")])])]),e._v(" "),a("h2",{attrs:{id:"repeated-prompting-or-failing-to-prompt-for-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeated-prompting-or-failing-to-prompt-for-credentials"}},[e._v("#")]),e._v(" Repeated prompting (or Failing to prompt) for credentials")]),e._v(" "),a("p",[e._v("If Studio fails to save the user credentials, it prompts you to enter userId and password every time it is restarted. This could be resultant of either change in master password of OS secure keyring, or corrupted secured storage. To resolve this issue, please try the following diagnostic steps and verify whether they address the problem. The Studio log will have series of exceptions on similar lines:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("!MESSAGE (Build 3.1.1.1364101697) [ERROR]  Failed to save the signed-in user\n!STACK 0\norg.eclipse.equinox.security.storage.StorageException: No password provided.\n    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getModulePassword(SecurePreferencesRoot.java:304)\n    at org.eclipse.equinox.internal.security.storage.SecurePreferencesRoot.getPassword(SecurePreferencesRoot.java:224)\n    at org.eclipse.equinox.internal.security.storage.SecurePreferences.put(SecurePreferences.java:224)\n    at org.eclipse.equinox.internal.security.storage.SecurePreferencesWrapper.put(SecurePreferencesWrapper.java:110)\n    at com.appcelerator.titanium.core.TitaniumUserManager.saveSignedInUser(TitaniumUserManager.java:474)\n    at com.appcelerator.titanium.rcp.IDEWorkbenchWindowAdvisor.postWindowOpen(IDEWorkbenchWindowAdvisor.java:376)\n    at org.eclipse.ui.internal.WorkbenchWindow.fireWindowOpened(WorkbenchWindow.java:1365)\n    at org.eclipse.ui.internal.WorkbenchWindow.open(WorkbenchWindow.java:826)\n    at org.eclipse.ui.internal.Workbench$70.runWithException(Workbench.java:3724)\n    at org.eclipse.ui.internal.StartupThreading$StartupRunnable.run(StartupThreading.java:31)\n    at org.eclipse.swt.widgets.RunnableLock.run(RunnableLock.java:35)\n    at org.eclipse.swt.widgets.Synchronizer.runAsyncMessages(Synchronizer.java:135)\n    at org.eclipse.swt.widgets.Display.runAsyncMessages(Display.java:3563)\n    at org.eclipse.swt.widgets.Display.readAndDispatch(Display.java:3212)\n")])])]),a("p",[e._v("Deleting the secure storage from Studio")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Go to Preferences > General > Security > Secure Storage.")])]),e._v(" "),a("li",[a("p",[e._v("In the Contents tab, select the '[Default Secure Storage]' item in the list and delete it.")])]),e._v(" "),a("li",[a("p",[e._v("Restart Studio.")])]),e._v(" "),a("li",[a("p",[e._v("Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.")])])]),e._v(" "),a("h3",{attrs:{id:"delete-keychain-entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-keychain-entry"}},[e._v("#")]),e._v(" Delete KeyChain entry")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Open Keychain Access utility in Mac (Applications > Utilities > Keychain Access).")])]),e._v(" "),a("li",[a("p",[e._v('Search for the service "equinox.secure.storage" in Keychain Access.')])]),e._v(" "),a("li",[a("p",[e._v("If possible, create a backup copy and then, delete the service.")])]),e._v(" "),a("li",[a("p",[e._v("Restart Studio.")])]),e._v(" "),a("li",[a("p",[e._v("Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.")])])]),e._v(" "),a("h3",{attrs:{id:"providing-access-to-keychain-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#providing-access-to-keychain-service"}},[e._v("#")]),e._v(" Providing access to Keychain service")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Open Keychain Access utility in Mac (Applications > Utilities > Keychain Access).")])]),e._v(" "),a("li",[a("p",[e._v("Search for the service 'equinox.secure.storage' in Keychain Access.")])]),e._v(" "),a("li",[a("p",[e._v("Open the properties of 'equinox.secure.storage' service and then assign additional privileges to be accessed by the required/all applications (either make sure that Studio is added to access the keychain, or choose to 'Allow all applications to access this item' in Access Control section).")])]),e._v(" "),a("li",[a("p",[e._v("Restart Studio.")])]),e._v(" "),a("li",[a("p",[e._v("Since the secure storage contents are deleted, Studio will prompt for user and password during startup. Restart again and if it still prompts for user/password, please try the following other workarounds.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
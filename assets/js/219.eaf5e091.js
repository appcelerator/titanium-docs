(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{2611:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-preload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-preload"}},[t._v("#")]),t._v(" SQL Preload")]),t._v(" "),a("p",[t._v("Demonstrates how to preload a SQLite database for your Alloy appliccation using an external SQLite database file.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 App Folder Location")]),t._v(" "),a("p",[t._v("alloy/test/apps/"),a("strong",[t._v("models/sql_preload")])])]),t._v(" "),a("p",[t._v("Rather than creating and populating your SQLite database with JavaScript or a migration file, your model configuration file can specify an external SQLite data file. The following image shows the contents of the "),a("code",[t._v("myapp.sqlite")]),t._v(" included with the sample app.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(510),alt:"databrowser"}})]),t._v(" "),a("p",[t._v("The .sqlite database file must be placed in your Alloy project's "),a("strong",[t._v("app/assets")]),t._v(" folder. By default, Alloy creates a database using the name of the database file, minus the file extension, if one does not exist. You can also specify the name of the database to create, as explained below.")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("config.adaptor")]),t._v(" object in the Alloy application's model configuration file must specify the following key-value pairs:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("collection_name")]),t._v(" – The table name inside the SQLite file to use for models and collections.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("db_file")]),t._v(" – The SQLite file to use to preload the application database.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("db_name")]),t._v(" – The name to for the SQLite database name. If not specified, the database name is set to the base name of the .sqlite file.")])])]),t._v(" "),a("p",[a("strong",[t._v("app/models/fighters.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("definition "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No need to define columns object, loading the db_file")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// below will do that for us.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adapter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sql"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The table name inside the sqlite database to use for")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// models and collections based on this definition.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"collection_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fighters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// db_file tells model to use myapp.sqlite file to install")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// database")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db_file"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/myapp.sqlite"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// db_name tells model to use the given name as the database")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// name instead of using the filename. In this case we'll be")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// using "fighters" instead of "myapp".')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fighters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// idAttribute tells Alloy/Backbone to use this column in")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// my table as its unique identifier field. Without")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// specifying this, Alloy's default behavior is to create")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// and "alloy_id" field which will uniquely identify your')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rows in the table.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"idAttribute"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remoteBackup tells Alloy to set the value of the property")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ti.Filesystem.File.remoteBackup. This setting tells iOS")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// whether or not to allow your database to be backed up to")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// iCloud or in iTunes backups.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"remoteBackup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Models/Alloy_Sync_Adapters_and_Migrations/"}},[t._v("Alloy Sync Adapters and Migrations")])],1)])])}),[],!1,null,null,null);e.default=n.exports},510:function(t,e,s){t.exports=s.p+"assets/img/databrowser.a9bc0563.png"}}]);
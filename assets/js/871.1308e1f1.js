(window.webpackJsonp=window.webpackJsonp||[]).push([[871],{2124:function(t,e,a){"use strict";a.r(e);var s=a(21),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"job-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-class"}},[t._v("#")]),t._v(" Job Class")]),t._v(" "),a("p",[t._v("The Job class contains methods and properties for interacting with the Jobs inside Studio.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Examples of how you might interact with methods of the Job class.")]),t._v(" "),a("h3",{attrs:{id:"static"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static"}},[t._v("#")]),t._v(" Static:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('job = Ruble::Job.new("Speaking..."){ `"#{say_command}"` }\njob.schedule\n')])])]),a("h2",{attrs:{id:"job-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-methods"}},[t._v("#")]),t._v(" Job Methods")]),t._v(" "),a("p",[t._v("Job objects have the following static method:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("new(name)")])]),t._v(" "),a("td",[t._v("The name of the job, followed by the items to run.")])])])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("h3",{attrs:{id:"perform-a-job-and-wait-for-results-to-return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-a-job-and-wait-for-results-to-return"}},[t._v("#")]),t._v(" Perform a job and wait for results to return")]),t._v(" "),a("p",[t._v("Here we do something similar to the existing command, but instead, we perform the processing inside a job and assign the results to a variable. We wait for the job to finish before returning.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('require \'ruble\'\n\ncommand "Execute Selection/Line Inserting Results" do |cmd|\n  cmd.key_binding = "CTRL+R"\n  cmd.output = :insert_as_text\n  cmd.input = [ :selection, :line ]\n  cmd.invoke do |context|\n    result = ""\n    job = Ruble::Job.new("Running...") { result += IO.popen(STDIN.read, \'r\') {|io| io.read } }\n    job.schedule # start the job\n    job.join # wait for it to finish\n    return result\n  end\nend\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
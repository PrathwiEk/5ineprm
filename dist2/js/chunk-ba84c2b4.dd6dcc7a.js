(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba84c2b4"],{"18ee":function(t,e,s){"use strict";var i=s("7200"),a=s.n(i);a.a},"386b":function(t,e,s){var i=s("5ca1"),a=s("79e5"),n=s("be13"),l=/"/g,o=function(t,e,s,i){var a=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(i).replace(l,"&quot;")+'"'),o+">"+a+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(o),i(i.P+i.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},7200:function(t,e,s){},7554:function(t,e,s){},"7f7f":function(t,e,s){var i=s("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,l="name";l in a||s("9e1e")&&i(a,l,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"97b5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mainnav",{attrs:{navitems:t.navitems}}),s("snav",{attrs:{snav:t.secnav}}),s("div",{staticClass:"db-container"},[s("div",{},[s("div",{staticClass:"row mb0"},[s("div",{staticClass:"col s12"},[s("div",{staticClass:"scoll-table"},[s("table",{staticClass:"highlight"},[t._m(0),s("tbody",t._l(t.milestinesList,function(e,i){return s("tr",{key:i},[s("td",{staticClass:"center"},[s("a",{staticClass:"task-delete-pre",on:{click:function(s){return t.deleteMilestone(e.id)}}},[s("i",{staticClass:"material-icons"},[t._v("delete")])]),s("a",{staticClass:"task-edit-pre sidenav-trigger",attrs:{"data-target":"slide-out"},on:{click:function(e){return t.editMilestone(i)}}},[s("i",{staticClass:"material-icons"},[t._v("edit")])])]),s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.name+" "+e.last_name))]),s("td",[t._v(t._s(e.sdate))]),s("td",[t._v(t._s(e.edate))]),t._m(1,!0),t._m(2,!0)])}),0)])])])])])]),s("div",{staticClass:"sidenav addslide",attrs:{id:"slide-out"}},[t._m(3),s("form",{on:{submit:function(e){return e.preventDefault(),t.addMilestone()}}},[s("div",{staticClass:"formheight"},[s("div",{staticClass:"row"},[s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col s12 m10"},[s("div",{staticClass:"input-field col s12"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.milestone,expression:"milestone"}],staticClass:"materialize-textarea",attrs:{id:"textarea1",placeholder:"Milestone"},domProps:{value:t.milestone},on:{input:function(e){e.target.composing||(t.milestone=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"hidden"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),s("div",{staticClass:"col s12 m6 input-field"},[s("Datepicker",{attrs:{placeholder:"Start Date"},model:{value:t.sdate,callback:function(e){t.sdate=e},expression:"sdate"}})],1),s("div",{staticClass:"col s12 m6 input-field"},[s("Datepicker",{attrs:{placeholder:"End Date"},model:{value:t.edate,callback:function(e){t.edate=e},expression:"edate"}})],1),s("div",{staticClass:" col s12 m12 input-field"},[s("Multiselect",{staticClass:"line-slect",attrs:{placeholder:"Select User","track-by":"name",label:"name","custom-label":t.fullName,options:t.employees},model:{value:t.employee,callback:function(e){t.employee=e},expression:"employee"}}),t._v("\n                              "+t._s(t.employee)+"\n                          ")],1)])])])]),t._m(4)])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",{staticStyle:{width:"75px"}}),s("th",[t._v("Milestone")]),s("th",{staticStyle:{width:"200px"}},[t._v("Owner")]),s("th",{staticStyle:{width:"150px"}},[t._v("Start Date")]),s("th",{staticStyle:{width:"150px"}},[t._v("End Date")]),s("th",{staticStyle:{width:"200px"}},[t._v("Tasks")]),s("th",{staticStyle:{width:"200px"}},[t._v("Issues")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"progress"},[s("div",{staticClass:"determinate",staticStyle:{width:"70%"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("div",{staticClass:"progress"},[s("div",{staticClass:"determinate",staticStyle:{width:"70%"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heading-a"},[s("p",[t._v("Add New Milestone")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-form-btn"},[s("button",{staticClass:"waves-effect waves-light btn-small indigo accent-3 mr-10"},[t._v("Submit")]),s("a",{staticClass:"waves-effect waves-light btn-small red darken-3 sidenav-close"},[t._v("Cancel")])])}],n=(s("7f7f"),s("8e5f")),l=s.n(n),o=s("fa33"),r=s("d214"),c=s("fd62"),d={components:{Multiselect:l.a,Datepicker:o["a"],mainnav:r["a"],snav:c["a"]},data:function(){return{navitems:{title:"Milstones"},secnav:[{links:[{icon:"list",title:"list",link:"/projects"},{icon:"add",title:"Add Tasks",link:"",slider:!0,add:!0}],seclinks:[{icon:"dashboard",title:"Dashboard",link:"/projects"},{icon:"event_available",title:"Tasks",link:"/tasks"},{icon:"list_alt",title:"Documents",link:"/projects"},{icon:"account_tree",title:"Milstones",link:"/milstones"},{icon:"report_problem",title:"Issues",link:"/projects"},{icon:"supervisor_account",title:"Users",link:"/projects"},{icon:"blur_on",title:"Credantials",link:"/projects"}],method:[{icon:"delete",title:"delete",methods:"delete",link:""}],tabs:[{title:"Completed",link:"/milstones",class:"active"},{title:"Pending",link:"/milstones-pending",class:""}]}],employees:"",employee:"",milestone:"",sdate:"",edate:"",id:"",milestinesList:""}},mounted:function(){var t=this;M.Sidenav.init(document.querySelectorAll(".addslide"),{edge:"right",onCloseEnd:function(){t.clearform()}});this.getEmployee(),this.GetMilestones()},methods:{clearform:function(){this.employee="",this.milestone="",this.sdate="",this.edate="",this.id=""},fullName:function(t){var e=t.name,s=t.last_name;return"".concat(e," ").concat(s)},getEmployee:function(){var t=this;this.$axios.get(this.$apiUrl+"org/employee-list",{headers:{Authorization:this.$token}}).then(function(e){t.employees=e.data.data}).catch(function(t){console.error(t)})},GetMilestones:function(){var t=this;this.$axios.get(this.$apiUrl+"milestone/list/"+this.$route.params.id,{headers:{Authorization:this.$token}}).then(function(e){t.milestinesList=e.data.data}).catch(function(t){console.error(t)})},addMilestone:function(){var t=this,e=new FormData;e.append("title",this.milestone),e.append("employee",this.employee.uqid),e.append("sdate",this.sdate),e.append("edate",this.edate),e.append("project",this.$route.params.id),e.append("id",this.id),this.$axios.post(this.$apiUrl+"milestone/add",e,{headers:{Authorization:this.$token}}).then(function(e){M.toast({html:"Milestone "+e.data.msg,classes:"green"}),t.employee="",t.milestone="",t.sdate="",t.edate="",t.GetMilestones()}).catch(function(e){console.log(e),t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})},deleteMilestone:function(t){var e=this;if(!confirm("Are you sure to delete this Milestone?"))return!1;this.$axios.delete(this.$apiUrl+"milestone/delete/"+t,{headers:{Authorization:this.$token}}).then(function(t){M.toast({html:"Record was successfully deleted",classes:"green"}),e.GetMilestones()}).catch(function(t){M.toast({html:"Please try again later",classes:"red"})})},editMilestone:function(t){console.log(this.milestinesList),this.employee={name:this.milestinesList[t].name,last_name:this.milestinesList[t].last_name,uqid:this.milestinesList[t].assign_to},this.milestone=this.milestinesList[t].title,this.sdate=this.milestinesList[t].sdate,this.edate=this.milestinesList[t].edate,this.id=this.milestinesList[t].id}}},u=d,m=(s("18ee"),s("2877")),h=Object(m["a"])(u,i,a,!1,null,"3994c024",null);e["default"]=h.exports},b54a:function(t,e,s){"use strict";s("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c488:function(t,e,s){"use strict";var i=s("7554"),a=s.n(i);a.a},fd62:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"theme-second-nav"},[s("nav",{staticClass:"white z-depth-0"},[s("div",{staticClass:"nav-wrapper"},[s("ul",{staticClass:"left nav-item-left",attrs:{id:"nav-mobile"}},t._l(t.snav[0].tabs,function(e,i){return s("li",{key:i,staticClass:"icon-less"},[s("router-link",{staticClass:"waves-effect waves-green",class:e.class,attrs:{to:"/project/"+t.id+e.link}},[t._v(" \n             "+t._s(e.title)+" \n            ")])],1)}),0),t._l(t.snav,function(e,i){return s("ul",{key:i,staticClass:"right",attrs:{id:"nav-mobile"}},[s("li",{staticClass:"black-text nav seprate"}),t._l(e.seclinks,function(e,i){return s("li",{key:i},[s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:"/project/"+t.id+e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),s("li",{staticClass:"black-text nav seprate"}),t._l(e.links,function(e,i){return s("li",{key:"link"+i},[e.slider?s("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"slide-out"}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),t._l(e.method,function(e,i){return s("li",{key:e.title+i},["delete"==e.methods?s("a",{staticClass:"waves-effect waves-green",on:{click:function(s){return t.deleteItem(e.link)}}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):t._e()])})],2)})],2)])])])},a=[],n=(s("b54a"),s("ac6a"),{props:["snav"],data:function(){return{msg:"",rto:"",id:""}},mounted:function(){this.id=this.$route.params.id},methods:{deleteItem:function(t){var e=this,s=this.$route.params.id;this.snav[0].links.forEach(function(t){"list"==t.title&&(e.rto=t.link)}),this.$axios.delete(this.$apiUrl+t+s,{headers:{Authorization:this.$token}}).then(function(t){var s="Successfully deleted";M.toast({html:s,classes:"green"}),e.$router.push({path:e.rto})}).catch(function(t){e.msg=t.response.data.msg;var s="<ul>"+t.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})}}}),l=n,o=(s("c488"),s("2877")),r=Object(o["a"])(l,i,a,!1,null,"18f802cc",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-ba84c2b4.dd6dcc7a.js.map
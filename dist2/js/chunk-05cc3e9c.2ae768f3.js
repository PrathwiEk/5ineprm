(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05cc3e9c"],{"052f":function(t,e,s){"use strict";var a=s("89d1"),i=s.n(a);i.a},2514:function(t,e,s){},"386b":function(t,e,s){var a=s("5ca1"),i=s("79e5"),n=s("be13"),r=/"/g,l=function(t,e,s,a){var i=String(n(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(a).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},7554:function(t,e,s){},"89d1":function(t,e,s){},a3c1:function(t,e,s){"use strict";var a=s("2514"),i=s.n(a);i.a},ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),l=s("32e9"),c=s("84f2"),o=s("2b4c"),v=o("iterator"),d=o("toStringTag"),u=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(m),f=0;f<p.length;f++){var _,C=p[f],h=m[C],g=r[C],w=g&&g.prototype;if(w&&(w[v]||l(w,v,u),w[d]||l(w,d,C),c[C]=u,h))for(_ in a)w[_]||n(w,_,a[_],!0)}},b512:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Skin",{attrs:{navitems:t.navitems}}),s("secondnav",{attrs:{snav:t.secnav}}),s("div",{staticClass:"db-container detail"},[s("div",{staticClass:"container-wrap-1"},[s("div",{staticClass:"row m0"},[t._m(0),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(1),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.title,expression:"project.title"}],staticClass:"no-line",attrs:{type:"text"},domProps:{value:t.project.title},on:{input:function(e){e.target.composing||t.$set(t.project,"title",e.target.value)}}})])])]),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(2),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.status,expression:"project.status"}],staticClass:"no-line",attrs:{type:"text"},domProps:{value:t.project.status},on:{input:function(e){e.target.composing||t.$set(t.project,"status",e.target.value)}}})])])]),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(3),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.group_name,expression:"project.group_name"}],staticClass:"no-line",attrs:{type:"text"},domProps:{value:t.project.group_name},on:{input:function(e){e.target.composing||t.$set(t.project,"group_name",e.target.value)}}})])])]),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(4),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.owner,expression:"project.owner"}],staticClass:"no-line",attrs:{type:"text"},domProps:{value:t.project.owner},on:{input:function(e){e.target.composing||t.$set(t.project,"owner",e.target.value)}}})])])]),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(5),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.start_date,expression:"project.start_date"}],staticClass:"no-line datepicker",attrs:{value:"",type:"text"},domProps:{value:t.project.start_date},on:{input:function(e){e.target.composing||t.$set(t.project,"start_date",e.target.value)}}})])])]),s("div",{staticClass:"col s12 m6"},[s("div",{staticClass:"row m0"},[t._m(6),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.project.end_date,expression:"project.end_date"}],staticClass:"no-line datepicker",attrs:{type:"text"},domProps:{value:t.project.end_date},on:{input:function(e){e.target.composing||t.$set(t.project,"end_date",e.target.value)}}})])])]),s("div",{staticClass:"clearfix"}),t._m(7),s("div",{staticClass:"col s12 "},[s("div",{staticClass:"row "},[s("div",{staticClass:"no-border"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.project.over_view,expression:"project.over_view"}],attrs:{name:"",rows:"5",id:""},domProps:{value:t.project.over_view},on:{input:function(e){e.target.composing||t.$set(t.project,"over_view",e.target.value)}}})])])]),s("div",{staticClass:"clearfix"}),t._m(8),s("div",{staticClass:"col s12 "},[s("div",{staticClass:"row mb0"},[t._l(t.project.user,function(e){return s("div",{key:e.id,staticClass:"col s12 m4 l3"},[s("div",{staticClass:"userbox"},[s("div",{staticClass:"image-box"},[s("img",{staticClass:" responsive-img",attrs:{src:e.profile_pic,alt:""}})]),s("div",{staticClass:"u-detail"},[""!=e.name?s("div",{staticClass:"ud-name truncate"},[t._v(t._s(e.name))]):s("div",{staticClass:"ud-name truncate"},[t._v(t._s(e.email))]),s("div",{staticClass:"ud-pos truncates"},[t._v(t._s(e.role))])])])])}),t._m(9)],2)]),t._m(10)])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fb-title"},[s("span",[t._v("Primary Information")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Project Name ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Project Status")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Group")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Owner")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Start Date")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("End Date")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fb-title "},[s("span",[t._v("Description")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fb-title mb10"},[s("span",[t._v("Users")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m4 l3"},[s("div",{staticClass:"lh95"},[s("a",{staticClass:"btn-floating btn-large  waves-effect waves-light "},[s("i",{staticClass:"material-icons"},[t._v("add")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-button"},[s("div",{staticClass:"col s12  "},[s("button",{staticClass:"waves-effect waves-light btn-small mr10 hoverable"},[t._v("update")]),s("a",{staticClass:"waves-effect waves-light red btn-small mr10 hoverable router-link-active",attrs:{href:"/projects"}},[t._v("Cancel")])])])}],n=s("d214"),r=s("fd62"),l={components:{Skin:n["a"],secondnav:r["a"]},data:function(){return{navitems:{title:"",lt_link:[{path:"/projects",icon:"keyboard_backspace",title:"back"}]},project:{},secnav:[{links:[{icon:"list",title:"list",link:"/projects"},{icon:"add",title:"Create",link:"/project-create"}],seclinks:[{icon:"dashboard",title:"Dashboard",link:"/projects"},{icon:"event_available",title:"Tasks",link:"/tasks"},{icon:"list_alt",title:"Documents",link:"/projects"},{icon:"account_tree",title:"Milstones",link:"/milstones"},{icon:"report_problem",title:"Issues",link:"/projects"},{icon:"supervisor_account",title:"Users",link:"/projects"},{icon:"blur_on",title:"Credantials",link:"/projects"}],method:[{icon:"delete",title:"delete",methods:"delete",link:""}]}]}},mounted:function(){this.getDetail();var t=document.querySelectorAll(".datepicker");M.Datepicker.init(t)},methods:{getDetail:function(){var t=this,e=this.$route.params.id;this.$axios.get(this.$apiUrl+"projects-detail/"+e,{headers:{Authorization:this.$token}}).then(function(e){t.project=e.data.data["0"],t.navitems.title=t.project.title}).catch(function(t){if(t.response){var e="<ul>"+t.response.data.error+"</ul>";M.toast({html:e,classes:"red"})}})}}},c=l,o=(s("a3c1"),s("2877")),v=Object(o["a"])(c,a,i,!1,null,"53a3caca",null);e["default"]=v.exports},b54a:function(t,e,s){"use strict";s("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c488:function(t,e,s){"use strict";var a=s("7554"),i=s.n(a);i.a},d214:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"navbar-fixed"},[s("nav",{staticClass:"z-depth-0 brand theme-top-nav"},[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"brand-logo",attrs:{href:"#!"}},[t._v("\n                    "+t._s(t.navitems.title)+"\n                ")]),t._m(0)])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"right hide-on-med-and-down"},[s("li",[s("a",{attrs:{href:"/projects"}},[t._v("\n                        Projects\n                    ")])]),s("li",[s("a",{staticClass:"dropdown-trigger",attrs:{href:"#!","data-target":"orgdroup"}},[t._v("\n                        Organization\n                    ")])]),s("li",[s("a",{attrs:{href:"badges.html"}},[s("i",{staticClass:"material-icons"},[t._v("view_module")])])]),s("li",[s("a",{attrs:{href:"collapsible.html"}},[s("i",{staticClass:"material-icons"},[t._v("refresh")])])]),s("li",[s("a",{attrs:{href:"mobile.html"}},[s("i",{staticClass:"material-icons"},[t._v("more_vert")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"dropdown-content",attrs:{id:"orgdroup"}},[s("li",[s("a",{attrs:{href:"/organization/department"}},[t._v("Department")])]),s("li",[s("a",{attrs:{href:"/organization/designation"}},[t._v("Designation")])]),s("li",[s("a",{attrs:{href:"/organization/group"}},[t._v("Group")])]),s("li",[s("a",{attrs:{href:"/organization/employee"}},[t._v("Employee")])])])}],n={props:["navitems"],mounted:function(){var t=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(t,{constrainWidth:!1,hover:!0})}},r=n,l=(s("052f"),s("2877")),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},fd62:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"theme-second-nav"},[s("nav",{staticClass:"white z-depth-0"},[s("div",{staticClass:"nav-wrapper"},[s("ul",{staticClass:"left nav-item-left",attrs:{id:"nav-mobile"}},t._l(t.snav[0].tabs,function(e,a){return s("li",{key:a,staticClass:"icon-less"},[s("router-link",{staticClass:"waves-effect waves-green",class:e.class,attrs:{to:"/project/"+t.id+e.link}},[t._v(" \n             "+t._s(e.title)+" \n            ")])],1)}),0),t._l(t.snav,function(e,a){return s("ul",{key:a,staticClass:"right",attrs:{id:"nav-mobile"}},[s("li",{staticClass:"black-text nav seprate"}),t._l(e.seclinks,function(e,a){return s("li",{key:a},[s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:"/project/"+t.id+e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),s("li",{staticClass:"black-text nav seprate"}),t._l(e.links,function(e,a){return s("li",{key:"link"+a},[e.slider?s("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"slide-out"}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),t._l(e.method,function(e,a){return s("li",{key:e.title+a},["delete"==e.methods?s("a",{staticClass:"waves-effect waves-green",on:{click:function(s){return t.deleteItem(e.link)}}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):t._e()])})],2)})],2)])])])},i=[],n=(s("b54a"),s("ac6a"),{props:["snav"],data:function(){return{msg:"",rto:"",id:""}},mounted:function(){this.id=this.$route.params.id},methods:{deleteItem:function(t){var e=this,s=this.$route.params.id;this.snav[0].links.forEach(function(t){"list"==t.title&&(e.rto=t.link)}),this.$axios.delete(this.$apiUrl+t+s,{headers:{Authorization:this.$token}}).then(function(t){var s="Successfully deleted";M.toast({html:s,classes:"green"}),e.$router.push({path:e.rto})}).catch(function(t){e.msg=t.response.data.msg;var s="<ul>"+t.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})}}}),r=n,l=(s("c488"),s("2877")),c=Object(l["a"])(r,a,i,!1,null,"18f802cc",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-05cc3e9c.2ae768f3.js.map
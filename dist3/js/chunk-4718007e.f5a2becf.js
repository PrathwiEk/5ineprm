(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4718007e"],{"052f":function(t,e,s){"use strict";var a=s("89d1"),i=s.n(a);i.a},"13f4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nvbars",{attrs:{navitems:t.navitems}}),s("secondnav",{attrs:{snav:t.secnav}}),s("div",{staticClass:"depart-create db-container"},[s("div",{staticClass:"container-wrap-1"},[s("div",{staticClass:"row"},[t._m(0),s("form",{on:{submit:function(e){return e.preventDefault(),t.addgroup()}}},[s("div",{staticClass:"col s12 l6 m12"},[s("div",{staticClass:"row m0"},[t._m(1),s("div",{staticClass:"col s12 m8 cm-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.group.title,expression:"group.title"}],attrs:{type:"text",required:""},domProps:{value:t.group.title},on:{input:function(e){e.target.composing||t.$set(t.group,"title",e.target.value)}}})])]),s("div",{staticClass:"row m0"},[t._m(2),s("div",{staticClass:"col s12 m8 cm-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.group.email_id,expression:"group.email_id"}],attrs:{type:"email"},domProps:{value:t.group.email_id},on:{input:function(e){e.target.composing||t.$set(t.group,"email_id",e.target.value)}}})])]),s("div",{staticClass:"row m0"},[t._m(3),s("div",{staticClass:"col s12 m8 l8 cm-field"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.group.des,expression:"group.des"}],attrs:{rows:"5"},domProps:{value:t.group.des},on:{input:function(e){e.target.composing||t.$set(t.group,"des",e.target.value)}}})])])]),s("div",{staticClass:"col s12 l6 m12 "},[s("div",{staticClass:"subheading"},[t._v("\n                  Add users\n                ")]),t._l(t.inputs,function(e){return s("div",{key:e.id,staticClass:"row m0 usersection"},[s("div",{staticClass:"col s12 m6"},[s("Multiselect",{attrs:{for:e.id,required:"","track-by":"name",label:"name","custom-label":t.fullName,options:t.users},model:{value:e.name,callback:function(s){t.$set(e,"name",s)},expression:"input.name"}})],1),s("div",{staticClass:"col s10 m5"},[s("Multiselect",{attrs:{id:e.id,required:"","track-by":"name",label:"name",options:t.roles},model:{value:e.role,callback:function(s){t.$set(e,"role",s)},expression:"input.role"}})],1),s("div",{staticClass:"col s2 m1"})])}),s("div",{staticClass:"row m0 pt10"},[s("a",{staticClass:"waves-effect waves-lightern  btn-flat blue-grey lighten-5",attrs:{href:"#!"},on:{click:t.addUsercolumn}},[s("i",{staticClass:"material-icons left tiny"},[t._v("add")]),t._v(" Add New User")])])],2),s("div",{staticClass:"bottom-button"},[s("div",{staticClass:"col s12"},[s("button",{ref:"submit",staticClass:"waves-effect waves-light btn-small mr10 hoverable"},[t._v("Submit")]),s("router-link",{staticClass:"waves-effect waves-light red btn-small mr10 hoverable",attrs:{to:"/organization/group"}},[t._v("Cancel")])],1)])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fb-title"},[s("span",[t._v("Edit Group")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3 cm-field"},[s("div",{staticClass:"title"},[s("span",[t._v("Group Name")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3 cm-field"},[s("div",{staticClass:"title"},[s("span",[t._v("Mail Alias")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3 l3"},[s("div",{staticClass:"title"},[s("span",[t._v("Description")])])])}],n=(s("ac6a"),s("7f7f"),s("d214")),r=s("fd62"),o=s("8e5f"),l=s.n(o),c={components:{secondnav:r["a"],nvbars:n["a"],Multiselect:l.a},data:function(){return{group:{},navitems:{title:"Edit Group"},role:"",user:[{name:"ghng"},{name:"ghng"},{name:"ghng"}],users:[],roles:[{name:"admin"},{name:"user"}],counter:0,inputs:[],secnav:[{links:[{icon:"list",title:"list",link:"/organization/group"},{icon:"add",title:"Create",link:"/organization/group/create"}],method:[{icon:"delete",title:"delete",methods:"delete",link:"org/group-delete/"}]}]}},mounted:function(){this.getGroup(),this.getEmpList()},methods:{addUsercolumn:function(){this.inputs.push({id:"".concat(++this.counter)})},addgroup:function(){var t=this,e=new FormData;e.append("title",this.group.title),e.append("mail",this.group.email_id),e.append("des",this.group.des);for(var s=0;s<this.inputs.length;s++)e.append("users[]",this.inputs[s].name.name),e.append("role[]",this.inputs[s].role.name);this.$axios.post(this.$apiUrl+"org/group-update/"+this.$route.params.id,e,{headers:{Authorization:this.$token}}).then(function(t){var e="Succefully group updated";M.toast({html:e,classes:"green"})}).catch(function(e){console.log(e),t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})},getGroup:function(){var t=this,e=this.$route.params.id;this.$axios.get(this.$apiUrl+"org/group/"+e,{headers:{Authorization:this.$token}}).then(function(e){t.group=e.data.data,e.data.data.users.forEach(function(e){t.inputs.push(e)})}).catch(function(e){t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"}),t.$router.push({path:"/organization/group"})})},getEmpList:function(){var t=this;this.$axios.get(this.$apiUrl+"org/group-employees",{headers:{Authorization:this.$token}}).then(function(e){t.users=e.data.data,console.log(e)}).catch(function(e){console.log(e),t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})},fullName:function(t){var e=t.fname,s=t.lname;return"".concat(e," ").concat(s)}}},u=c,d=(s("4fb4"),s("2877")),m=Object(d["a"])(u,a,i,!1,null,"4af18272",null);e["default"]=m.exports},"386b":function(t,e,s){var a=s("5ca1"),i=s("79e5"),n=s("be13"),r=/"/g,o=function(t,e,s,a){var i=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(o),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},"4fb4":function(t,e,s){"use strict";var a=s("f117"),i=s.n(a);i.a},7554:function(t,e,s){},"7f7f":function(t,e,s){var a=s("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||s("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"89d1":function(t,e,s){},ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),o=s("32e9"),l=s("84f2"),c=s("2b4c"),u=c("iterator"),d=c("toStringTag"),m=l.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(v),f=0;f<p.length;f++){var h,g=p[f],_=v[g],C=r[g],b=C&&C.prototype;if(b&&(b[u]||o(b,u,m),b[d]||o(b,d,g),l[g]=m,_))for(h in a)b[h]||n(b,h,a[h],!0)}},b54a:function(t,e,s){"use strict";s("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c488:function(t,e,s){"use strict";var a=s("7554"),i=s.n(a);i.a},d214:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"navbar-fixed"},[s("nav",{staticClass:"z-depth-0 brand theme-top-nav"},[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"brand-logo",attrs:{href:"#!"}},[t._v("\n                    "+t._s(t.navitems.title)+"\n                ")]),t._m(0)])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"right hide-on-med-and-down"},[s("li",[s("a",{attrs:{href:"/projects"}},[t._v("\n                        Projects\n                    ")])]),s("li",[s("a",{staticClass:"dropdown-trigger",attrs:{href:"#!","data-target":"orgdroup"}},[t._v("\n                        Organization\n                    ")])]),s("li",[s("a",{attrs:{href:"badges.html"}},[s("i",{staticClass:"material-icons"},[t._v("view_module")])])]),s("li",[s("a",{attrs:{href:"collapsible.html"}},[s("i",{staticClass:"material-icons"},[t._v("refresh")])])]),s("li",[s("a",{attrs:{href:"mobile.html"}},[s("i",{staticClass:"material-icons"},[t._v("more_vert")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"dropdown-content",attrs:{id:"orgdroup"}},[s("li",[s("a",{attrs:{href:"/organization/department"}},[t._v("Department")])]),s("li",[s("a",{attrs:{href:"/organization/designation"}},[t._v("Designation")])]),s("li",[s("a",{attrs:{href:"/organization/group"}},[t._v("Group")])]),s("li",[s("a",{attrs:{href:"/organization/employee"}},[t._v("Employee")])])])}],n={props:["navitems"],mounted:function(){var t=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(t,{constrainWidth:!1,hover:!0})}},r=n,o=(s("052f"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},f117:function(t,e,s){},fd62:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"theme-second-nav"},[s("nav",{staticClass:"white z-depth-0"},[s("div",{staticClass:"nav-wrapper"},[s("ul",{staticClass:"left nav-item-left",attrs:{id:"nav-mobile"}},t._l(t.snav[0].tabs,function(e,a){return s("li",{key:a,staticClass:"icon-less"},[s("router-link",{staticClass:"waves-effect waves-green",class:e.class,attrs:{to:"/project/"+t.id+e.link}},[t._v(" \n             "+t._s(e.title)+" \n            ")])],1)}),0),t._l(t.snav,function(e,a){return s("ul",{key:a,staticClass:"right",attrs:{id:"nav-mobile"}},[s("li",{staticClass:"black-text nav seprate"}),t._l(e.seclinks,function(e,a){return s("li",{key:a},[s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:"/project/"+t.id+e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),s("li",{staticClass:"black-text nav seprate"}),t._l(e.links,function(e,a){return s("li",{key:"link"+a},[e.slider?s("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"slide-out"}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),t._l(e.method,function(e,a){return s("li",{key:e.title+a},["delete"==e.methods?s("a",{staticClass:"waves-effect waves-green",on:{click:function(s){return t.deleteItem(e.link)}}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):t._e()])})],2)})],2)])])])},i=[],n=(s("b54a"),s("ac6a"),{props:["snav"],data:function(){return{msg:"",rto:"",id:""}},mounted:function(){this.id=this.$route.params.id},methods:{deleteItem:function(t){var e=this,s=this.$route.params.id;this.snav[0].links.forEach(function(t){"list"==t.title&&(e.rto=t.link)}),this.$axios.delete(this.$apiUrl+t+s,{headers:{Authorization:this.$token}}).then(function(t){var s="Successfully deleted";M.toast({html:s,classes:"green"}),e.$router.push({path:e.rto})}).catch(function(t){e.msg=t.response.data.msg;var s="<ul>"+t.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})}}}),r=n,o=(s("c488"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,"18f802cc",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-4718007e.f5a2becf.js.map
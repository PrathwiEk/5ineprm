(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-637f4d3f"],{"052f":function(t,e,s){"use strict";var a=s("89d1"),i=s.n(a);i.a},3098:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"dpt"}},[s("nvbars",{attrs:{navitems:t.navitems}}),s("secondnav",{attrs:{snav:t.secnav}}),s("div",{staticClass:"depart-create detail"},[s("div",{staticClass:"container-wrap-1"},[s("div",{staticClass:"row m0"},[t._m(0),s("form",{on:{submit:function(e){return e.preventDefault(),t.adddesignation()}}},[s("div",{staticClass:"col s12 l6 m12"},[s("div",{staticClass:"row  "},[t._m(1),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_title,expression:"designation.des_title"}],staticClass:"no-line",attrs:{type:"text",required:""},domProps:{value:t.designation.des_title},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_title",e.target.value)}}})])]),s("div",{staticClass:"row  "},[t._m(2),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_mail,expression:"designation.des_mail"}],staticClass:"no-line",attrs:{type:"email",required:""},domProps:{value:t.designation.des_mail},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_mail",e.target.value)}}})])]),s("div",{staticClass:"row  "},[t._m(3),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_created_by,expression:"designation.des_created_by"}],staticClass:"no-line",attrs:{type:"text",readonly:""},domProps:{value:t.designation.des_created_by},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_created_by",e.target.value)}}})])]),s("div",{staticClass:"row  "},[t._m(4),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_created_On,expression:"designation.des_created_On"}],staticClass:"no-line",attrs:{type:"text",readonly:""},domProps:{value:t.designation.des_created_On},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_created_On",e.target.value)}}})])])]),s("div",{staticClass:"col s12 l6 m12"},[s("div",{staticClass:"row  "},[t._m(5),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_update_by,expression:"designation.des_update_by"}],staticClass:"no-line",attrs:{type:"text",readonly:""},domProps:{value:t.designation.des_update_by},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_update_by",e.target.value)}}})])]),s("div",{staticClass:"row  "},[t._m(6),s("div",{staticClass:"col s12 m7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.des_updated_on,expression:"designation.des_updated_on"}],staticClass:"no-line",attrs:{type:"text",readonly:""},domProps:{value:t.designation.des_updated_on},on:{input:function(e){e.target.composing||t.$set(t.designation,"des_updated_on",e.target.value)}}})])])]),s("div",{staticClass:"bottom-button"},[s("div",{staticClass:"col s12  "},[s("button",{ref:"submit",staticClass:"waves-effect waves-light btn-small mr10 hoverable"},[t._v("update")]),s("router-link",{staticClass:"waves-effect waves-light red btn-small mr10 hoverable",attrs:{to:"/organization/designation"}},[t._v("Cancel")])],1)])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fb-title"},[s("span",[t._v("Edit Designation")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Designation Name")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Mail Alias")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Created by")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Created On")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Modified By")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col s12 m3"},[s("div",{staticClass:"title"},[s("span",[t._v("Modified At")])])])}],n=s("d214"),r=s("fd62"),o={components:{secondnav:r["a"],nvbars:n["a"]},data:function(){return{designation:[],parent:"",navitems:{title:"Designation"},secnav:[{links:[{icon:"list",title:"list",link:"/organization/designation"},{icon:"add",title:"Create",link:"/organization/designation/create"}],method:[{icon:"delete",title:"delete",methods:"delete",link:"org/designation-delete/"}]}]}},mounted:function(){this.getdesignation(),this.preloaditem()},methods:{preloaditem:function(){var t=document.querySelectorAll("select");M.FormSelect.init(t)},adddesignation:function(){var t=this,e=new FormData;e.append("title",this.designation.des_title),e.append("mail",this.designation.des_mail),this.$axios.post(this.$apiUrl+"org/designation-update/"+this.$route.params.id,e,{headers:{Authorization:this.$token}}).then(function(t){var e="<ul>"+t.data.msg+"</ul>";M.toast({html:e,classes:"green"})}).catch(function(e){t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})},getdesignation:function(){var t=this,e=this.$route.params.id;this.$axios.get(this.$apiUrl+"org/designation/"+e,{headers:{Authorization:this.$token}}).then(function(e){t.designation=e.data.data}).catch(function(e){t.errormsg=e.response.data.msg;var s="<ul>"+e.response.data.msg+"</ul>";M.toast({html:s,classes:"red"}),t.$router.push({path:"/organization/designation"})})}}},l=o,c=(s("c55c"),s("2877")),d=Object(c["a"])(l,a,i,!1,null,"8ff9e108",null);e["default"]=d.exports},"386b":function(t,e,s){var a=s("5ca1"),i=s("79e5"),n=s("be13"),r=/"/g,o=function(t,e,s,a){var i=String(n(t)),o="<"+e;return""!==s&&(o+=" "+s+'="'+String(a).replace(r,"&quot;")+'"'),o+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(o),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},7554:function(t,e,s){},"89d1":function(t,e,s){},ac6a:function(t,e,s){for(var a=s("cadf"),i=s("0d58"),n=s("2aba"),r=s("7726"),o=s("32e9"),l=s("84f2"),c=s("2b4c"),d=c("iterator"),u=c("toStringTag"),v=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(m),g=0;g<p.length;g++){var f,_=p[g],h=m[_],C=r[_],b=C&&C.prototype;if(b&&(b[d]||o(b,d,v),b[u]||o(b,u,_),l[_]=v,h))for(f in a)b[f]||n(b,f,a[f],!0)}},b54a:function(t,e,s){"use strict";s("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c488:function(t,e,s){"use strict";var a=s("7554"),i=s.n(a);i.a},c55c:function(t,e,s){"use strict";var a=s("d1db"),i=s.n(a);i.a},d1db:function(t,e,s){},d214:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"navbar-fixed"},[s("nav",{staticClass:"z-depth-0 brand theme-top-nav"},[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"brand-logo",attrs:{href:"#!"}},[t._v("\n                    "+t._s(t.navitems.title)+"\n                ")]),t._m(0)])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"right hide-on-med-and-down"},[s("li",[s("a",{attrs:{href:"/projects"}},[t._v("\n                        Projects\n                    ")])]),s("li",[s("a",{staticClass:"dropdown-trigger",attrs:{href:"#!","data-target":"orgdroup"}},[t._v("\n                        Organization\n                    ")])]),s("li",[s("a",{attrs:{href:"badges.html"}},[s("i",{staticClass:"material-icons"},[t._v("view_module")])])]),s("li",[s("a",{attrs:{href:"collapsible.html"}},[s("i",{staticClass:"material-icons"},[t._v("refresh")])])]),s("li",[s("a",{attrs:{href:"mobile.html"}},[s("i",{staticClass:"material-icons"},[t._v("more_vert")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"dropdown-content",attrs:{id:"orgdroup"}},[s("li",[s("a",{attrs:{href:"/organization/department"}},[t._v("Department")])]),s("li",[s("a",{attrs:{href:"/organization/designation"}},[t._v("Designation")])]),s("li",[s("a",{attrs:{href:"/organization/group"}},[t._v("Group")])]),s("li",[s("a",{attrs:{href:"/organization/employee"}},[t._v("Employee")])])])}],n={props:["navitems"],mounted:function(){var t=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(t,{constrainWidth:!1,hover:!0})}},r=n,o=(s("052f"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},fd62:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"theme-second-nav"},[s("nav",{staticClass:"white z-depth-0"},[s("div",{staticClass:"nav-wrapper"},[s("ul",{staticClass:"left nav-item-left",attrs:{id:"nav-mobile"}},t._l(t.snav[0].tabs,function(e,a){return s("li",{key:a,staticClass:"icon-less"},[s("router-link",{staticClass:"waves-effect waves-green",class:e.class,attrs:{to:"/project/"+t.id+e.link}},[t._v(" \n             "+t._s(e.title)+" \n            ")])],1)}),0),t._l(t.snav,function(e,a){return s("ul",{key:a,staticClass:"right",attrs:{id:"nav-mobile"}},[s("li",{staticClass:"black-text nav seprate"}),t._l(e.seclinks,function(e,a){return s("li",{key:a},[s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:"/project/"+t.id+e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),s("li",{staticClass:"black-text nav seprate"}),t._l(e.links,function(e,a){return s("li",{key:"link"+a},[e.slider?s("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"slide-out"}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):s("router-link",{staticClass:"waves-effect waves-green",attrs:{to:e.link}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])])],1)}),t._l(e.method,function(e,a){return s("li",{key:e.title+a},["delete"==e.methods?s("a",{staticClass:"waves-effect waves-green",on:{click:function(s){return t.deleteItem(e.link)}}},[s("i",{staticClass:"material-icons"},[t._v(t._s(e.icon))]),s("span",[t._v(t._s(e.title))])]):t._e()])})],2)})],2)])])])},i=[],n=(s("b54a"),s("ac6a"),{props:["snav"],data:function(){return{msg:"",rto:"",id:""}},mounted:function(){this.id=this.$route.params.id},methods:{deleteItem:function(t){var e=this,s=this.$route.params.id;this.snav[0].links.forEach(function(t){"list"==t.title&&(e.rto=t.link)}),this.$axios.delete(this.$apiUrl+t+s,{headers:{Authorization:this.$token}}).then(function(t){var s="Successfully deleted";M.toast({html:s,classes:"green"}),e.$router.push({path:e.rto})}).catch(function(t){e.msg=t.response.data.msg;var s="<ul>"+t.response.data.msg+"</ul>";M.toast({html:s,classes:"red"})})}}}),r=n,o=(s("c488"),s("2877")),l=Object(o["a"])(r,a,i,!1,null,"18f802cc",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-637f4d3f.45cf5939.js.map
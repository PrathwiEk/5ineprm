(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-719f4fc5"],{"052f":function(t,a,e){"use strict";var i=e("89d1"),s=e.n(i);s.a},"386b":function(t,a,e){var i=e("5ca1"),s=e("79e5"),n=e("be13"),r=/"/g,l=function(t,a,e,i){var s=String(n(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+String(i).replace(r,"&quot;")+'"'),l+">"+s+"</"+a+">"};t.exports=function(t,a){var e={};e[t]=a(l),i(i.P+i.F*s(function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",e)}},7554:function(t,a,e){},"89d1":function(t,a,e){},9933:function(t,a,e){"use strict";var i=e("f0ab"),s=e.n(i);s.a},ac6a:function(t,a,e){for(var i=e("cadf"),s=e("0d58"),n=e("2aba"),r=e("7726"),l=e("32e9"),o=e("84f2"),c=e("2b4c"),d=c("iterator"),u=c("toStringTag"),v=o.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(m),p=0;p<f.length;p++){var g,h=f[p],_=m[h],C=r[h],b=C&&C.prototype;if(b&&(b[d]||l(b,d,v),b[u]||l(b,u,h),o[h]=v,_))for(g in i)b[g]||n(b,g,i[g],!0)}},b54a:function(t,a,e){"use strict";e("386b")("link",function(t){return function(a){return t(this,"a","href",a)}})},c488:function(t,a,e){"use strict";var i=e("7554"),s=e.n(i);s.a},d214:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("div",{staticClass:"navbar-fixed"},[e("nav",{staticClass:"z-depth-0 brand theme-top-nav"},[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"brand-logo",attrs:{href:"#!"}},[t._v("\n                    "+t._s(t.navitems.title)+"\n                ")]),t._m(0)])])]),t._m(1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"right hide-on-med-and-down"},[e("li",[e("a",{attrs:{href:"/projects"}},[t._v("\n                        Projects\n                    ")])]),e("li",[e("a",{staticClass:"dropdown-trigger",attrs:{href:"#!","data-target":"orgdroup"}},[t._v("\n                        Organization\n                    ")])]),e("li",[e("a",{attrs:{href:"badges.html"}},[e("i",{staticClass:"material-icons"},[t._v("view_module")])])]),e("li",[e("a",{attrs:{href:"collapsible.html"}},[e("i",{staticClass:"material-icons"},[t._v("refresh")])])]),e("li",[e("a",{attrs:{href:"mobile.html"}},[e("i",{staticClass:"material-icons"},[t._v("more_vert")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"dropdown-content",attrs:{id:"orgdroup"}},[e("li",[e("a",{attrs:{href:"/organization/department"}},[t._v("Department")])]),e("li",[e("a",{attrs:{href:"/organization/designation"}},[t._v("Designation")])]),e("li",[e("a",{attrs:{href:"/organization/group"}},[t._v("Group")])]),e("li",[e("a",{attrs:{href:"/organization/employee"}},[t._v("Employee")])])])}],n={props:["navitems"],mounted:function(){var t=document.querySelectorAll(".dropdown-trigger");M.Dropdown.init(t,{constrainWidth:!1,hover:!0})}},r=n,l=(e("052f"),e("2877")),o=Object(l["a"])(r,i,s,!1,null,null,null);a["a"]=o.exports},db15:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nvbars",{attrs:{navitems:t.navitems}}),e("secondnav",{attrs:{snav:t.secnav}}),e("div",{staticClass:"depart-create db-container"},[e("div",{staticClass:"container-wrap-1"},[e("div",{staticClass:"row m0"},[t._m(0),e("div",{staticClass:"col s12 l6 m12"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.adddesignation()}}},[e("div",{staticClass:"row"},[t._m(1),e("div",{staticClass:"col s12 m7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.title,expression:"designation.title"}],staticClass:"no-line",attrs:{type:"text",required:""},domProps:{value:t.designation.title},on:{input:function(a){a.target.composing||t.$set(t.designation,"title",a.target.value)}}})])]),e("div",{staticClass:"row"},[t._m(2),e("div",{staticClass:"col s12 m7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.designation.mailAlias,expression:"designation.mailAlias"}],staticClass:"no-line",attrs:{type:"email",required:""},domProps:{value:t.designation.mailAlias},on:{input:function(a){a.target.composing||t.$set(t.designation,"mailAlias",a.target.value)}}})])]),e("div",{staticClass:"bottom-button"},[e("div",{staticClass:"col s12"},[e("button",{ref:"submit",staticClass:"waves-effect waves-light btn-small mr10 hoverable"},[t._v("Submit")]),e("router-link",{staticClass:"waves-effect waves-light red btn-small mr10 hoverable",attrs:{to:"/organization/designation"}},[t._v("Cancel")])],1)])])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fb-title"},[e("span",[t._v("Add Designation")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col s12 m3"},[e("div",{staticClass:"title"},[e("span",[t._v("Designation Name")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col s12 m3"},[e("div",{staticClass:"title"},[e("span",[t._v("Mail Alias")])])])}],n=e("d214"),r=e("fd62"),l={components:{secondnav:r["a"],nvbars:n["a"]},data:function(){return{designation:{title:"",mailAlias:""},navitems:{title:"Designation"},secnav:[{links:[{icon:"list",title:"list",link:"/organization/designation"},{icon:"add",title:"Create",link:"/organization/designation/create"}]}]}},mounted:function(){var t=document.querySelectorAll("select");M.FormSelect.init(t)},methods:{adddesignation:function(){var t=this,a=new FormData;a.append("title",this.designation.title),a.append("mail",this.designation.mailAlias),this.$axios.post(this.$apiUrl+"org/designation-add",a,{headers:{Authorization:this.$token}}).then(function(a){t.$router.push({path:"/organization/designation/edit/"+a.data.data.id})}).catch(function(a){console.log(a),t.errormsg=a.response.data.msg;var e="<ul>"+a.response.data.msg+"</ul>";M.toast({html:e,classes:"red"})})}}},o=l,c=(e("9933"),e("2877")),d=Object(c["a"])(o,i,s,!1,null,"6c8773ff",null);a["default"]=d.exports},f0ab:function(t,a,e){},fd62:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"theme-second-nav"},[e("nav",{staticClass:"white z-depth-0"},[e("div",{staticClass:"nav-wrapper"},[e("ul",{staticClass:"left nav-item-left",attrs:{id:"nav-mobile"}},t._l(t.snav[0].tabs,function(a,i){return e("li",{key:i,staticClass:"icon-less"},[e("router-link",{staticClass:"waves-effect waves-green",class:a.class,attrs:{to:"/project/"+t.id+a.link}},[t._v(" \n             "+t._s(a.title)+" \n            ")])],1)}),0),t._l(t.snav,function(a,i){return e("ul",{key:i,staticClass:"right",attrs:{id:"nav-mobile"}},[e("li",{staticClass:"black-text nav seprate"}),t._l(a.seclinks,function(a,i){return e("li",{key:i},[e("router-link",{staticClass:"waves-effect waves-green",attrs:{to:"/project/"+t.id+a.link}},[e("i",{staticClass:"material-icons"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.title))])])],1)}),e("li",{staticClass:"black-text nav seprate"}),t._l(a.links,function(a,i){return e("li",{key:"link"+i},[a.slider?e("a",{staticClass:"sidenav-trigger",attrs:{"data-target":"slide-out"}},[e("i",{staticClass:"material-icons"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.title))])]):e("router-link",{staticClass:"waves-effect waves-green",attrs:{to:a.link}},[e("i",{staticClass:"material-icons"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.title))])])],1)}),t._l(a.method,function(a,i){return e("li",{key:a.title+i},["delete"==a.methods?e("a",{staticClass:"waves-effect waves-green",on:{click:function(e){return t.deleteItem(a.link)}}},[e("i",{staticClass:"material-icons"},[t._v(t._s(a.icon))]),e("span",[t._v(t._s(a.title))])]):t._e()])})],2)})],2)])])])},s=[],n=(e("b54a"),e("ac6a"),{props:["snav"],data:function(){return{msg:"",rto:"",id:""}},mounted:function(){this.id=this.$route.params.id},methods:{deleteItem:function(t){var a=this,e=this.$route.params.id;this.snav[0].links.forEach(function(t){"list"==t.title&&(a.rto=t.link)}),this.$axios.delete(this.$apiUrl+t+e,{headers:{Authorization:this.$token}}).then(function(t){var e="Successfully deleted";M.toast({html:e,classes:"green"}),a.$router.push({path:a.rto})}).catch(function(t){a.msg=t.response.data.msg;var e="<ul>"+t.response.data.msg+"</ul>";M.toast({html:e,classes:"red"})})}}}),r=n,l=(e("c488"),e("2877")),o=Object(l["a"])(r,i,s,!1,null,"18f802cc",null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-719f4fc5.58237173.js.map
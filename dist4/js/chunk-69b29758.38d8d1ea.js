(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b29758"],{"4e15":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dpt"}},[a("nvbars",{attrs:{navitems:t.navitems}}),a("secondnav",{attrs:{snav:t.secnav}}),a("datatable",{attrs:{title:"Departments",columns:t.tableColumns1,rows:t.list},on:{"row-click":t.editDepartment}})],1)},i=[],l=a("d214"),o=a("fd62"),s=a("eb2f"),r={components:{datatable:s["a"],nvbars:l["a"],secondnav:o["a"]},data:function(){return{navitems:{title:"Designation"},secnav:[{links:[{icon:"list",title:"list",link:"/organization/employee"},{icon:"add",title:"Create",link:"/organization/employee/create"}]}],tableColumns1:[{label:"Reg Id",field:"id",numeric:!1,html:!1},{label:"First Name",field:"fname",numeric:!1,html:!1},{label:"Last Name",field:"lname",numeric:!1,html:!1},{label:"Email",field:"mail",numeric:!1,html:!1},{label:"Phone",field:"phone",html:!1},{label:"Department",field:"profile.department",numeric:!1,html:!1},{label:"Designation",field:"profile.designation",html:!1},{label:"DOB",field:"profile.dob",html:!1,type:"date",inputFormat:"YYYYMMDD",outputFormat:"MMM Do YY"},{label:"DOJ",field:"profile.doj",html:!1,type:"date",inputFormat:"YYYYMMDD",outputFormat:"MMM Do YY"}],list:[]}},mounted:function(){this.getDepartment()},methods:{getDepartment:function(){var t=this;this.$axios.get(this.$apiUrl+"org/employee",{headers:{Authorization:this.$token}}).then(function(e){t.list=e.data.data}).catch(function(e){console.log(e),t.errormsg=e.response.data.msg;var a="<ul>"+e.response.data.msg+"</ul>";M.toast({html:a,classes:"red"})})},editDepartment:function(t){this.$router.push({path:"/organization/employee/edit/"+t.id})}}},m=r,d=(a("5649"),a("2877")),c=Object(d["a"])(m,n,i,!1,null,"1cc645da",null);e["default"]=c.exports},5649:function(t,e,a){"use strict";var n=a("c30f"),i=a.n(n);i.a},c30f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-69b29758.38d8d1ea.js.map
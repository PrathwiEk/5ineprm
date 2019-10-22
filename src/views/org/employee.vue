<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav :snav="secnav"></secondnav>
      <datatable title="Departments" :columns="tableColumns1" :rows="list" v-on:row-click="editDepartment"></datatable>
  </div>
</template>

<script>
import nvbars from "../../components/dashboard/skkin.vue";
import secondnav from "../../components/department/secnav.vue";

import DataTable from "vue-materialize-datatable";
export default {
  components: { datatable: DataTable, nvbars, secondnav },

  data() {
    return {
      navitems: {
          title: "Designation"
      },
      secnav:[
        {
          links:[
            {icon: 'list', title: 'list', link: '/organization/employee'},
            {icon: 'add', title: 'Create', link: '/organization/employee/create'},
          ],
        }
      ],
      tableColumns1: [
        { label: "Reg Id", field: "id", numeric: false, html: false },
        { label: "First Name", field: "fname", numeric: false, html: false },
        { label: "Last Name", field: "lname", numeric: false, html: false },
        { label: "Email", field: "mail", numeric: false, html: false }, 
        { label: "Phone", field: "phone",  html: false },
        { label: "Department", field: "profile.department", numeric: false, html: false }, 
        { label: "Designation", field: "profile.designation",  html: false },
        { label: "DOB", field: "profile.dob",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'},
        { label: "DOJ", field: "profile.doj",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'},
        
        
      ],
      list:[],
    }
  },

  mounted(){
    this.getDepartment()
  },
  methods:{
    //   get department list
        getDepartment(){
            this.$axios.get(this.$apiUrl+'org/employee',
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.list = res.data.data;
            })
            .catch(err =>{
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
            })
        },

    // single department
        editDepartment(row){
            this.$router.push({ path:'/organization/employee/edit/'+ row.id});
        }
  }
};
</script>

<style lang="sass" scoped>
.nav-item-left
    li
        color: #333
        line-height: 50px
        height: 50px
    

    
</style>
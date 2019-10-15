<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>
      <datatable title="Departments" :columns="tableColumns1" :rows="departmentList" v-on:row-click="editDepartment"></datatable>
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

      tableColumns1: [
        { label: "Department Name", field: "des_title", numeric: false, html: false },
        { label: "Mail Alias", field: "des_mail", numeric: false, html: false },
        { label: "Created by", field: "des_created_by", numeric: false, html: false }, 
        { label: "Created On", field: "des_created_On",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'},
        { label: "Modified By", field: "des_update_by", numeric: false, html: false }, 
        { label: "Modified At", field: "des_updated_on",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'}
      ],
      departmentList:[],
    }
  },

  mounted(){
      {
this.getDepartment()
      }
        
  },
  methods:{
    //   get department list
        getDepartment(){
            this.$axios.get(this.$apiUrl+'org/designation',
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.departmentList = res.data.data;
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
            this.$router.push({ path:'/organization/designation/edit/'+ row.id});
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
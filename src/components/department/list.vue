<template>
  <div>
    <datatable title="Departments" :columns="tableColumns1" :rows="departmentList" v-on:row-click="editDepartment"></datatable>
  </div>
</template>

<script>
import DataTable from "vue-materialize-datatable";
export default {
  components: { datatable: DataTable },

  data() {
    return {
      tableColumns1: [
        { label: "Department Name", field: "dep_title", numeric: false, html: false },
        { label: "Mail Alias", field: "dep_mail", numeric: false, html: false },
        { label: "Created by", field: "dep_created_by", numeric: false, html: false }, 
        { label: "Created On", field: "dep_created_On",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'},
        { label: "Modified By", field: "dep_update_by", numeric: false, html: false }, 
        { label: "Modified At", field: "dep_updated_on",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'}
      ],
      departmentList:[],
    }
  },

  mounted(){
      computed:{
this.getDepartment()
      }
        
  },
  methods:{
    //   get department list
        getDepartment(){
            this.$axios.get(this.$apiUrl+'org/department',
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
            this.$router.push({ path:'/organization/department/edit?id='+ row.id+'&page=edit'});
        }
  }
};
</script>

<style lang="sass" scoped>

</style>
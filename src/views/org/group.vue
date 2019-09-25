<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>
      <datatable title="Departments" :columns="tableColumns1" :rows="lists" v-on:row-click="editDepartment"></datatable>
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
          title: "Group"
      },

      tableColumns1: [
        { label: "Group Name", field: "title", numeric: false, html: false },
        { label: "Mail Alias", field: "email_id", numeric: false, html: false },
        { label: "Created by", field: "created_by", numeric: false, html: false }, 
        { label: "Created On", field: "created_on",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'},
        { label: "Modified By", field: "update_by", numeric: false, html: false }, 
        { label: "Modified At", field: "update_on",  html: false , type: 'date', inputFormat: 'YYYYMMDD', outputFormat: 'MMM Do YY'}
      ],
      lists:[],
    }
  },

  mounted(){
    this.getDepartment();
  },
  methods:{
    //   get department list
        getDepartment(){
            this.$axios.get(this.$apiUrl+'org/group',
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.lists = res.data.data;
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
            this.$router.push({ path:'/organization/group/edit/'+ row.id});
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
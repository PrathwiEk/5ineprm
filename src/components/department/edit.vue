<template>
    <div class="depart-create detail">
        <div class="container-wrap-1">
            <div class="row m0">
                <div  class="fb-title"><span >Edit Department</span></div>  
                <form @submit.prevent='addDepartment()'>
                    <div class="col s12 l6 m12">
                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Department Name</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" required v-model="department.dep_title" class="no-line">
                                </div>
                        </div>
                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Mail Alias</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="email" required v-model="department.dep_mail" class="no-line">
                                </div>
                        </div>

                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Department Lead</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <Multiselect class="line-slect" placeholder="Select Department Leader"  required v-model="department.dep_leader" track-by="name" label="name" :custom-label="fullName"  :options="emps"></Multiselect>
                            </div>
                        </div>

                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Parent Department</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <Multiselect class="line-slect" placeholder="Select Parent Department"  required v-model="selectedDepartment" track-by="dep_title" label="dep_title"   :options="departments"></Multiselect>
                            </div>
                        </div>
                    </div>  
                    <div class="col s12 l6 m12">
                        
                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Created by</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="department.dep_created_by" class="no-line">
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Created On</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text"  readonly v-model="department.dep_created_On" class="no-line">
                                </div>
                            </div>

                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Modified By</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="department.dep_update_by" class="no-line">
                                </div>
                            </div>

                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Modified At</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="department.dep_updated_on" class="no-line">
                                </div>
                            </div>
                    </div>  
                    <div class="bottom-button">
                        <div class="col s12  ">
                            <button class="waves-effect waves-light btn-small mr10 hoverable"  ref="submit">update</button>
                            <button class="waves-effect waves-light red btn-small mr10 hoverable">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
                  
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    components:{Multiselect},
    data(){
       return{
            department:[],
            emps:[],
            departments:[],
            selectedDepartment:'',
            slectedEmp: [],
       } 
    },
    mounted(){
      
        this.getdepartment();
        this.getEmployee();
        this.getDepartments();
        
    },
    methods:{
        
        addDepartment(){
            const formData = new FormData();
            formData.append('title', this.department.dep_title);
            formData.append('mail', this.department.dep_mail);
            formData.append('leader', this.department.dep_leader.uqid);
            formData.append('parent', this.selectedDepartment.id);
            this.$axios.post(this.$apiUrl+'org/department-update/'+this.$route.query.id,
                formData,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                    var toastHTML = '<span>Succefully updated</span>';
                    M.toast({html: toastHTML, classes: 'green'});
                    this.$router.push({ path:'/organization/department/edit?id='+ res.data.id.id});
            })
            .catch(err =>{
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
            })
        },


        // get single depatment
        getdepartment(){
            var id = this.$route.query.id;

            this.$axios.get(this.$apiUrl+'org/department/'+id,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.department = res.data.data;
            })
            .catch(err =>{
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
                this.$router.push({ path:'/organization/department'});
            })
        },

        // Get Employee
        getEmployee(){
             this.$axios.get(this.$apiUrl+'org/employee-list',  {headers: { Authorization: this.$token } })
            .then(res => {
                this.emps = res.data.data;
                this.emps.forEach(element => {
                    if(element.uqid == this.department.dep_leader){
                        this.department.dep_leader = element;
                    }
                });
            })
            .catch(err => {
                console.error(err); 
            })
        },
// 
        // Get departments
        getDepartments(){
             this.$axios.get(this.$apiUrl+'org/department',  {headers: { Authorization: this.$token } })
            .then(res => {
                
                var self = this;
                this.departments = res.data.data;
                this.departments.forEach(element => {
                    if(element.id == this.department.dep_parent){
                        this.selectedDepartment = {dep_parent: element.id, dep_title: element.dep_title }
                    }
                });
                
            })
            .catch(err => {
                console.error(err); 
            })
        },
        fullName({name, last_name}){
            return `${name} ${ last_name}`;
        }
    }

}
</script>

<style lang="sass" scoped>
.detail 
    max-height: calc(100vh - 175px)
    margin-bottom: 70px
    overflow-y: auto
    scrollbar-width: thin

    .title
        height: 60px
        line-height: 64px
        @media (max-width: 600px)
            height: 31px
            line-height: 60px

    .bottom-button
        position: fixed
        width: 100%
        bottom: 0px
        background: #f9f9f9
        min-height: 60px
        line-height: 60px
        left:0px
        white-space: nowrap
        overflow-x: auto
        scrollbar-width: thin
        box-shadow: 1px 0px 8px -5px
        
    .m0
        margin-bottom:0px

        
    
</style>
<template>
    <div class="depart-create detail">
        <div class="container-wrap-1">
            <div class="row m0">
                <div  class="fb-title"><span >Add Department</span></div>  
            
                <div class="col s12 l6 m12">
                    <form @submit.prevent='addDepartment()'>
                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Department Name</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input type="text" required v-model="department.title" class="no-line">
                            </div>
                        </div>
                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Mail Alias</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input type="email" required v-model="department.mailAlias" class="no-line">
                            </div>
                        </div>

                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Department Lead</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <Multiselect class="line-slect" placeholder="Select Department Leader"  required v-model="department.leader" track-by="name" label="name" :custom-label="fullName"  :options="emps"></Multiselect>
                            </div>
                        </div>

                        <div class="row  ">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Parent Department</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                               <Multiselect class="line-slect" placeholder="Select Parent Department"  required v-model="department.parent" track-by="dep_title" label="dep_title"   :options="departments"></Multiselect>
                            </div>
                        </div>

                        <div class="bottom-button">
                            
                            <div class="col s12  ">
                                <button class="waves-effect waves-light btn-small mr10 hoverable"  ref="submit">Submit</button>
                                <router-link to="/organization/department" class="waves-effect waves-light red btn-small mr10 hoverable">Cancel</router-link>
                            </div>
                        </div>
                    </form>
                </div>    

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
           department:{
                title: '', mailAlias: '', leader: '', parent: ''
           },
           emps:[],
           departments:[],
            
       } 
    },
    mounted(){
        this.getEmployee();
        this.getDepartment();
    },
    methods:{
        addDepartment(){
            const formData = new FormData();
            formData.append('title', this.department.title);
            formData.append('mail', this.department.mailAlias);
            formData.append('leader', this.department.leader.uqid);
            formData.append('parent', this.department.parent.id);
            this.$axios.post(this.$apiUrl+'org/department-add',
                formData,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                var toastHTML = '<span>Department Created Successfully</span>';
                M.toast({html: toastHTML, classes: 'green'});
                this.$router.push({ path:'/organization/department/edit/'+ res.data.id.id});
            })
            .catch(err =>{
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
            })
        },

        getEmployee(){
             this.$axios.get(this.$apiUrl+'org/employee-list',  {headers: { Authorization: this.$token } })
            .then(res => {
                this.emps = res.data.data;
            })
            .catch(err => {
                console.error(err); 
            })
        },
        getDepartment(){
             this.$axios.get(this.$apiUrl+'org/department',  {headers: { Authorization: this.$token } })
            .then(res => {
                this.departments = res.data.data;
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
    max-height: calc(100vh - 100px)
    margin-bottom: 70px

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
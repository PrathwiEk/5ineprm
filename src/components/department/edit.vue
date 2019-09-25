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
                                    <select  v-model="department.dep_leader" >
                                        <option value=""  >Choose your option</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                        </div>

                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Parent Department</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <select  v-model="department.dep_parent">
                                        <option value=""  >Choose your option</option>
                                        <option value="1">Option</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
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
export default {
    data(){
       return{
           department:[],
           parent:''
            
       } 
    },
    mounted(){
      
        this.getdepartment();
        this.preloaditem();
    },
    methods:{
        preloaditem(){
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        },
        addDepartment(){
            const formData = new FormData();
            formData.append('title', this.department.dep_title);
            formData.append('mail', this.department.dep_mail);
            formData.append('leader', this.department.dep_leader);
            formData.append('parent', this.department.dep_parent);
            this.$axios.post(this.$apiUrl+'org/department-update/'+this.$route.query.id,
                formData,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                    this.department = res.data.data
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
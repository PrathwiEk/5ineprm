<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>
     <div class="depart-create detail">
        <div class="container-wrap-1">
            <div class="row m0">
                <div  class="fb-title"><span >Edit Designation</span></div>  
                <form @submit.prevent='adddesignation()'>
                    <div class="col s12 l6 m12">
                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Designation Name</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" required v-model="designation.des_title" class="no-line">
                                </div>
                        </div>
                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Mail Alias</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="email" required v-model="designation.des_mail" class="no-line">
                                </div>
                        </div>
                        <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Created by</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="designation.des_created_by" class="no-line">
                                </div>
                            </div>
                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Created On</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text"  readonly v-model="designation.des_created_On" class="no-line">
                                </div>
                            </div>
                    </div>  
                    <div class="col s12 l6 m12">
                        
                            

                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Modified By</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="designation.des_update_by" class="no-line">
                                </div>
                            </div>

                            <div class="row  ">
                                <div class="col s12 m3">
                                    <div class="title">
                                        <span>Modified At</span>
                                    </div>
                                </div>
                                <div class="col s12 m7">
                                    <input type="text" readonly  v-model="designation.des_updated_on" class="no-line">
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

  </div>
</template>

<script>
import nvbars from "../../components/dashboard/skkin.vue";
import secondnav from "../../components/department/secnav.vue";

export default {
  components: {secondnav,  nvbars },
    data(){
       return{
           designation:[],
           parent:'',
            navitems: {
                title: "Designation"
            },
       }
       
    },
    mounted(){
      
        this.getdesignation();
        this.preloaditem();
        console.log(this.$route.params.id);
        
    },
    methods:{
        preloaditem(){
            var elems = document.querySelectorAll('select');
           M.FormSelect.init(elems);
        },
        adddesignation(){
            const formData = new FormData();
            formData.append('title', this.designation.des_title);
            formData.append('mail', this.designation.des_mail);
            this.$axios.post(this.$apiUrl+'org/designation-update/'+ this.$route.params.id,
                formData,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                    this.designation = res.data.data
                    this.$router.push({ path:'/organization/designation/edit?id='+ res.data.id.id});
            })
            .catch(err =>{
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
            })
        },


        // get single depatment
        getdesignation(){
            var id =  this.$route.params.id;

            this.$axios.get(this.$apiUrl+'org/designation/'+id,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.designation = res.data.data;
            })
            .catch(err =>{
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
                this.$router.push({ path:'/organization/designation'});
            })
        }
    }

}
</script>



<style lang="sass" scoped>
.nav-item-left
    li
        color: #333
        line-height: 50px
        height: 50px

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
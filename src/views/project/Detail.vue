<template>
    <div>
        <Skin :navitems="navitems"></Skin>
        <secondnav :snav="secnav"></secondnav>
        <div class="db-container detail">
            <div class="container-wrap-1">
                <div class="row m0">
                    <div  class="fb-title"><span >Primary Information</span></div>
                    <!-- row 1 -->
                    <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Project Name </span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input type="text" v-model="project.title" class="no-line">
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Project Status</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input type="text" v-model="project.status" class="no-line">
                            </div>
                        </div>
                    </div>

                    <!-- row 2 -->
                    <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Group</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input  v-model="project.group_name" type="text" class="no-line">
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Owner</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input v-model="project.owner" type="text" class="no-line">
                            </div>
                        </div>
                    </div>
                    
                    <!-- row 3 -->
                     <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>Start Date</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input v-model="project.start_date" value="" type="text" class="no-line datepicker">
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="row m0">
                            <div class="col s12 m3">
                                <div class="title">
                                    <span>End Date</span>
                                </div>
                            </div>
                            <div class="col s12 m7">
                                <input v-model="project.end_date"  type="text" class="no-line datepicker">
                            </div>
                        </div>
                    </div>

 
        
                    <div class="clearfix"></div>
                    <div  class="fb-title "><span >Description</span></div>

                    <div class="col s12 ">
                        <div class="row ">
                            <div class="no-border">
                                <textarea name="" rows="5" id=""  v-model="project.over_view"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="clearfix"></div>
                    <div  class="fb-title mb10"><span >Users</span></div>
                    <div class="col s12 ">
                        <div class="row mb0">
                            <div class="col s12 m4 l3" v-bind:key="user.id" v-for="user in project.user">
                                <div class="userbox">
                                    <div class="image-box">
                                        <img :src="user.profile_pic" class=" responsive-img" alt="">
                                    </div>
                                    <div class="u-detail">
                                        <div class="ud-name truncate" v-if="user.name != ''">{{user.name}}</div>
                                        <div class="ud-name truncate" v-else>{{user.email}}</div>
                                        <div class="ud-pos truncates">{{user.role}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col s12 m4 l3" >
                                <div class="lh95">
                                    <a class="btn-floating btn-large  waves-effect waves-light "><i class="material-icons">add</i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom-button">
                        <div class="col s12  ">
                            <button class="waves-effect waves-light btn-small mr10 hoverable">update</button>
                            <a href="/projects" class="waves-effect waves-light red btn-small mr10 hoverable router-link-active">Cancel</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import skkin from "../../components/dashboard/skkin.vue";
import secondnav from "../../components/department/secnav.vue";


export default {
    components: { Skin: skkin, secondnav},
    data(){
        return{
        navitems: {
            title: "",
            lt_link: [
            {
                path: "/projects",
                icon: "keyboard_backspace",
                title: "back"
            }
            ]
        },
        project:{},
        secnav:[
          {
            links:[
              {icon: 'list', title: 'list', link: '/projects'},
              {icon: 'add', title: 'Create', link: '/project-create'},
            ],
            seclinks:[
                {icon: 'dashboard', title: 'Dashboard', link: '/projects'},
                {icon: 'event_available', title: 'Tasks', link: '/tasks'},
                {icon: 'list_alt', title: 'Documents', link: '/projects'},
                {icon: 'account_tree', title: 'Milstones', link: '/projects'},
                {icon: 'report_problem', title: 'Issues', link: '/projects'},
                {icon: 'supervisor_account', title: 'Users', link: '/projects'},
                {icon: 'blur_on', title: 'Credantials', link: '/projects'},
            ],
            method:[
              {icon: 'delete', title: 'delete', methods: 'delete', link:''},
              
            ],
            
          }
        ],


        }
    },

    mounted(){
        this.getDetail();
        
        // date picker
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems);
        
    },

    methods:{
        getDetail(){
            var id =  this.$route.params.id;
            this.$axios.get(this.$apiUrl+'projects-detail/'+id,
                {headers: { Authorization: this.$token } }
                )
                .then(res => {
                    this.project = res.data.data['0']
                   this.navitems.title = this.project.title
                    
                })
                .catch(error => {
                    if (error.response) {
                        var toastHTML = '<ul>' + error.response.data.error+ '</ul>';
                        M.toast({html: toastHTML, classes: 'red'});
                    }
                })
            
        }
    }

}
</script>

<style scoped>
/* detail */
.detail .title { height: 54px; line-height: 54px; }
.detail .title span{position: relative; font-weight: 600; color: #666;}
.no-border textarea{border: 1px solid transparent; line-height: 25px; height: auto !important;}
.no-border textarea:focus{border: 1px solid #9e9e9e}
.userbox{position: relative; overflow: hidden; margin: 15px 0;}
.userbox .image-box{width: 65px; height: 65px; border-radius: 50%; overflow: hidden; float: left; background: #f1f1f1}
.userbox  .u-detail {float: left; margin-left: 10px; line-height: 27px;}
.userbox  .u-detail .ud-name{font-size: 17px}
.userbox  .u-detail .ud-pos{color: #2962ff}
.lh95{ line-height: 95px;}
.db-container{background-color: white}
.detail .bottom-button {
    position: fixed;
    width: 100%;
    bottom: 0px;
    background: #f9f9f9;
    min-height: 60px;
    line-height: 60px;
    left: 0px;
    white-space: nowrap;
    overflow-x: auto;
    scrollbar-width: thin;
    -webkit-box-shadow: 1px 0px 8px -5px;
    box-shadow: 1px 0px 8px -5px;
}
</style>
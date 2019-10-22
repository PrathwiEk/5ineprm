<template>
  <div>
    <mainnav :navitems="navitems"></mainnav>
    <snav :snav="secnav"></snav>
    <div class="db-container">
      <div class="container-wrap-1">
        <div class="row mb0">
          

           
        </div>
      </div>
    </div>




    <!-- add task or task list -->

    <div id="slide-out" class="sidenav addslide">
            
        <ul class="tabs row">
            <li class="tab col s3"><a href="#addtask">Add Tasks</a></li>
            <li class="tab col s3"><a href="#addtasklist">Add Task lists</a></li>
        </ul>
        <div class="divider m0"></div>
        
        <div class="tabs-form">
            <div class="row m0">
                <div class="col s12">
                    <div id="addtask">
                        
                            <form @submit.prevent="addTaskList()" >
                                <div class="formheight">
                                    <h6 class="col clearfix">New Task</h6><div class="clearfix"></div>
                                    <div class="input-field col s12">
                                        <input id="tasklist" required type="text" placeholder="Tasks" class="validate">
                                    </div>

                                    <div class=" col s12 input-field">  
                                        <Multiselect class="line-slect" placeholder="Select Task list"   v-model="tasklist" track-by="title" label="title"  :options="tasklists"></Multiselect>
                                    </div>

                                   

                                    <div class="divider "></div>

                                    

                                    <div class="col s12 m6 input-field">
                                         <Datepicker v-model="startdate" placeholder="Start Date" required></Datepicker>
                                    </div>
                                    <div class="col s12 m6 input-field">
                                         <Datepicker v-model="enddate" placeholder="End Date" required></Datepicker>
                                    </div>

                                    <div class=" col s12 m6 input-field">  
                                        <Multiselect class="line-slect" placeholder="Select User"   v-model="tasklist" track-by="title" label="title"  :options="tasklists"></Multiselect>
                                    </div>

                                    <div class=" col s12 m6 input-field">  
                                        <Multiselect class="line-slect" placeholder="Priority"   v-model="tasklist" track-by="title" label="title"  :options="tasklists"></Multiselect>
                                    </div>

                                     <div class=" col s12 ">
                                        <br>
                                        <label>Description</label>
                                        <quill-editor v-model="content" ref="myQuillEditor" > </quill-editor>
                                    </div>


                                </div>
                                <div class="footer-form-btn">
                                    <button class="waves-effect waves-light btn-small indigo accent-3 mr-10">Add</button>
                                    <a class="waves-effect waves-light btn-small red darken-3"  @click="closeSlide">Cancel</a>
                                </div>
                                
                            </form>
                        
                    </div>

                    <div id="addtasklist">
                        <form @submit.prevent="addTaskList()" >
                            <div class="formheight">
                                <h6 class="col">New Task List</h6>
                                <div class="input-field col s12 m10">
                                    <input id="tasklists" required type="text" v-model="ttasklist" class="validate">
                                    <label for="tasklists"> Task List</label>
                                </div>
                                <div class="input-field col s12 m10">    
                                    <Multiselect class="line-slect" placeholder="Select Milestone"   v-model="milstone" track-by="title" label="title"  :options="milstones"></Multiselect>    
                                </div>
                            </div>
                            <div class="footer-form-btn">
                                <button class="waves-effect waves-light btn-small indigo accent-3 mr-10">Add</button>
                                <a class="waves-effect waves-light btn-small red darken-3" @click="closeSlide">Cancel</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>


        

        
    </div> 
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Datepicker from 'vuejs-datepicker';
import mainnav from '@/components/dashboard/skkin.vue';
import snav from '@/components/department/secnav.vue';

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
// editor



export default {
  components: {
    Multiselect: Multiselect,
    Datepicker,
    mainnav,
    snav,
    quillEditor
  },
 
  data() {
    return {
        navitems: {
            title: "Tasks",
        },
        secnav:[
            {
                links:[
                    {icon: 'list', title: 'list', link: '/projects'},
                    {icon: 'add', title: 'Add Tasks', link: '', slider:true, add:true},
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
        tasklists:[{id: '1', title: 'task list 1'}, {id: '2', title: 'task list 2'},],
        tasklist:'',

        milstones:[{id: '1', title: 'task list 1'}, {id: '2', title: 'task list 2'},],
        milstone:'',
        ttasklist:'',

        content:'',
        startdate:'',
        enddate:'',
      
    };
  },
    mounted(){
            M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right' });
            M.Tabs.init(document.querySelectorAll('.tabs'));
        },
    methods: {
        addTaskList() {
            const formData = new FormData();
            formData.append("title", this.ttasklist);
            formData.append("milestone", this.milstone.id);
            formData.append("project", this.$route.params.id);
            this.$axios
                .post(this.$apiUrl + "task/tasklist-add", formData, {
                headers: { Authorization: this.$token }
            })
            .then(res => {
                M.toast({ html: 'Task list added', classes: "green" });
                this.ttasklist = '';
                this.milstone = '';
            })
            .catch(err => {
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
                M.toast({ html: toastHTML, classes: "red" });
            });
        },

        closeSlide(){
            var instance = M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right' });
            instance.close();
        }
    }
};
</script>

<style lang="sass" scoped>
.sidenav 
    width: 90%
    max-width:700px
.m0
    margin:0px
.addslide
    .tabs
        background-color:#f7f7f7
        .tab
            a
                color:#333
                text-transform: capitalize
.formheight
    height: calc(100vh - 110px)
    overflow-y: auto
    scrollbar-width: thin
    margin-bottom: 10px

.footer-form-btn
    border-top: 1px solid #e0e0e0
    background-color: #f7f7f7
    padding: 10px 10px
    margin: 0 -12px

.mr-10
    margin-right:10px

>>>.ql-editor
    min-height: 150px




</style>
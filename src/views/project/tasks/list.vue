<template>
  <div>
    <mainnav :navitems="navitems"></mainnav>
    <snav :snav="secnav"></snav>
    <div class="db-container">
      <div class="">
        <div class="row mb0">
          <div class="col s12">
              <table>
                  <thead>
                    <th width="25px"> <i class="material-icons tiny">settings_applications</i> </th>
                    <th width="25px"><i class="material-icons tiny border">keyboard_arrow_down</i></th>
                    <th width="300px">Tasks List</th>
                    <th width="250">Owner</th>
                    <th width="250">Assign To</th>
                    <th width="200px">Status</th>
                    <th width="120px">Start Date</th>
                    <th width="120px">Due Date</th>
                    <th width="100px">Duration</th>
                    <th width="120px">Priority</th>
                    <th width="120px">Completed On</th>
                  </thead>
                  <tbody class="">
                        <tr v-for="(row , i) in tasklists" :key="i">
                            <td class="v-top"><a href="#!" class="hover black-text"><i class="material-icons tiny">settings_applications</i></a></td>
                            <td class="v-top" @click="toggle(i)"><a href="#!" class="hover black-text"><i class="material-icons tiny border" >keyboard_arrow_down</i></a></td>
                            <td colspan="9">
                                <span class="tasklist-td">
                                    {{row.title}}
                                </span>
                                <transition name="fade">
                                    <table class="highlight lesspadding" v-if="opened.includes(i)">
                                        <tr v-for="(child , k) in row.child" :key="k">
                                            <td width="300px">{{child.title }}</td>
                                            <td width="250">{{child.created_by }}</td>
                                            <td width="250">{{child.assign_to }}</td>
                                            <td width="200px">{{child.status }}</td>
                                            <td width="120px">{{child.sdate }}</td>
                                            <td width="120px">{{child.edate }}</td>
                                            <td width="100px"></td>
                                            <td width="120px">{{child.priority }}</td>
                                            <td width="120px">{{child.updated_on }}</td>
                                        </tr>
                                        
                                    </table>
                                </transition>
                            </td>
                        </tr>
                         
                  </tbody>
              </table>
          </div>
           
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
                        <form @submit.prevent="addTask()" >
                            <div class="formheight">
                                <h6 class="col clearfix">New Task</h6><div class="clearfix"></div>
                                <div class="input-field col s12">
                                    <input id="tasks" required type="text" v-model="tasks" placeholder="Tasks" class="validate">
                                </div>

                                <div class=" col s12 input-field">  
                                    <Multiselect class="line-slect" placeholder="Select Task list"   v-model="tasklist" track-by="title" label="title"  :options="tasklists"></Multiselect>
                                </div>
                                <div class="divider "></div>
                                <div class="col s12 m6 input-field">
                                     <Datepicker v-model="startdate" placeholder="Start Date" ></Datepicker>
                                </div>
                                <div class="col s12 m6 input-field">
                                     <Datepicker v-model="enddate" placeholder="End Date" ></Datepicker>
                                </div>

                                <div class=" col s12 m6 input-field">  
                                    <Multiselect class="line-slect" placeholder="Select User"   v-model="employee" track-by="name" label="name" :custom-label="fullName"  :options="employees"></Multiselect>
                                </div>

                                <div class=" col s12 m6 input-field">  
                                    <Multiselect class="line-slect" placeholder="Priority"   v-model="prioritySelect" track-by="title" label="title"  :options="priority"></Multiselect>
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

        tasklists:[],
        tasklist:'',
        employees: '',
        employee: '',
        priority:[{title: 'None'},{title: 'High'}, {title: 'Medium'}, {title:'Low'}],
        prioritySelect:'',
        tasks: '',
        content:'',
        startdate:'',
        enddate:'',

        milstones:[{id: '1', title: 'task list 1'}, {id: '2', title: 'task list 2'},],
        milstone:'',
        ttasklist:'',
        
        tablerow: [
            {id: '1' , title:'A quick way to get started!in SEO and Marketing Activities on 24 Aug, 2019 '},
            {id: '2' , title:'A quick way to get started!in SEO and Marketing Activities on 24 Aug, 2019 '},
        ],
        opened: [],

        

      
    };
  },
    mounted(){
            M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right' });
            M.Tabs.init(document.querySelectorAll('.tabs'));
            this.getTaskList();
            this.getEmployee();
    },
    methods: {
        // add task list
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

        // close slide menu
        closeSlide(){
            var instance = M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right' });
            instance.close();
        },

        // toggle task list
        toggle(id) {
            const index = this.opened.indexOf(id);
            if (index > -1) {
                this.opened.splice(index, 1)
            } else {
                this.opened.push(id)
            }
        },

        // get task list
        getTaskList(){
            this.$axios.get(this.$apiUrl + 'task/get-tasklist/' + this.$route.params.id ,{
                headers: { Authorization: this.$token }
            })
            .then(res => {
                this.tasklists = res.data.data
            })
            .catch(err => {
                console.error(err); 
            })
        },

        // get employee
        getEmployee(){
            this.$axios.get(this.$apiUrl + 'org/employee-list' ,{
                headers: { Authorization: this.$token }
            })
            .then(res => {
                this.employees = res.data.data
            })
            .catch(err => {
                console.error(err); 
            })
        },
        fullName({name, last_name}){
            return `${name} ${ last_name}`;
        },

        //  add tasks
        addTask(event) {
            const formData = new FormData();
            
            formData.append("tasklist", this.tasklist.id);
            formData.append("employee", this.employee.uqid);
            formData.append("prioritySelect", this.prioritySelect.title);
            formData.append("tasks", this.tasks);
            formData.append("content", this.content);
            formData.append("startdate", this.startdate);
            formData.append("enddate", this.enddate);

            this.$axios.post(this.$apiUrl + "task/add", formData, {
                headers: { Authorization: this.$token }
            })
            .then(res => {
                M.toast({ html: 'Task added', classes: "green" });
                this.tasklist.id  = '';
                this.employee.uqid = '';
                this.prioritySelect.title = '';
                this.tasks = '';
                this.content = '';
                this.startdate = '';
                this.enddate = '';
            })
            .catch(err => {
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
                M.toast({ html: toastHTML, classes: "red" });
            });
        },

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

th
    font-weight:600 !important
.border
    border: 1px solid #222
    border-radius: 50%
.v-top
    vertical-align: top
thead
    border-bottom: 1px solid gray


table
    tr:last-child
        border-bottom: transparent

.lesspadding
    td
        padding: 10px 5px
        font-size:13px
tr 
    border-bottom: 1px solid rgba(0, 0, 0, 0.05)

.tasklist-td
    font-weight:600

.fade-enter-active 
  transition: all .5s ease

.fade-leave-active 
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.fade-enter, .fade-leave-to 
  transform: translateY(50vh)
  opacity: 0

.lesspadding 
    margin-top: 15px

.db-container
    overflow-x: auto
    width: auto !important   
    white-space: nowrap

.border:hover
    background: #333
    color: #fff


</style>


<template>
  <div>
    <mainnav :navitems="navitems"></mainnav>
    <snav :snav="secnav"></snav>
    <div class="db-container">
      <div class="">
        <div class="row mb0">
           
          <div class="col s12">
              <div class="scoll-table">
                    <table>
                    <thead>
                        <th width="25px"> <i class="material-icons tiny">settings_applications</i> </th>
                        <th width="25px"><i class="material-icons tiny border">keyboard_arrow_down</i></th>
                        <th width="400px">Tasks List</th>
                        <th width="250">Owner</th>
                        <th width="250">Assign To</th>
                        <th width="120px">Status</th>
                        <th width="120px">Start Date</th>
                        <th width="120px">Due Date</th>
                        <th width="100px">Duration</th>
                        <th width="120px">Priority</th>
                        <th width="120px">Completed On</th>
                    </thead>
                    <tbody class="" >
                            <tr v-for="(row , i) in tasklists" :key="i" class="task-list-row">
                                <td class="v-top ">
                                      <a href="#!" class="hover black-text sidenav-trigger t-btn" data-target="slide-out" @click="editTaskList(i)"><i class="material-icons tiny blue-text" >edit</i></a>
                                      <a href="#!" class="hover black-text t-btn"><i class="material-icons tiny red-text"   @click="deleteTaskList(row.id)">delete</i></a>
                                </td>
                                
                                <td class="v-top" @click="toggle(i)"><a href="#!" class="hover black-text"><i class="material-icons tiny border" >keyboard_arrow_down</i></a></td>
                                <td colspan="9" class="">
                                    <span class="tasklist-td">
                                        {{row.title}}
                                    </span>
                                    <transition name="fade">
                                        <table class="highlight lesspadding subtask" v-if="opened.includes(i)" width="100%">
                                            <tr v-for="(child , k) in row.child" :key="k" >
                                                <a @click="deleteTask(child.id)" class="task-delete-pre" > <i class="material-icons">delete</i> </a>
                                                <a  class="task-edit-pre sidenav-trigger" @click="editTask(i, k)" data-target="slide-out"> <i class="material-icons">edit</i> </a>
                                                <td width="400px" @click="openDetail(i, k)"> {{child.title }} </td>
                                                <td width="250"   @click="openDetail(i, k)">{{child.created_by }}</td>
                                                <td width="250"   @click="openDetail(i, k)">{{child.assign_to }}</td>
                                                <td width="120px" @click="openDetail(i, k)">{{child.status }}</td>
                                                <td width="120px" @click="openDetail(i, k)">{{child.sdate }}</td>
                                                <td width="120px" @click="openDetail(i, k)">{{child.edate }}</td>
                                                <td width="100px" @click="openDetail(i, k)">{{child.pending }}</td>
                                                <td width="120px" @click="openDetail(i, k)">{{child.priority }}</td>
                                                <td width="120px" @click="openDetail(i, k)">{{child.updated_on }}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="9">
                                                    <a href="#!" class="waves-effect waves-teal btn-flat blue-text hundeline sidenav-trigger" @click="addTotasklist(i)" data-target="slide-out"><i class="material-icons right">add</i> Add Task</a>
                                                </td>
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
                                    <input type="hidden" v-model="taskId">
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
                                <button class="waves-effect waves-light btn-small indigo accent-3 mr-10">Submit</button>
                                <a class="waves-effect waves-light btn-small red darken-3 sidenav-close"  >Cancel</a>
                            </div>
                        </form>
                    </div>

                    <div id="addtasklist">
                        <form @submit.prevent="addTaskList()" >
                            <div class="formheight">
                                <h6 class="col s12">Task List</h6>
                                <div class="input-field col s12 m10">
                                    <input id="tasklists" required type="text" autofocus placeholder="" v-model="ttasklist" class="validate">
                                    <input type="hidden" v-model="ttasklistId">
                                    <label for="tasklists" class="active"> Task List</label>
                                </div>
                                <div class=" col s12 m10">    
                                     <label for="" class=""> Select Milestone</label>
                                    <Multiselect class="line-slect" placeholder="Select Milestone"   v-model="milstone" track-by="title" label="title"  :options="milestinesList"></Multiselect>    
                                </div>
                            </div>
                            <div class="footer-form-btn">
                                <button class="waves-effect waves-light btn-small indigo accent-3 mr-10">Submit</button>
                                <a class="waves-effect waves-light btn-small red darken-3 sidenav-close" >Cancel</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>


        

        
    </div>
<!-- Close slide form  -->

<!-- detail popup open -->
    <!-- <div id="detail-modal" class="modal large-modal">
        <div class="modal-content">
            <div class="row m" v-if="tasklists[tid]">
                <h5 class="col s12">{{ tasklists[tid].child[tcid].title }}</h5>

                <div class="col s12 m2"><p>Parent task</p></div>
                <div class="col s12 m10"><p> {{ tasklists[tid].title }}</p></div>
                 <div class="clearfix" >  </div>
                <div class="col s12 m2"><p>Milestone</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].milestone }}</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>Owner</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].created_by }}</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>Assign To</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].assign_to }}</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>Start Date</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].sdate }}</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>End Date</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].edate }}</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>Duration</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].duration}} Days</p></div>
                 <div class="clearfix" >   </div>

                <div class="col s12 m2"><p>Reaming  Days</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].pending }} Days</p></div>
                 <div class="clearfix" >   </div>
                

                <div class="col s12 m2"><p>Priority</p></div>
                <div class="col s12 m10"><p>{{ tasklists[tid].child[tcid].priority }}</p></div>

               
                 <div class="clearfix" >   </div>

                
                <div class="col s12 m12">
                    <h6 class="black-text">Description</h6>
                    <div v-html="tasklists[tid].child[tcid].des"></div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
    </div> -->

<!-- End detail popup  -->

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
        quillEditor,
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
                        {icon: 'account_tree', title: 'Milstones', link: '/milstones'},
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
            ttasklistId: '',
            taskId : '',
            employees: '',
            employee: '',
            priority:[{title: 'None'},{title: 'High'}, {title: 'Medium'}, {title:'Low'}],
            prioritySelect:'',
            tasks: '',
            content:'',
            startdate:'',
            enddate:'',

            milstones:[{id: '1', title: 'task list 1'}, {id: '2', title: 'task list 2'},],
            milstone:{id: '', title: ''},
            ttasklist:'',
            milestinesList: '',
            
            tablerow: [
                {id: '1' , title:'A quick way to get started!in SEO and Marketing Activities on 24 Aug, 2019 '},
                {id: '2' , title:'A quick way to get started!in SEO and Marketing Activities on 24 Aug, 2019 '},
            ],
            tid : 0,      
            tcid : 0,
            opened: [],
                
        };
    },
    mounted(){
        var slider = M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right', onCloseEnd: () => {
            this.clearform();
        } });

        M.Tabs.init(document.querySelectorAll('.tabs'));

        M.Dropdown.init(document.querySelectorAll('.trigger-dropdown'), {constrainWidth:false, hover: true});

        this.getTaskList();
        this.getEmployee();
        this.GetMilestones();
    },
    
    methods: {
        
        // add task list
        addTaskList() {
            const formData = new FormData();
            formData.append("title", this.ttasklist);
            formData.append("milestone", this.milstone.id);
            formData.append("project", this.$route.params.id);
            formData.append('id', this.ttasklistId);
            this.$axios
                .post(this.$apiUrl + "task/tasklist-add", formData, {
                headers: { Authorization: this.$token }
            })
            .then(res => {
                M.toast({ html: 'Task list '+res.data.msg, classes: "green" });
                this.ttasklist = '';
                this.milstone = '';
                this.getTaskList();
            })
            .catch(err => {
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
                M.toast({ html: toastHTML, classes: "red" });
            });
        },

        // delete Task list
        // delete task
        deleteTaskList(id){
            if(confirm("Are you sure to delete this task list?")){
                
                this.$axios.delete(this.$apiUrl + "task/tasklist-delete/"+ id,  {
                    headers: { Authorization: this.$token }
                })
                .then(res => { 
                     M.toast({ html: 'Record was successfully deleted', classes: "green" });
                     this.getTaskList();
                })
                .catch(err => { 
                     M.toast({ html: 'Server error occored. Plese try again', classes: "red" });
                });
            }else{
                return false;
            }
        },

        // edit task list
        editTaskList(id){
            var self = this;
            self.ttasklist = self.tasklists[id].title;
            self.milstone.id  = self.tasklists[id].milestone;
            self.ttasklistId = self.tasklists[id].id;
            var tTab = M.Tabs.init(document.querySelectorAll('.tabs'));
            tTab[0].select('addtasklist');
            self.milstones.filter(function (mil) { 
                if(mil.id == self.tasklists[id].milestone) {
                    self.milstone.title  = mil.title;
                }
            });
            
        },
        
/******************  Other functions  *********************/
        // toggle task list
        toggle(id) {
            const index = this.opened.indexOf(id);
            if (index > -1) {
                this.opened.splice(index, 1)
            } else {
                this.opened.push(id)
            }
        },

        // claerform 
        clearform(){
            this.ttasklist = '';
            this.milstone.id = '';
            this.ttasklistId = '';
            this.taskId         = '';
            this.tasks          = '';
            this.tasklist       = '';
            this.startdate      = '';
            this.enddate        = '';
            this.employee       = '';
            this.prioritySelect = '';
            this.content        = '';
        },

        // full name
        fullName({name, last_name}){
            return `${name} ${ last_name}`;
        },

        GetMilestones(){
            this.$axios.get(this.$apiUrl + 'milestone/list/' + this.$route.params.id ,{
                headers: { Authorization: this.$token }
            })
            .then(res => {
                this.milestinesList = res.data.data
            })
            .catch(err => {
                console.error(err); 
            })
        },

/******************  tasks *********************/
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
            formData.append("id", this.taskId);

            this.$axios.post(this.$apiUrl + "task/add", formData, {
                headers: { Authorization: this.$token }
            })
            .then(res => {
                M.toast({ html: 'Task '+res.data.msg, classes: "green" });
                this.tasklist.id  = '';
                this.employee.uqid = '';
                this.tasks = '';
                this.content = '';
                this.startdate = '';
                this.enddate = '';
                this.getTaskList();
            })
            .catch(err => {
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
                M.toast({ html: toastHTML, classes: "red" });
            });
        },

        // delete task
        deleteTask(id){
            if(confirm("Are you sure to delete this task?")){
                
                this.$axios.delete(this.$apiUrl + "task/delete/"+ id,  {
                    headers: { Authorization: this.$token }
                })
                .then(res => { 
                     M.toast({ html: 'Record was successfully deleted', classes: "green" });
                     this.getTaskList();
                })
                .catch(err => { 
                    alert('not ok');
                });
            }else{
                return false;
            }
        },

        // task detail
        openDetail(id, kid){
            this.tid = id;
            this.tcid = kid;
            var elems = document.querySelectorAll('#detail-modal');
            var instances = M.Modal.init(elems);
            instances[0].open();
        },

        // edit task
        editTask(i, k){
            var tTab = M.Tabs.init(document.querySelectorAll('.tabs'));
            tTab[0].select('addtask');
            this.taskId         = this.tasklists[i].child[k].id;
            this.tasks          = this.tasklists[i].child[k].title;
            this.startdate      = this.tasklists[i].child[k].sdate;
            this.enddate        = this.tasklists[i].child[k].edate;
            this.content        = this.tasklists[i].child[k].des;
            this.employee       = {
                                name: this.tasklists[i].child[k].assign_fname,
                                last_name: this.tasklists[i].child[k].assign_lname,
                                uqid: this.tasklists[i].child[k].assigntoid,
            };
            this.prioritySelect = { 
                                title: this.tasklists[i].child[k].title 
            };
            this.tasklist      = this.tasklists[i];
          
        },

        //  add to task list
        addTotasklist(i){
            this.tasklist      = this.tasklists[i];
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
    tr
        cursor: pointer
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
    margin-bottom: -15px
    margin-top: 15px

.db-container
    overflow-x: auto
    width: auto !important   
    white-space: nowrap

.border:hover
    background: #333
    color: #fff

.subtask
    background: #f9f9f9
    tr
        position: relative
        &:before
            position: absolute
            content: ""
            width: 63px
            left: -63px
            height: 100%
            background: #f9f9f9

        &:hover .task-delete-pre
            opacity:1
            display: block

        &:hover .task-edit-pre
            opacity:1
            display: block

        .task-delete-pre
            position: absolute
            left: -25px
            color: #d90000
            opacity:0
            display: none
            cursor: pointer
            line-height: 40.5px
            &:hover
                transform: scale(1.2)
                color: red
            i
                font-size:16px
        
        .task-edit-pre
            position: absolute
            left: -50px
            color: #0d47a1
            opacity:0
            display: none
            cursor: pointer
            line-height: 40.5px
            &:hover
                transform: scale(1.2)
                color: #448aff
            i
                font-size:16px

.scoll-table
    overflow-x: auto
    scrollbar-width: thin        

table
    width: auto !important

.pb0
    padding-bottom: 0px

.large-modal
    width: 90vw
    top: 5vh !important
    height: 90vh !important
    max-height: 100%

    .modal-footer
        position: absolute
        bottom: 0

    .modal-content
        position: absolute
        width: 100%
        height: calc(100% - 56px )
        overflow-y: auto
        scrollbar-width: thin

        p
            margin: 0 0 10px 0
        .col.m2 > p
            font-weight: 600
            position: relative

            &:after
                content: ":"
                position: absolute
                right: -5px
.dropbox
    position: relative

    &:hover .dropdown-content1
        transform: scaleY(1)




.dropdown-content1
    background: #fff
    position: absolute
    z-index: 999
    box-shadow: 0px 2px 5px -2px
    min-width: 150px
    top: 23px
    transition: 0.3s
    transform: scaleY(0)

     
    li
        min-height: 29px

        a
            font-size: 14px
            color: #333
            display: block
            line-height: 11px
            padding: 9px 10px

            i
                font-size: 17px
            
            &:hover 
                background:#f2f2f2
.task-list-row
    &:hover  .t-btn
        visibility: visible
    .t-btn
        visibility: hidden
        i
            font-size: 16px
        &:hover i 
            transform: scale(1.2)
    
table
    min-width : 100%

.hundeline
    text-transform: capitalize
    text-decoration: underline
    &:hover 
        background: #f1f1f1

</style>


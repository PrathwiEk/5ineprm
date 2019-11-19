<template>
  <div>
    <mainnav :navitems="navitems"></mainnav>
    <snav :snav="secnav"></snav>
    <div class="db-container">
      <div class="">
        <div class="row mb0">
            
          <div class="col s12">
              <div class="scoll-table">
                    <table class="highlight"> 
                        <thead>
                            <tr>
                                <td style="width:75px"></td>
                                <th >Milestone</th>
                                <th style="width: 200px">Owner</th>
                                <th style="width: 150px">Start Date</th>
                                <th style="width: 150px">End Date</th>
                                <th style="width: 200px">Tasks</th>
                                <th style="width: 200px">Issues</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in milestinesList" :key="i">
                                <td class="center">
                                    <a @click="deleteMilestone(item.id)" class="task-delete-pre" > <i class="material-icons">delete</i> </a>
                                    <a  class="task-edit-pre sidenav-trigger" @click="editMilestone(i)" data-target="slide-out"> <i class="material-icons">edit</i> </a>
                                </td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.name + ' ' +  item.last_name }}</td>
                                <td>{{ item.sdate }}</td>
                                <td>{{ item.edate }}</td>
                                <td>
                                    <div class="progress">
                                        <div class="determinate" style="width: 70%"></div>
                                    </div>
                                </td>
                                <td>
                                    <div class="progress">
                                        <div class="determinate" style="width: 70%"></div>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
              </div>
              
          </div>
           
        </div>
      </div>
    </div>

    <!-- slider form -->
    <div id="slide-out" class="sidenav addslide">
        <div class="heading-a">
            <p>Add New Milestone</p>
        </div>
        <form @submit.prevent="addMilestone()">
            <div class="formheight">
                <div class="row">
                    <br>
                    <div class="row">
                        <div class="col s12 m10">
                            <div class="input-field col s12">
                                <textarea id="textarea1" class="materialize-textarea" v-model="milestone" placeholder="Milestone"></textarea>
                                <input type="hidden" v-model="id">
                            </div>

                            <div class="col s12 m6 input-field">
                                <Datepicker  placeholder="Start Date" v-model="sdate"></Datepicker>
                            </div>

                            <div class="col s12 m6 input-field">
                                <Datepicker  placeholder="End Date" v-model="edate"></Datepicker>
                            </div>

                            <div class=" col s12 m12 input-field">  
                                <Multiselect class="line-slect" placeholder="Select User"   v-model="employee" track-by="name" label="name" :custom-label="fullName"  :options="employees"></Multiselect>
                                {{employee}}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-form-btn">
                <button class="waves-effect waves-light btn-small indigo accent-3 mr-10">Submit</button>
                <a class="waves-effect waves-light btn-small red darken-3 sidenav-close" >Cancel</a>
            </div>
        </form>
    </div>

  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Datepicker from 'vuejs-datepicker';
import mainnav from '@/components/dashboard/skkin.vue';
import snav from '@/components/department/secnav.vue';

export default {
    components: {
        Multiselect: Multiselect,
        Datepicker,
        mainnav,
        snav,
    },
 
    data() {
        return {
            navitems: {
                title: "Milstones",
            },
            secnav:[
                {
                    links:[
                        {icon: 'list', title: 'list', link: '/projects'},
                        {icon: 'add', title: 'Add Milestone', link: '', slider:true, add:true},
                    ],
                    seclinks:[
                        {icon: 'dashboard', title: 'Dashboard', link: '/projects'},
                        {icon: 'event_available', title: 'Tasks', link: '/tasks'},
                        {icon: 'account_tree', title: 'Milstones', link: '/milstones'},
                        {icon: 'amp_stories', title: 'Work Board', link: '/work-board'},
                        {icon: 'report_problem', title: 'Issues', link: '/projects'},
                        {icon: 'list_alt', title: 'Documents', link: '/projects'},
                        {icon: 'blur_on', title: 'Credantials', link: '/projects'},
                        {icon: 'supervisor_account', title: 'Users', link: '/projects'},
                    ],
                    method:[
                        {icon: 'delete', title: 'delete', methods: 'delete', link:''},
                    ],
                    tabs:[
                        {title: 'Completed', link:'/milstones', class:'active'},
                        {title: 'Pending', link:'/milstones-pending', class: ''},
                    ]
                }
            ],     

            employees: '',
            employee: '',
            milestone: '',
            sdate: '',
            edate: '',
            id: '',
            milestinesList : '',
        };
    },
    mounted(){
        var slider = M.Sidenav.init(document.querySelectorAll('.addslide'), { edge: 'right', onCloseEnd: () => {
            this.clearform();
        }});

        this.getEmployee();
        this.GetMilestones();
    },
    methods: {
        /** methods */
        // claerform
        clearform(){ 
            this.employee =  '';
            this.milestone =  '';
            this.sdate = '';
            this.edate = '';
            this.id = '';

        },

        // full name
        fullName({name, last_name}){
            return `${name} ${ last_name}`;
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
        // get milestone list 

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
        // aDd Milestone
        addMilestone(){
            const formData = new FormData();
            formData.append('title', this.milestone);
            formData.append("employee", this.employee.uqid);
            formData.append("sdate", this.sdate);
            formData.append("edate", this.edate);
            formData.append("project", this.$route.params.id);
            formData.append("id", this.id);

            this.$axios.post(this.$apiUrl + "milestone/add", formData, {
                headers: { Authorization: this.$token }
            })
            .then(res => {
                M.toast({ html: 'Milestone '+res.data.msg, classes: "green" });
                this.employee =  '';
                this.milestone =  '';
                this.sdate = '';
                this.edate = '';
                this.GetMilestones()
            })
            .catch(err => {
                console.log(err);
                this.errormsg = err.response.data.msg;
                var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
                M.toast({ html: toastHTML, classes: "red" });
            });
        },

        // Delete 
        deleteMilestone(id){
            if(confirm("Are you sure to delete this Milestone?")){
                
                this.$axios.delete(this.$apiUrl + "milestone/delete/"+ id,  {
                    headers: { Authorization: this.$token }
                })
                .then(res => { 
                    M.toast({ html: 'Record was successfully deleted', classes: "green" });
                    this.GetMilestones();
                })
                .catch(err => { 
                    M.toast({ html: 'Please try again later', classes: "red" });
                });
            }else{
                return false;
            }
        },

        // edit
        editMilestone(i){
            console.log(this.milestinesList);
            
             this.employee =  {
                name: this.milestinesList[i].name,
                last_name: this.milestinesList[i].last_name,
                uqid: this.milestinesList[i].assign_to,
            };
            this.milestone =  this.milestinesList[i].title;
            this.sdate = this.milestinesList[i].sdate;
            this.edate = this.milestinesList[i].edate;
            this.id = this.milestinesList[i].id;
        } 
    }
};
</script>

<style lang="sass" scoped>
table
    tr:last-child
        border-bottom: transparent
    th
        font-weight:600 !important
    thead
        border-bottom: 1px solid gray
    tr 
        border-bottom: 1px solid rgba(0, 0, 0, 0.05)
.sidenav 
    width: 90%
    max-width:700px
    .heading-a
        background-color:#f7f7f7
        padding: 15px 15px
        border-bottom: 1px solid #e0e0e0
    p
        margin: 0
        font-weight: 600

    .formheight
        height: calc(100vh - 119px)
        overflow-y: auto
        scrollbar-width: thin
        margin-bottom: 10px

    .footer-form-btn
        border-top: 1px solid #e0e0e0
        background-color: #f7f7f7
        padding: 10px 10px
        margin: 0 0px

        button
            margin-right:10px

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
        visibility: visible

    &:hover .task-edit-pre
        opacity:1
        visibility: visible

    .task-delete-pre
        color: #d90000
        opacity:0
        visibility: hidden
        cursor: pointer
        line-height: 40.5px
        margin-right: 10px
        &:hover
            transform: scale(1.2)
            color: red
            i
                font-size:17px
        i
            font-size:16px
    
    .task-edit-pre
        color: #0d47a1
        opacity:0
        visibility: hidden
        cursor: pointer
        line-height: 40.5px
        margin-right: 10px
        
        &:hover
            transform: scale(1.2)
            color: #448aff
            i
                font-size:18px
        i
            font-size:16px
    td
        padding: 10px 5px
        font-size:13px


</style>


<template>
  <div>
    <Skin :navitems="navitems"></Skin>

    <div class="db-container">
      <div class="container-wrap-1">
        <div class="row mb0">
          <div class="form-box">
            <div class="fb-title">
              <span>Primary Information</span>
            </div>
            <form @submit.prevent="addProject()">
              <div class="row mb0">
                <div class="col s12 m12 l6">
                  <div class="row mb0">
                    <div class=" cm-field col s12">
                      <label for="pname" class="typo__label">Project Title</label>
                      <input id="pname" type="text" required v-model="project.pname" />
                    </div>

                    <div class="cm-field  col s12 m6 l6">
                      <label for="" class="typo__label black-text">Select Start Date</label>
                      <Datepicker v-model="project.startDate" ></Datepicker>
                    </div>
                    <div class="cm-field col s12 m6 l6">
                      <label for="" class="typo__label">Select End Date</label>
                      <Datepicker v-model="project.endDate" ></Datepicker>
                      <!-- {{ project.endDate }} -->
                    </div>
                    <div class="clearfix"></div>

                    <!-- group -->
                    <div class="cm-field col s12 m6 l6">
                      <label class="typo__label">Group</label>
                      <multiselect
                        v-model="project.pgroup"
                        :options="groups"
                        placeholder="Select Project Group"
                        label="name"
                        track-by="id"
                      ></multiselect>

                    </div>
                    <div class="cm-field col s12 m6 l6">
                      <label class="typo__label">Owner</label>
                      <multiselect
                        v-model="project.powner"
                        :options="users"
                        :custom-label="fullName"
                        placeholder="Select Project Owner"
                        label="name"
                        track-by="id"
                      ></multiselect>
                      
                    </div>
                    <div class="clearfix"></div>
                  </div>

                  <div class="row mb0">
                    <!-- <div class="fb-title">
                                    <span>Users Information</span>
                                </div> -->
                    <div class="col m12 l12 cm-field">
                      <label class="typo__label">Select Users</label>
                      <multiselect
                        v-model="user"
                        tag-placeholder="Add new user"
                        placeholder="Add users"
                        label="name"
                        track-by="id"
                        :options="users"
                        :custom-label="fullName"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                        @input="AddUserList"
                      ></multiselect>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col m12 l12 cm-field">
                      <label>
                        <input name="group1" class="with-gap" v-model="project.paccess" value="1" checked  type="radio"   />
                        <span>Private</span>
                        <p
                          class="helper-text-radio block mb0 m0"
                        >Only project users can view and access this project.</p>
                      </label>
                      <label>
                        <input name="group1" class="with-gap" v-model="project.paccess" value="2" type="radio"   />
                        <span>Public</span>
                        <p
                          class="helper-text-radio block mb0 m0"
                        >Portal users can only view, follow, and comment whereas, project users will have complete access.</p>
                      </label>
                    </div>
                  </div>
                  <div class="bottom-button">
                    <button class="btn waves-effect waves-light mr10" type="submit" name="action">
                      Add
                      <i class="material-icons right">add</i>
                    </button>
                    <a href="projects"  class="btn waves-effect waves-light red" type="submit" name="action">
                      Cancel
                      <i class="material-icons right">close</i>
                    </a>
                  </div>
                </div>
                <div class="col s12  m12 l6 cm-field">
                  <label   class="typo__label">Description</label>
                  <textarea v-model="project.des" name="" id=""  rows="15"></textarea>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skkin from "../../components/dashboard/skkin.vue";
import Multiselect from "vue-multiselect";
import Datepicker from 'vuejs-datepicker';
// editor



export default {
  components: {
    Skin: skkin,
    Multiselect: Multiselect,
    Datepicker
  },
 
  data() {
    return {
      navitems: {
        title: "Create New Project",
        lt_link: [
          {
            path: "/projects",
            icon: "keyboard_backspace",
            title: ""
          }
        ]
      },

      value: { name: "Vue.js", language: "JavaScript" },
      user:'',
      project: { pname : '', startDate : '', endDate : '', pgroup  : '', powner  : '', pusers  : [], paccess : '', des : '', },
      startDate: "",
      endDate: "",
      content: '',
      ownersList:[{ id:'1', name:'shahir' }],
      users:[],
      groups:[],
      errormsg:'',
      
    };
  },
  mounted(){
      this.getEmpList();  
      this.getdgdlist();
    },
  methods: {
    addTag(name) {
      const tag = {
        name: name,
      };
      this.project.pusers.push(tag);
      this.usersList.push(tag);
    },
    

    AddUserList(){
        var self = this;
        this.project.pusers = [];
        const usrlist =  this.project.pusers;
        self.user.forEach(function(item){
          usrlist.push(item.id);     
        });
        
    },
    addProject(){
        const formData = new FormData();
        formData.append('pname', this.project.pname);
        formData.append('sdate', this.project.startDate);
        formData.append('edate', this.project.endDate);
        formData.append('group', this.project.pgroup.id);
        formData.append('owner', this.project.powner.id);
        formData.append('users', this.project.pusers.join());
        formData.append('access', this.project.paccess);
        formData.append('des', this.project.des);
        
        this.$axios.post(this.$apiUrl+'projects-add',
          formData,
          {headers: { Authorization: this.$token } }
        )
        .then(res => {
          this.$router.push({ path:'/project/'+res.data.id});
        })
        .catch(error => {
          if (error.response) {
            this.errormsg = error.response.data.error;
            var toastHTML = '<ul>' + error.response.data.error+ '</ul>';
            M.toast({html: toastHTML, classes: 'red'});
          }
        })
    },
    // fetch designation, department, group
    getdgdlist(){
      var self = this;
      this.$axios.get(this.$apiUrl + "org/list-all", {
          headers: { Authorization: this.$token }
        })
      .then(function (response) {
        self.groups = response.data.data.group;
      })
    },

    getEmpList(){
        this.$axios.get(this.$apiUrl+'org/group-employees',
            {headers: { Authorization: this.$token } }
        )
        .then(res => {
            this.users = res.data.data;
            console.log(res);
            
        })
        .catch(err =>{
            console.log(err);
            this.errormsg = err.response.data.msg;
            var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
            M.toast({html: toastHTML, classes: 'red'});
        })
    },
    fullName({fname, lname}){
      return `${fname} ${ lname}`;
    }

  }
};
</script>

<style scoped>

>>>.ql-editor{min-height: 200px}
.vdp-datepicker::after { bottom: 12px; }
.bottom-button {
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
    border-top: 1px solid #e3e3e3;
    padding-left: 20px;
}
</style>
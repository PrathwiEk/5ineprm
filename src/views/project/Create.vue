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
                    <div class="input-field cm-field col s12">
                      <input id="pname" type="text" required v-model="project.pname" />
                      <label for="pname">Project Title</label>
                    </div>

                    <div class="cm-field input-field col s12 m6 l6">
                      <label for="sdate" class="typo__label">Select Start Date</label>
                      <input type="text" placeholder="DD MM YYYY"  v-model="project.startDate" value="" class="datepicker">
                    </div>
                    <div class="cm-field col s12 m6 l6">
                      <label for="sdate" class="typo__label">Select End Date</label>
                      <input type="text" placeholder="DD MM YYYY"  v-model="project.endDate" class="datepicker">
                      <!-- {{ project.endDate }} -->
                    </div>
                    <div class="clearfix"></div>

                    <!-- group -->
                    <div class="cm-field col s12 m6 l6">
                      <label class="typo__label">Group</label>
                      <multiselect
                        v-model="project.pgroup"
                        :options="group"
                        placeholder="Select Project Group"
                        label="name"
                        track-by="id"
                      ></multiselect>

                    </div>
                    <div class="cm-field col s12 m6 l6">
                      <label class="typo__label">Owner</label>
                      <multiselect
                        v-model="project.powner"
                        :options="ownersList"
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
                        :options="usersList"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                        @input="AddUserList"
                      ></multiselect>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col m12 l12 cm-field">
                      <label>
                        <input name="group1" class="with-gap" v-model="project.paccess" value="1" type="radio"   />
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
                  <div class="cm-field col s12">
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
                <div class="col s12 input-field m12 l6 cm-field">
                  <label  class="">Description</label>
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

// editor



export default {
  components: {
    Skin: skkin,
    Multiselect: Multiselect,
    
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
      usersList:[{ id:'2', name:'Rishabh'}, {id:'3', name:'Prathwi' }],
      group:[{ id:'1', name:'development' }, {id:'2', name:'digital marketing'}],
      errormsg:'',
      
    };
  },
mounted(){
        // date picker
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems);
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
        self = this;
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
          this.$router.push({ path:'/project-detail/'+res.data.id+'?prid='+res.data.id });
        })
        .catch(error => {
          if (error.response) {
            this.errormsg = error.response.data.error;
            var toastHTML = '<ul>' + error.response.data.error+ '</ul>';
            M.toast({html: toastHTML, classes: 'red'});
          }
        })
    }

  }
};
</script>

<style scoped>

>>>.ql-editor{min-height: 200px}
</style>
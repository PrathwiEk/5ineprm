<template>
  <div>
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav :snav="secnav"></secondnav>

    <div class="depart-create db-container">
      <div class="container-wrap-1">
        <div class="row">
          <div class="fb-title">
            <span>Edit Group</span>
          </div>

            <form @submit.prevent="addgroup()">
              <div class="col s12 l6 m12">
                  <div class="row m0">
                    <div class="col s12 m3 cm-field">
                      <div class="title">
                        <span>Group Name</span>
                      </div>
                    </div>
                    <div class="col s12 m8 cm-field">
                      <input type="text" required v-model="group.title"  />
                    </div>
                  </div>
                  <div class="row m0">
                    <div class="col s12 m3 cm-field">
                      <div class="title">
                        <span>Mail Alias</span>
                      </div>
                    </div>
                    <div class="col s12 m8 cm-field">
                      <input type="email"  v-model="group.email_id" />
                    </div>
                  </div>

                  <div class="row m0">
                    <div class="col s12 m3 l3">
                      <div class="title">
                        <span>Description</span>
                      </div>
                    </div>
                    <div class="col s12 m8 l8 cm-field">
                      <textarea rows="5"  v-model="group.des" class=""></textarea>
                    </div>
                  </div>
              </div>

              <div class="col s12 l6 m12 ">
                  <div class="subheading">
                    Add users
                  </div>
                  <div class="row m0 usersection" v-for="input in inputs" :key="input.id">
                    <div class="col s12 m6">
                      <Multiselect :for="input.id" required v-model="input.name" track-by="name" label="name" :custom-label="fullName" :options="users"></Multiselect>
                    </div>
                    <div class="col s10 m5">
                      <Multiselect :id="input.id" required v-model="input.role" track-by="name" label="name"  :options="roles"></Multiselect>
                    </div>
                    <div class="col s2 m1"></div>
                  </div>

                    <div class="row m0 pt10">
                        <a href="#!" @click="addUsercolumn" class="waves-effect waves-lightern  btn-flat blue-grey lighten-5"> <i class="material-icons left tiny">add</i> Add New User</a>
                    </div>
              </div>

                  <div class="bottom-button">
                    <div class="col s12">
                      <button class="waves-effect waves-light btn-small mr10 hoverable" ref="submit" >Submit</button>
                      <router-link to="/organization/group" class="waves-effect waves-light red btn-small mr10 hoverable">Cancel</router-link>
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
import Multiselect from 'vue-multiselect'

export default {
  components: { secondnav, nvbars, Multiselect },
  data() {
    return {
      group: { },
       navitems: {
                title: "Edit Group"
        },
        role:'',
        user: [{ name: 'ghng', }, { name: 'ghng', }, { name: 'ghng', } ],
        users:[],
        roles:[{ name:'admin'}, {name:'user' }],
        counter:0,
        inputs: [],
        secnav:[
          {
            links:[
              {icon: 'list', title: 'list', link: '/organization/group'},
              {icon: 'add', title: 'Create', link: '/organization/group/create'},
            ],
            method:[
              {icon: 'delete', title: 'delete', methods: 'delete', link:'org/group-delete/'},
              
            ],
          }
        ],
    };
  },
  mounted() {
    this.getGroup();
    this.getEmpList();
  },
  methods: {
    // clone
    addUsercolumn(){
      this.inputs.push({
        id: `${++this.counter}`,
      });
    },


    addgroup() {
      const formData = new FormData();
      formData.append("title", this.group.title);
      formData.append("mail", this.group.email_id);
      formData.append("des", this.group.des);
      
      for (let index = 0; index < this.inputs.length; index++) {
        formData.append('users[]', this.inputs[index].name.name);
        formData.append('role[]', this.inputs[index].role.name);
      }
      
      this.$axios
        .post(this.$apiUrl + "org/group-update/" + this.$route.params.id, formData, {
          headers: { Authorization: this.$token }
        })
        .then(res => {
          var toastHTML = "Succefully group updated";
          M.toast({ html: toastHTML, classes: "green" });
          var t = res
        })
        .catch(err => {
          console.log(err);
          this.errormsg = err.response.data.msg;
          var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
          M.toast({ html: toastHTML, classes: "red" });
        });
    },


    // get single depatment
      getGroup(){
          var id =  this.$route.params.id;

          this.$axios.get(this.$apiUrl+'org/group/'+id,
              {headers: { Authorization: this.$token } }
          )
          .then(res => {
              this.group = res.data.data;
              res.data.data.users.forEach(element => {
                this.inputs.push(element)
              });
          })
          .catch(err =>{
              this.errormsg = err.response.data.msg;
              var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
              M.toast({html: toastHTML, classes: 'red'});
              this.$router.push({ path:'/organization/group'});
          })
      },
    
    // get employee
    // get users list
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

<style lang="sass" scoped>
.db-container 
    height: calc(100vh - 164px)

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

.subheading
    margin: 0 0 13px
    font-size: 15px
    font-weight: 600

.usersection
    padding: 10px 0
    background: #f4f4f4
    border-radius: 4px

.pt10
    padding-top:10px

        
    
</style>
<template>
  <div>
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>

    <div class="depart-create db-container">
      <div class="container-wrap-1">
        <form @submit.prevent="adddesignation()">
          <div class="row m0">
        <!-- ---------------------------------------------------- -->
        
            <div class="fb-title">
                <span>Basic info</span>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">First Name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.title" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Mail Id </div>
                  </div>
                  <div class="col s12 m7">
                    <input type="email" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Last Name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.title" class="no-line" />
                  </div>
                </div>
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Phone Number</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="email" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------------------------------------- -->
            <div class="fb-title">
                <span>Work info</span>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Department</div>
                  </div>
                  <div class="col s12 m7 ">
                     <Multiselect class="line-slect"  required v-model="department" track-by="name" label="name"  :options="departments"></Multiselect>
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Group</div>
                  </div>
                  <div class="col s12 m7">
                    <Multiselect class="line-slect"  required v-model="department" track-by="name" label="name"  :options="departments"></Multiselect>
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of Join</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line datepicker" />
                  </div>
                </div>


            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Designation</div>
                  </div>
                  <div class="col s12 m7">
                    <Multiselect class="line-slect"  required v-model="department" track-by="name" label="name"  :options="departments"></Multiselect>
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of hire</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line datepicker" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------------------------------------- -->
            <div class="fb-title">
                <span>Personal info</span>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Gender</div>
                  </div>
                  <div class="col s12 m7 ">
                     <Multiselect class="line-slect"  required v-model="department" track-by="name" label="name"  :options="departments"></Multiselect>
                  </div>
                </div>


                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of Birth</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line datepicker" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Address</div>
                  </div>
                  <div class="col s12 m7">
                    <textarea id="textarea1" class="materialize-textarea"> </textarea>
                  </div>
                </div>


            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Personal Phone</div>
                  </div>
                  <div class="col s12 m7">
                     <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Personal Email Id</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------------------------------------- -->

             <div class="fb-title">
                <span>Account info</span>
            </div>

            <div class="col s12 l6 m12">

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Bank name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Account Number</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">IFSC</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Pan Card Number</div>
                  </div>
                  <div class="col s12 m7 ">
                      <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Adhaar Number</div>
                  </div>
                  <div class="col s12 m7">
                     <input type="text" required v-model="designation.mailAlias" class="no-line" />
                  </div>
                </div>

            </div>
        <!-- ---------------------------------------------------- -->
            <div class="clearfix"></div>
            <div class="bottom-section"></div>
        <!-- ---------------------------------------------------- -->    
            <div class="bottom-button">
                <div class="col s12">
                  <button
                    class="waves-effect waves-light btn-small mr10 hoverable"
                    ref="submit"
                  >Submit</button>
                  <button class="waves-effect waves-light red btn-small mr10 hoverable">Cancel</button>
                </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import nvbars from "../../components/dashboard/skkin.vue";
import secondnav from "../../components/department/secnav.vue";
import Multiselect from 'vue-multiselect'

export default {
  components: { secondnav, nvbars, Multiselect},
  data() {
    return {
        designation: {
            title: "",
            mailAlias: "",
        },
        navitems: {
                title: "Add New Employee"
        },
        departments:[
            {name:'DM'},
            {name:'DVEP'},
        ],
    };
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);

    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker);
  },
  methods: {
    adddesignation() {
      const formData = new FormData();
      formData.append("title", this.designation.title);
      formData.append("mail", this.designation.mailAlias);
      
      this.$axios
        .post(this.$apiUrl + "org/designation-add", formData, {
          headers: { Authorization: this.$token }
        })
        .then(res => {
          this.$router.push({
            path: "/organization/designation/edit/" + res.data.data.id
          });
        })
        .catch(err => {
          console.log(err);
          this.errormsg = err.response.data.msg;
          var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
          M.toast({ html: toastHTML, classes: "red" });
        });
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

.bottom-section
    height:60px


        
    
</style>
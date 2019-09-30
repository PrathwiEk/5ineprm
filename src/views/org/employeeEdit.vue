<template>
  <div>
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>

    <div class="depart-create db-container">
      <div class="container-wrap-1">
        <form @submit.prevent="adddesignation()">
          <div class="row m0">
        <!-- ---------------------- basic---------------------------- -->
        
            <div class="fb-title">
                <span>Basic info</span>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">First Name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.fname" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Mail Id </div>
                  </div>
                  <div class="col s12 m7">
                    <input type="email" required v-model="employee.mail" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Last Name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.lname" class="no-line" />
                  </div>
                </div>
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Phone Number</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.phone" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------- work ---------------------------- -->
            <div class="fb-title">
                <span>Work info</span>
            </div>
 
            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Department</div>
                  </div>
                  <div class="col s12 m7 ">

                     <Multiselect class="line-slect" placeholder="Select Department"  required v-model="employee.profile.department" track-by="name" label="name"  :options="departments"></Multiselect>
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Group</div>
                  </div>
                  <div class="col s12 m7">
                    <Multiselect class="line-slect" placeholder="Select Group" required v-model="employee.profile.group" track-by="name" label="name"  :options="groups"></Multiselect>
                    
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of Join</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.profile.doj" class="no-line datepicker" />
                  </div>
                </div>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Designation</div>
                  </div>
                  <div class="col s12 m7">
                    <Multiselect class="line-slect" placeholder="Select Designation"  required v-model="employee.profile.designation" track-by="name" label="name"  :options="designations"></Multiselect>
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of hire</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.profile.doh"  class="no-line datepicker" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------- Personal ------------------------ -->
            <div class="fb-title">
                <span>Personal info</span>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Gender</div>
                  </div>
                  <div class="col s12 m7 ">
                     <Multiselect class="line-slect" placeholder="Select Gender"  required v-model="employee.profile.gender" track-by="name" label="name"  :options="genders"></Multiselect>
                  </div>
                </div>
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Date of Birth</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.profile.dob" class="no-line datepicker" />
                  </div>
                </div>
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Address</div>
                  </div>
                  <div class="col s12 m7">
                    <textarea id="textarea1" v-model="employee.profile.address" class="materialize-textarea"> </textarea>
                  </div>
                </div>
            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Personal Phone</div>
                  </div>
                  <div class="col s12 m7">
                     <input type="text" required v-model="employee.profile.phone" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Personal Email Id</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="email" required v-model="employee.profile.mail" class="no-line" />
                  </div>
                </div>
            </div>

            <div class="clearfix"></div>
        <!-- ---------------------- Account ------------------------- -->

             <div class="fb-title">
                <span>Account info</span>
            </div>

            <div class="col s12 l6 m12">

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Bank name</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.account.bname" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Account Number</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.account.bno" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">IFSC</div>
                  </div>
                  <div class="col s12 m7">
                    <input type="text" required v-model="employee.account.ifsc" class="no-line" />
                  </div>
                </div>

            </div>

            <div class="col s12 l6 m12">
                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Pan Card Number</div>
                  </div>
                  <div class="col s12 m7 ">
                      <input type="text" required v-model="employee.account.pan" class="no-line" />
                  </div>
                </div>

                <div class="row m0">
                  <div class="col s12 m3">
                    <div class="title">Adhaar Number</div>
                  </div>
                  <div class="col s12 m7">
                     <input type="text" required v-model="employee.account.adhaar" class="no-line" />
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
        designation: { title: "", mailAlias: "", },
        date:'',
        basic:{ fname: '', mail: '', lname: '', phone: '', },
        work:{department:'', designation:'', group:'', doh:'', doj:''},
        personal:{ gender:'', dob:'', address:'', phone:'', mail:'' },
        account:{bname:'', bno:'', ifsc:'', pan:'', adhaar:''},
        navitems: { title: "Add New Employee" },
        employee:{ profile: {}, account: { } },
        departments:'',
        groups:[],
        designations:[],
        genders:[{ name: 'Male', value:'M' }, { name: 'Female', value:'F' },{ name: 'Others', value:'O' }],
    };
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);

    var datepicker = document.querySelectorAll('.datepicker');
    var picdate = M.Datepicker.init(datepicker);

    this.getdgdlist();
    this.getEmployee();
    
  },
  methods: {
   
    // fetch designation, department, group
    getdgdlist(){
      var self = this;
      this.$axios.get(this.$apiUrl + "org/list-all", {
          headers: { Authorization: this.$token }
        })
      .then(function (response) {
        self.departments = response.data.data.department;
        self.groups = response.data.data.group;
        self.designations = response.data.data.designation;
      })
    },

     // get single employee
    getEmployee(){
            var id =  this.$route.params.id;

            this.$axios.get(this.$apiUrl+'org/employee/'+id,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                this.employee = res.data.data[0];
                this.selecteditems(res.data.data[0]);
                
            })
            .catch(err =>{
                this.errormsg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
                this.$router.push({ path:'/organization/designation'});
            })
    },

    adddesignation() {
      const formData = new FormData();
      formData.append("name", this.employee.fname);
      formData.append("lname", this.employee.lname);
      formData.append("email", this.employee.mail);
      formData.append("phone", this.employee.phone);
      formData.append("usid", this.employee.uqid);
      formData.append("id", this.employee.id);

      formData.append("designation", this.employee.profile.designation.id);
      formData.append("department", this.employee.profile.department.id);
      formData.append("group", this.employee.profile.group.id);
      formData.append("doh", '03-4-2019');
      formData.append("doj", '03-4-2019');

      formData.append("gender", this.employee.profile.gender.value);
      formData.append("dob", '03-4-2019');
      formData.append("ad_phone", this.employee.profile.phone);
      formData.append("address", this.employee.profile.address);
      formData.append("ad_email", this.employee.profile.mail);

      formData.append("pan", this.employee.account.pan);
      formData.append("bacc_no", this.employee.account.bno);
      formData.append("bname", this.employee.account.bname);
      formData.append("bifsc", this.employee.account.ifsc);
      formData.append("adhar", this.employee.account.adhaar);
     
      
      this.$axios
        .post(this.$apiUrl + "org/employee-update/" + this.$route.params.id, formData, {
          headers: { Authorization: this.$token }
        })
        .then(res => {
            
            var toastHTML = '<span>'+ res.data.msg +'</span>';
            M.toast({ html: toastHTML, classes: "green" });
        })
        .catch(err => {
          this.errormsg = err.response.data.msg;
          var toastHTML = "<ul>" + err.response.data.msg + "</ul>";
          M.toast({ html: toastHTML, classes: "red" });
        });
    },

    // assign selected data
    selecteditems(data){
        var self = this;
        self.departments.forEach(element => {
            if(element.id ==  data.profile.department){
                self.employee.profile.department = {name: element.name, id: element.id}
            }
        });

        self.groups.forEach(element => {
            if(element.id ==  data.profile.group){
                self.employee.profile.group = {name: element.name, id: element.id}
            }
        });

        self.designations.forEach(element => {
            if(element.id ==  data.profile.designation){
                self.employee.profile.designation = {name: element.name, id: element.id}
            }
        });

        self.genders.forEach(element => {
            if(element.value ==  data.profile.gender){
                self.employee.profile.gender = {name: element.name, value: element.value}
            }
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
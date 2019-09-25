<template>
  <div>
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>

    <div class="depart-create db-container">
      <div class="container-wrap-1">
        <div class="row m0">
          <div class="fb-title">
            <span>Add Designation</span>
          </div>

          <div class="col s12 l6 m12">
            <form @submit.prevent="adddesignation()">
              <div class="row">
                <div class="col s12 m3">
                  <div class="title">
                    <span>Designation Name</span>
                  </div>
                </div>
                <div class="col s12 m7">
                  <input type="text" required v-model="designation.title" class="no-line" />
                </div>
              </div>
              <div class="row">
                <div class="col s12 m3">
                  <div class="title">
                    <span>Mail Alias</span>
                  </div>
                </div>
                <div class="col s12 m7">
                  <input type="email" required v-model="designation.mailAlias" class="no-line" />
                </div>
              </div>


              <div class="bottom-button">
                <div class="col s12">
                  <button
                    class="waves-effect waves-light btn-small mr10 hoverable"
                    ref="submit"
                  >Submit</button>
                  <button class="waves-effect waves-light red btn-small mr10 hoverable">Cancel</button>
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
import nvbars from "../../components/dashboard/skkin.vue";
import secondnav from "../../components/department/secnav.vue";

export default {
  components: { secondnav, nvbars },
  data() {
    return {
      designation: {
        title: "",
        mailAlias: "",
      },
       navitems: {
                title: "Designation"
        },
    };
  },
  mounted() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
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

        
    
</style>
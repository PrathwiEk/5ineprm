<template>
  <div class="home">
    
    <!-- registration form -->
    <div class="container">
        <div class="row">
            <div class="col s12  l10  push-l1">
                <div class="fbox">
                    <div class="form-container z-depth-1">
                        <div class="row">
                            <div class="col m6 s12">
                                <div class="left-box center-align">
                                    <span class="circle-di"></span>
                                    <p class="l-heding">Project Managment Tool</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius maxime perspiciatis eligendi hic iure minus, sunt earum inventore adipisci. </p>
                                </div>
                            </div>
                            <div class="col m6 s12">
                                <div class="right-box">
                                    <div class="login-title center-align">
                                        <p class="center-align">Sign Up</p>
                                    </div>
                                    <form @submit.prevent="regOrg()">
                                        <div class="reg-form">
                                        <div class="input-field ">
                                            <input id="cname" type="text" required  v-model="orgdata" class="validate">
                                            <label for="cname">Company name <span class="red-text">*</span></label>
                                        </div>
                                        <div class="input-field ">
                                            <input id="email" type="email" required v-model="email" class="validate">
                                            <label for="email">Email <span class="red-text">*</span></label>
                                        </div>
                                        <div class="input-field ">
                                            <input id="psw" pattern=".{8,}"   required title=" minimum 8 characters required" type="password"  v-model="psw" class="validate">
                                            <label for="psw">Password <span class="red-text">*</span></label>
                                        </div>
                                        <div class="input-field ">
                                            <input id="cpsw" type="password" required  v-model="pswcf" class="validate">
                                            <label for="cpsw">Confirm Password <span class="red-text">*</span></label>
                                            <span class="helper-text red-text">{{pswcfError}}</span>
                                        </div>

                                        <button class="btn r-btn waves-effect waves-light" type="submit">Register</button>
                                        <div class="center-align pt5 have-account">
                                            <router-link to="/signin">I have an account!</router-link>
                                        </div>
                                        
                                    </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    <!-- end registration form -->

    <!-- end registration form -->
  
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'register',
  data(){
      return{
            orgdata : '', email : '', psw : '', pswcf : '',pswcfError : '', valiDationError : ''
      }
  },

    methods:{
        regOrg(){
            if(this.psw != this.pswcf){
                this.pswcfError = 'Password not match'
            }else{
                this.pswcfError = '';
                const formData = new FormData();
                formData.append('orgName', this.orgdata);
                formData.append('email', this.email);
                formData.append('password', this.psw);
                formData.append('passconf', this.pswcf);
                this.$axios.post(this.$apiUrl+'signup',
                    formData
                )
                .then(res => {
                        if(res.data.status == 'true'){
                            var toastHTML =  res.data.msg;
                            M.toast({html: toastHTML, classes: 'green', displayLength: 10000});
                        }
                    })
                .catch(error => {
                    if (error.response) {
                        // console.log(error.response.data);
                        var toastHTML = '<ul>' + error.response.data.error+ '</ul>';
                        M.toast({html: toastHTML, classes: 'red'});
        
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
.home{ width:100%; min-height:100vh; background: #f3f3f3; }
.form-container { background: #fff; border-radius: 10px; overflow: hidden; position: relative; }
.fbox{ display: flex; align-items: center; vertical-align: middle; min-height: 100vh; }
.form-container::before { content: ""; width: 50%; height: 100%; background: #2962ff; position: absolute; z-index: 0; }
.left-box { position: relative; padding:100px  45px; color: #fff; font-size: 14px; }
.l-heding{ font-size:24px; font-weight: 600 }
.right-box { padding: 30px 30px; position: relative; z-index: 2; }
.login-title p{ margin-top: 0px; font-size:20px; font-weight: 600 }
.btn.r-btn { width: 100%; border-radius: 20px; }
.circle-di{ display: block; position: absolute; width:150px; height:150px; border:20px solid #fff; border-radius: 50%; z-index: 0; right: -75px; bottom:-25px }
.have-account a:hover{ color:#333 }
.pt5{ padding-top:15px }
.row{margin: 0px}
.login-title.center-align { position: relative; }
.login-title.center-align:after{position: absolute; width: 50px; height: 3px; background-color: #2962ff; content: ''; margin: auto; left: 0; right: 0; bottom: -11px; border-radius: 18px; }
@media(max-width:600px){
    
.left-box{ position: relative; padding:20px; background: #2962ff; ; font-size: 14px; }
.circle-di{display: none}
.form-container::before { background: transparent; }
.l-heding { margin: 0; }
.container{margin:auto;width:100%}
.form-container { border-radius: 0px;}
.home .col{padding: 0px}
.right-box{ padding: 30px 35px; position: relative; z-index: 2; max-width: 400px; margin: auto; }
.fbox{ display: block; } 
.z-depth-1 { box-shadow: none !important; }
.home{background: #fff}


}

</style>


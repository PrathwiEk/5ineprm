<template>
  <div class="home">
    
    <!-- registration form -->
    <div class="container">
        <div class="row">
            <div class="col s12  l10  push-l1">
                <div class="fbox">
                    <div class="form-container z-depth-1">
                        <div class="row">
                            <div class="col m6 s12 push-m6">
                                <div class="left-box center-align">
                                    <span class="circle-di"></span>
                                    <p class="l-heding">Project Managment Tool</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius maxime perspiciatis eligendi hic iure minus, sunt earum inventore adipisci. </p>
                                </div>
                            </div>
                            <div class="col m6 s12 pull-m6">
                                <div class="right-box">
                                    <div class="login-title center-align">
                                        <p class="center-align">Reset Password</p>
                                    </div>
                                    <div class="reg-form">
                                        <div class="input-field ">
                                            <input id="email" type="email" class="validate">
                                            <label for="email">Email id</label>
                                        </div>
                                        <div class="input-field ">
                                            <input id="npsw" type="password" class="validate">
                                            <label for="npsw">New Password</label>
                                        </div>
                                         <div class="input-field ">
                                            <input id="cpsw" type="text" class="validate">
                                            <label for="cpsw">Confirm New Password</label>
                                        </div>
                                        
                                        
                                        <a class="btn r-btn waves-effect waves-light">Reset Password</a>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
    <!-- end registration form -->
    <modal name="hello-world" :delay="100" :height="250" :width="450"  :adaptive="true" >
        <div class="right-box">
            <div class="login-title center-align">
                <p class="center-align">Forgot Password</p>
            </div>
            <div class="reg-form">
                <div class="input-field ">
                    <input id="fpemial" type="email" class="validate">
                    <label for="fpemial">Enter email id</label>
                </div>
                
                
                <a class="btn r-btn waves-effect waves-light" @click="hide()">Submit</a>
                
                
            </div>
        </div>
    </modal>
  </div>
</template>

<script>
export default {
    name: 'login',
    components: {
    },
    methods: {
        show () {
            this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    }
}
</script>

<style scoped>
.home{ width:100%; min-height:100vh; background: #f3f3f3; }
.form-container { background: #fff; border-radius: 10px; overflow: hidden; position: relative; }
.fbox{ display: flex; align-items: center; vertical-align: middle; min-height: 100vh; }
.form-container::before { content: ""; width: 50%; height: 100%; background: #2962ff; position: absolute; z-index: 0; right:0px}
.left-box { position: relative; padding:100px  45px; color: #fff; font-size: 14px; }
.l-heding{ font-size:24px; font-weight: 600 }
.right-box { padding: 30px 30px; position: relative; z-index: 2; }
.login-title p{ margin-top: 0px; font-size:20px; font-weight: 600;margin-bottom: 35px; }
.btn.r-btn { width: 100%; border-radius: 20px; margin-top: 15px}
.circle-di{ display: block; position: absolute; width:150px; height:150px; border:20px solid #fff; border-radius: 50%; z-index: 0; left: -75px; bottom:-25px }
.have-account a:hover{ color:#333 }
.have-account {overflow: hidden;}
.have-account a{cursor: pointer;}
.pt5{ padding-bottom:15px; padding-top:15px}
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


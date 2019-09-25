<template>
  <div class="home">
    
    <!-- registration form -->
    <div class="container">
        <div class="row">
            <div class="col s12  l10  push-l1">
                <div class="fbox">
                    <div class="form-container z-depth-1">
                        <div class="row">
                            <div class="col m6 s12 ">
                                <div class="left-box center-align">
                                    <span class="circle-di"></span>
                                    <p class="l-heding">Project Managment Tool</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius maxime perspiciatis eligendi hic iure minus, sunt earum inventore adipisci. </p>
                                </div>
                            </div>
                            <div class="col m6 s12 ">
                                <div class="right-box">
                                    <div class="login-title center-align">
                                        <p class="center-align">Update Details</p>
                                    </div>
                                    <form @submit.prevent="updateOrg()">
                                        <div class="reg-form">
                                            <div class="input-field ">
                                                <input id="phone" v-model="phone" type="text" required class="validate">
                                                <label for="phone">Contact Number</label>
                                            </div>
                                            <div class="slectbox">
                                                <label for="">Select Timezone</label>
                                                <multiselect required v-model="value" track-by="value" label="text"  :options="timeZomes"></multiselect>
                                               
                                            </div>


                                            
                                            <div class="slectbox">
                                                <label for="">Industry</label>
                                                <multiselect required v-model="industriesValue" track-by="ind_name" label="ind_name" :options="industries"></multiselect>
                                            </div>
                                            
                                            <button type="submit" class="btn r-btn waves-effect waves-light">Update</button>
                                            
                                            
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

  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import timezones from '../../assets/time-zone.json';
import industry from '../../assets/industry.json';


export default {
    name: 'update_reg',
    components: { Multiselect },
    data(){
        return{
            value: '',
            industriesValue: '',
            options: ['list', 'of', 'options'],
            timeZomes: timezones,
            industries: industry,
            phone: '',
        }
    },
    mounted(){
    },

    methods: {
       updateOrg(){
            var ts =new URL(window.location);
            var regid = ts.searchParams.get('upd');
            const formData = new FormData();
            formData.append('timezone', this.value.value);
            formData.append('ind', this.industriesValue.ind_name);
            formData.append('phone', this.phone);
            formData.append('rid', regid);
            this.$axios.post(this.$apiUrl+'organization-update', formData)
            .then(res => {
                if(res.data.status == 'true'){
                    this.$router.push({ path: '/signin' });
                    var toastHTML =  res.data.msg;
                    M.toast({html: toastHTML, classes: 'green', displayLength: 10000});
                    
                }
                
            })
            .catch(err => {
                if (err.response) {
                        // console.log(error.response.data);
                        var toastHTML = '<ul>' + err.response.data.error+ '</ul>';
                        M.toast({html: toastHTML, classes: 'red'});
        
                    }
            })
            
       },
    
    }
}
</script>

<style scoped>
.home{ width:100%; min-height:100vh; background: #f3f3f3; }
.form-container { background: #fff; border-radius: 10px; overflow: hidden; position: relative; }
.fbox{ display: flex; align-items: center; vertical-align: middle; min-height: 100vh; }
.form-container::before { content: ""; width: 50%; height: 100%; background: #2962ff; position: absolute; z-index: 0; left:0px}
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
>>>.multiselect__tags { border: transparent !important; border-bottom: 1px solid #9e9e9e !important; border-radius: 0; }
.slectbox { position: relative; margin-top: 1rem; margin-bottom: 1rem; }
.slectbox label{color :#2962ff;}


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


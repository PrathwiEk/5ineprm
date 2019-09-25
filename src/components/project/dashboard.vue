<template>
    <div id="project-dashboard">
        <div class="container-wrap-2">
            <div class="row mb0">
                <div class="col m4 s6 l3" v-for="(project , id) in projects" :key="id">
                    <div class="card z-depth-2 project-card">
                        <div class="card-body">
                            <div class="pc-tophead">
                                <div class="left">
                                    <span>5 days overdue</span>
                                </div>
                                <div class="right">
                                    <a class="btn-circle-xs waves-effect waves-blue " @click="fav = !fav" :class="{'amber-text accent-3' : fav}"><i class="material-icons tiny">star</i></a>
                                    <a class="btn-circle-xs waves-effect waves-blue "><i class="material-icons tiny">more_vert</i></a>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="pc-body">
                                <div class="row mb0">
                                    <div class="col s12">
                                        <p class="truncate project-title">{{ project.title }}</p>
                                    </div>
                                    <div class="col s4">
                                        <span class="label blue" v-if="project.status == 1">in progress</span>
                                        <span class="label red accent-4" v-if="project.status == 2">Stoped</span>
                                        <span class="label orange darken-4" v-if="project.status == 3">Waiting for Client input</span>
                                        <span class="label green" v-if="project.status == 4">Completed</span>
                                    </div>
                                    <div class="col s8">
                                        <ul class="teame-list" >
                                            <li v-for="(user, id ) in project.user" :key="id">
                                                <img v-if="user.profile_pic == ''" src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" alt="" class="circle">
                                                <img v-else :src="user.profile_pic" :alt="user.email" :title="user.name" class="circle">
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="col s12">
                                        <div class="progress-container">
                                        <span>70%</span>
                                        <span>50hr</span>
                                        <div class="progress">
                                            <div class="determinate" style="width: 70%"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pc-footer">
                                <ul>
                                    <li>
                                        <p>Milestons</p>
                                        <p>50</p>
                                    </li>
                                    <li>
                                        <p>Tasks</p>
                                        <p>250</p>
                                    </li>
                                    <li>
                                        <p>Bugs</p>
                                        <p>30</p>
                                    </li>
                                    <li>
                                        <p>Sub tasks</p>
                                        <p>20</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    
                </div>
               
            </div>
        </div>

        
    </div>
</template>

<script>


export default {
    data(){
        return{
            projects:[],
            fav:true,
        }
    },
    mounted(){
        this.getList();
    },
    methods: {
        getList(){
            // this.$axios.get(this.$apiUrl+'projects', )
            this.$axios.get(this.$apiUrl+'projects',{headers: { Authorization: this.$token } })
            .then(res => {
                console.log(res.data.data)
                this.projects = res.data.data;
            })
            .catch(err => {
                console.error(err); 
            })
            
        },

        filterdata(e){
            alert(e)
        }
    }
}
</script>

<style scoped>
.card-body{padding: 15px}
.pc-tophead .left span { color: gray; font-size: 12px; }
.project-title{font-size: 14px; font-weight: 600; margin: 0 0 10px 0;}
.label { display: inline; padding: .2em .6em .3em; font-size: 75%; font-weight: 700; line-height: 35px; color: #fff; text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: .25em; }
.teame-list li{ width: 35px; height: 35px; overflow: hidden; background: #cacaca; display: inline-block; border-radius: 50%; margin: 0 3px; }
.teame-list { overflow: auto; white-space: nowrap; scrollbar-width: none; margin:0px}
.pc-footer ul li { display: inline-block; width: calc((100% - 8px) / 4); text-align: center; margin: 0 1px}
.pc-footer ul li p {margin: 0px}
.pc-footer ul li p:first-child {color: #9d9d9d; font-size: 13px; font-weight: 600;}
.pc-footer ul li p:nth-child(2) {color: #333; font-size:13px; font-weight: 600}
.pc-footer ul{margin:0px}
.pc-tophead { overflow: hidden; margin-bottom: 5px; }
.progress { margin:  0; }
.pc-footer { border-top: 1px dashed gray; padding: 10px 0 0 0; margin-top: 10px; }
.progress-container span{color: gray; margin-right: 10px;font-size:13px;font-weight: 600}
.progress-container { padding: 15px 0 10px 0 ; }
.project-card{transition: 0.3s;cursor: pointer;}
.project-card:hover{box-shadow: 0px 0px 5px gray, 0px 6px 15px #bbb; -webkit-box-shadow: 0px 0px 5px gray, 0px 6px 15px #bbb}
</style>
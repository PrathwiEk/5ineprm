<template>
    <div>
        <mainnav :navitems="navitems"></mainnav>
        <snav :snav="secnav"></snav>

        <div class="db-container">
            <div class="board">
                <div class="row mb0 pt20">

                    <div class="col s12">
                        <!-- <div class="card board-card">
                            <div class="board-title ">
                                <span class="red darken-1">To Do (5)</span>
                            </div>
                        </div> -->

                        <div class="col s12 m4 l3">
                            <div class="board-list-box">
                                <div class="board-list-title">
                                    <span>TASK LIST</span> <span> (1)</span>
                                </div>
                                <div class="board-list-body">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4 l3">
                            <div class="board-list-box">
                                <div class="board-list-title">
                                    <span>TO DO</span> <span> (1)</span>
                                </div>
                                <div class="board-list-body">
                                    <draggable class="dragArea list-group" :list="list1" :clone="clone" :group="{ name: 'people', pull: pullFunction }" @start="start" >
                                        <div class="list-group-item z-depth-1" v-for="element in list1" :key="element.id"> 
                                            <p class="list-item-title">{{ element.name }}</p>  
                                            <p class="list-item-milestone">My mile stone one1</p>
                                            <p class="list-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, eos?</p>
                                            <div class="list-item-users">
                                                <div class="list-item-user" v-for="i in 5">
                                                    <img src="https://nichemodels.co/wp-content/uploads/2019/03/user-dummy-pic.png" alt="" class="responsive-img">
                                                </div>
                                            </div>
                                        </div>

                                    </draggable>
                                </div>
                            </div>
                            
                        </div>

                        <div class="col s12 m4 l3">
                            <div class="board-list-box">
                                <div class="board-list-title">
                                    <span>IN PROGRESS</span> <span> (1)</span>
                                </div>
                                <div class="board-list-body">
                                   <draggable class="dragArea list-group" :list="list2" group="people">
                                        <div class="list-group-item z-depth-1" v-for="element in list2" :key="element.id">
                                            <p class="list-item-title">{{ element.name }}</p>  
                                            <p class="list-item-milestone">My mile stone one1</p>
                                            <p class="list-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, eos?</p>
                                            <div class="list-item-users">
                                                <div class="list-item-user" v-for="i in 5">
                                                    <img src="https://nichemodels.co/wp-content/uploads/2019/03/user-dummy-pic.png" alt="" class="responsive-img">
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="col s12 m4 l3">
                            <div class="board-list-box">
                                <div class="board-list-title">
                                    <span>Completed</span> <span> (1)</span>
                                </div>
                                <div class="board-list-body">
                                    <draggable class="dragArea list-group" :list="list3" group="people">
                                        <div class="list-group-item z-depth-1" v-for="element in list3" :key="element.id">
                                            <p class="list-item-title">{{ element.name }}</p>  
                                            <p class="list-item-milestone">My mile stone one1</p>
                                            <p class="list-item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, eos?</p>
                                            <div class="list-item-users">
                                                <div class="list-item-user" v-for="i in 5">
                                                    <img src="https://nichemodels.co/wp-content/uploads/2019/03/user-dummy-pic.png" alt="" class="responsive-img">
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        
                        </div>


                        <rawDisplayer class="col s3" :value="list1" title="List 1" />

                        <rawDisplayer class="col s3" :value="list2" title="List 2" />

                        <rawDisplayer class="col s3" :value="list3" title="List 2" />
                      
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import mainnav from '@/components/dashboard/skkin.vue';
import snav from '@/components/department/secnav.vue';
import draggable from 'vuedraggable'
let idGlobal = 8;

export default {

    display: "Clone on Control",
    instruction: "Press Ctrl to clone element from list 1",
    order: 4,

    components: {
        mainnav,
        snav,
        draggable
        
    },
 
    data() {
        return {
            navitems: {
                title: "Work Board",
            },
            secnav:[
                {
                    links:[
                        {icon: 'list', title: 'list', link: '/projects'},
                        {icon: 'add', title: 'Add Tasks', link: '', slider:true, add:true},
                    ],
                    seclinks:[
                        {icon: 'dashboard', title: 'Dashboard', link: '/projects'},
                        {icon: 'event_available', title: 'Tasks', link: '/tasks'},
                        {icon: 'list_alt', title: 'Documents', link: '/projects'},
                        {icon: 'account_tree', title: 'Milstones', link: '/milstones'},
                        {icon: 'report_problem', title: 'Issues', link: '/projects'},
                        {icon: 'supervisor_account', title: 'Users', link: '/projects'},
                        {icon: 'blur_on', title: 'Credantials', link: '/projects'},
                    ],
                    method:[
                        {icon: 'delete', title: 'delete', methods: 'delete', link:''},
                    ],
                }
            ],

            list1: [
                { name: "Jesus", id: 1 },
                { name: "Paul", id: 2 },
                { name: "Peter", id: 3 }
            ],
            list2: [
                { name: "Luc", id: 5 },
                { name: "Thomas", id: 6 },
                { name: "John", id: 7 }
            ],

            list3: [
                { name: "Luc", id: 8 },
                { name: "Thomas", id: 9 },
                { name: "John", id: 10 }
            ],

            controlOnStart: true   

        };
    },

    methods: {
   clone({ name }) {
      return { name, id: idGlobal++ };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    }
  }
   
};
</script>



<style  scoped>
.board-list-box .board-list-title {
    font-size: 15px;
    font-weight: 600;
    border-bottom: 2px solid;
    padding-bottom: 8px;
    margin-bottom: 12px
}

.board .board-list-box:nth-child(1) .board-list-title{border-color:#f44336 }
.board .board-list-box:nth-child(2) .board-list-title{border-color:#7986cb}
.board .board-list-box:nth-child(3) .board-list-title{border-color:#ffb74d }
.board .board-list-box:nth-child(4) .board-list-title{border-color:#43a047}
.board-list-box .board-list-body .list-group-item{cursor: all-scroll;background: #fff; padding:8px; margin-bottom: 10px; border-radius:4px}
.list-item-title { margin: 0; color: #333; font-size: 15px; font-weight: 600; }
.list-item-milestone { margin: 5px 0; font-size: 14px; color: #555; }
.list-item-description { margin: 2px 0; color: #888; font-size: 13px; }
.list-item-user { display: inline-block; width: 40px; height: 40px; border-radius: 50%; overflow: hidden; }
.list-item-users { border-top: 1px solid #80808038; margin-top: 13px; padding-top: 5px; }



</style>

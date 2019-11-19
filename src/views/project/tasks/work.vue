<template>
    <div>
        <mainnav :navitems="navitems"></mainnav>
        <snav :snav="secnav"></snav>

        <div class="db-container">
            <div class="board">
                <div class="row mb0">

                    <div class="col s12 m4 l4">
                        <!-- <div class="card board-card">
                            <div class="board-title ">
                                <span class="red darken-1">To Do (5)</span>
                            </div>
                        </div> -->

                        <div class="simple-page">
                            <Container @drop="onDrop">            
                                <Draggable v-for="item in items" :key="item.id">
                                    <div class="draggable-item">
                                    {{item.data}}
                                    </div>
                                </Draggable>
                            </Container>
                        </div>
                        {{items}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

import mainnav from '@/components/dashboard/skkin.vue';
import snav from '@/components/department/secnav.vue';

import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/utils";


export default {
    components: {
        mainnav,
        snav,
        Container, 
        Draggable,
        applyDrag,
        generateItems
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

            items:[{ "id": 1, "data": "Nelco Laboratories, Inc." }, { "id": 2, "data": "Nelco Laboratories, Inc." }, { "id": 3, "data": "Taro Pharmaceuticals U.S.A., Inc." }, { "id": 4, "data": "Liddell Laboratories, Inc." }, { "id": 5, "data": "McKesson" }, { "id": 6, "data": "Cardinal Health" }, { "id": 7, "data": "Novo Nordisk" }, { "id": 8, "data": "Lake Erie Medical DBA Quality Care Products LLC" }, { "id": 9, "data": "Cardinal Health" }, { "id": 10, "data": "Rebel Distributors Corp." }]
                
        };
    },

    methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
    console.log(dropResult);
    
    }
  }
   
};
</script>




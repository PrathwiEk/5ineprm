<template>
    <div id="dashboard">
        <Skin  :navitems="navitems"></Skin>
        <div class="theme-second-nav">
            <nav class="white z-depth-0">
                <div class="nav-wrapper">
                    <ul id="nav-mobile" class="left">
                        <!-- <li ><router-link to="test"> <i class="material-icons">add</i> <span>TEST</span></router-link></li> -->
                    </ul>
                    <ul id="nav-mobile" class="right">
                        <li><router-link to='/project-create' class="waves-effect waves-green" > <i class="material-icons">add</i> <span>Create</span></router-link></li>
                        <li> <a class='dropdown-trigger' href='#' data-target='dropdown1'><i class="material-icons">filter_list</i> <span>Filter</span></a></li>
                    </ul>
                </div>
            </nav>
        </div>

        <ul id='dropdown1' class='dropdown-content navdroup' style="width:150px">
            <li v-for="(item, key) in filteItem" :key="key"><a  @click="filterdata(item.value)" > {{ item.title }}  <i class="material-icons ">{{ item.icon }}</i></a></li>
            
        </ul>

        <projectdashboard></projectdashboard>
    </div>
</template>

<script>
import skin from '../../components/dashboard/skkin.vue';
import projectsDashbaord from '../../components/project/dashboard.vue';

export default {
    components:{Skin: skin, projectdashboard : projectsDashbaord,},

    data(){
        return{
            navitems: {
                title : 'Dashboard',
            },
            filteItem:[
                {title:'Name', value:'name-asc', icon:'arrow_upward'},
                {title:'Name', value:'name-desc', icon:'arrow_downward'},
                {title:'Date', value:'date-asc', icon:'arrow_upward'},
                {title:'Date', value:'date-desc', icon:'arrow_downward'},
            ],
            
            
        }
    },
    
    // methods:{
    //     filterdata(val){
            
    //     }
    // }
}
</script>

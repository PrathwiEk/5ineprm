<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav :snav="secnav"></secondnav>
    <div class="db-container">
    <!-- edit -->
    <editing></editing>

    </div>

  </div>
</template>

<script>
import skin from "../../components/dashboard/skkin.vue";
import nav from "../../components/department/secnav.vue";
import editing from "../../components/department/edit.vue";

export default {
  components: { nvbars: skin , secondnav: nav, editing:editing },
    data() {
        return {
            navitems: {
                title: "Department"
            },
            secnav:[
              {
                links:[
                  {icon: 'list', title: 'list', link: '/organization/department'},
                  {icon: 'add', title: 'Create', link: '/organization/department/create'},
                ],
                method:[
                  {icon: 'delete', title: 'delete', methods: 'delete', link:'org/department-delete/'},
                  
                ],
              }
            ],
            
        };
    },
};
</script>

<style lang="sass" scoped>
.nav-item-left
    li
        color: #333
        line-height: 50px
        height: 50px
    

    
</style>
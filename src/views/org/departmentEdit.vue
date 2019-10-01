<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav :secnav="secnav"></secondnav>
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
              {icon: 'list', title: 'list', link: '/organization/department'},
              {icon: 'add', title: 'Create', link: '/organization/department/create'},
              {icon: 'delete', title: 'delete', method: 'delete()'},
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
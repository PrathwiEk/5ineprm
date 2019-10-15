<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>
    <div class="db-container">
    
    <!-- create -->
    <create ></create>


    </div>

  </div>
</template>

<script>
import skin from "../../components/dashboard/skkin.vue";
import create from "../../components/department/create.vue";
import nav from "../../components/department/secnav.vue";

export default {
  components: { nvbars: skin ,  create: create, secondnav: nav, },
    data() {
        return {
            navitems: {
                title: "Department"
            },
            
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
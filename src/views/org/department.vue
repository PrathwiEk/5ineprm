<template>
  <div id="dpt" >
    <nvbars :navitems="navitems"></nvbars>
    <!-- second nav -->
    <secondnav></secondnav>
    <div class="db-container">
    <!-- list -->
    <list></list>
    
    </div>

  </div>
</template>

<script>
import skin from "../../components/dashboard/skkin.vue";
import list from "../../components/department/list.vue";
import nav from "../../components/department/secnav.vue";

export default {
  components: { nvbars: skin , list: list, secondnav: nav  },
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
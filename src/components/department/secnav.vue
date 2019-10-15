<template>
  <div>
    
    <div class="theme-second-nav">
      <nav class="white z-depth-0">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left nav-item-left">
            <li></li>
          </ul>
          <ul id="nav-mobile" class="right" v-for="(nitem , index) in snav" :key="index">
            <li v-for="(item , key) in nitem.links" :key="key" > 
              <router-link :to="item.link"  class="waves-effect waves-green" > 
                <i class="material-icons">{{item.icon}}</i> 
                <span>{{item.title}}</span> 
              </router-link> 
            </li>

            <li v-for="(items , keys) in nitem.method" :key="items.title + keys" > 
              <a  @click="deleteItem(items.link)" class="waves-effect waves-green" v-if="items.methods == 'delete'"> 
                <i class="material-icons">{{items.icon}}</i> 
                <span>{{items.title}}</span> 
              </a> 
            </li>

            <!-- <li>
              <a class="dropdown-trigger" href="#" data-target="dropdown1">
                <i class="material-icons">filter_list</i>
                <span>Filter</span>
              </a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
props: ['snav'],
  data(){
    return{
      msg: '',
    }
  },

  methods:{
    deleteItem(url){
      var id =  this.$route.params.id;
          this.$axios.delete(this.$apiUrl+url+id,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                // this.msg = err.response.data.msg;
                var toastHTML = 'Department deleted succesfully';
                M.toast({html: toastHTML, classes: 'green'});
                this.$router.push({ path:'/organization/department'});  
            })
            .catch(err =>{
                this.msg = err.response.data.msg;
                var toastHTML = '<ul>' + err.response.data.msg+ '</ul>';
                M.toast({html: toastHTML, classes: 'red'});
                
                
            })
    }
  }
}
</script>
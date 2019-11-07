<template>
  <div>
    
    <div class="theme-second-nav">
      <nav class="white z-depth-0">
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left nav-item-left">
            <li v-for="(item , key) in snav[0].tabs" :key="key" class="icon-less" > 
              <router-link :to="'/project/'+id+item.link"  class="waves-effect waves-green"  :class="item.class"> 
               {{item.title}} 
              </router-link> 
            </li>
          </ul>
          <ul id="nav-mobile" class="right" v-for="(nitem , index) in snav" :key="index">
            <!-- tabs or no icons -->
            
            <li class="black-text nav seprate"></li>
            <!-- second links -->
            <li v-for="(item , key) in nitem.seclinks" :key="key" > 
              <router-link :to="'/project/'+id+item.link"  class="waves-effect waves-green" > 
                <i class="material-icons">{{item.icon}}</i> 
                <span>{{item.title}}</span> 
              </router-link> 
            </li>
            <li class="black-text nav seprate"></li>
            <!-- links -->
            <li v-for="(item , key) in nitem.links" :key="'link'+key" > 
              <router-link :to="item.link"  class="waves-effect waves-green" v-if="!item.slider"> 
                <i class="material-icons">{{item.icon}}</i> 
                <span>{{item.title}}</span> 
              </router-link> 
              
              <a v-else data-target="slide-out" class="sidenav-trigger" >
                 <i class="material-icons">{{item.icon}}</i> 
                <span>{{item.title}}</span> 
              </a>
            </li>
            
            <!-- methosd -->
            <li v-for="(items , keys) in nitem.method" :key="items.title + keys" > 
              <a  @click="deleteItem(items.link)" class="waves-effect waves-green" v-if="items.methods == 'delete'"> 
                <i class="material-icons">{{items.icon}}</i> 
                <span>{{items.title}}</span> 
              </a> 
            </li>
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
      rto : '',
      id:'',
    }
  },
  mounted(){
    // get id
    this.id = this.$route.params.id;
     
  },

  methods:{
    deleteItem(url){
      var id =  this.$route.params.id;
        this.snav[0].links.forEach(element => {
          if(element.title == 'list'){
            this.rto = element.link
          }
        });
       
          this.$axios.delete(this.$apiUrl+url+id,
                {headers: { Authorization: this.$token } }
            )
            .then(res => {
                // this.msg = err.response.data.msg;
                var toastHTML = 'Successfully deleted';
                M.toast({html: toastHTML, classes: 'green'});
                this.$router.push({ path:this.rto});  
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

<style  scoped>
.seprate{width: 1px; height: 30px; background: #2962ff; margin-top: 10px;}
.sidenav-trigger{display: block;margin: 0px}
.icon-less a {
    line-height: 47px !important;
    font-size: 13px;
    padding: 0 10px;
    border-bottom: 2px solid transparent;
}
.icon-less a.active{
  border-bottom: 2px solid #4545ff;
}

nav ul li a:not(.active).router-link-active { background-color: rgba(0, 0, 0, 0.1); }
</style>
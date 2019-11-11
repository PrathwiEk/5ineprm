<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default { 
  
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('select');
//     var instances = M.FormSelect.init(elems);
//   });

if (typeof M == "undefined") {var M = {}}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="sass" >
$class-slug: mr !default

@for $i from 1 through 10
  .mr-#{$i * 5}
      margin-right: 0px + ($i *5)

@for $i from 1 through 10
  .ml-#{$i * 5}
      margin-left: 0px + ($i *5)



</style>
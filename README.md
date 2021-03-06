# project-management


## import date picker

### links
```
https://github.com/charliekassel/vuejs-datepicker#readme
import Datepicker from 'vuejs-datepicker';
```
### import datepicker
```
import datepicker from 'vue-date-picker'

```
### text editor
```
https://github.com/surmon-china/vue-quill-editor

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  }
}
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### plugins Sections

## Mulple select 
```
npm install vue-multiselect --save

<template>
  <div>
    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  // register globally
  Vue.component('multiselect', Multiselect)

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: null,
        options: ['list', 'of', 'options']
      }
    }
  }
</script>
```
doc (https://vue-multiselect.js.org/)

## Secont nav dynamic
props:
navitems

component includ
```
import skin from '../../components/dashboard/skkin.vue';
```

arry items
```
navitems: { 
  title : 'Projects', 
  lt_link: [ 
    { path : '/test', icon : 'donut_small', title : 'add New', }, 
  ], 
  rt_link{/* Right links */} } 
```

### data table
``` 
https://microdroid.github.io/vue-materialize-datatable/ 

```

Include the component 
```
import DataTable from "vue-materialize-datatable";

{
    ...
    components: {
        ...
        "datatable": DataTable
    }
}

```

### Vue modal 
see [Model Documentation](https://github.com/euvl/vue-js-modal)


### Veu date picker
```
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  }
}

```
see [Date Picker Documentation](https://github.com/charliekassel/vuejs-datepicker)
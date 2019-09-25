import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import VModal from 'vue-js-modal'
import axios from 'axios';

Vue.use(VModal)
Vue.config.productionTip = false

// proto types
// Vue.prototype.$apiUrl = 'http://localhost/project-management/';
Vue.prototype.$apiUrl = 'http://localhost:8080/';
Vue.prototype.$axios = axios;
Vue.prototype.$token = store.state.token;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

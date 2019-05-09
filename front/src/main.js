import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Auth from './helpers/auth.js';
import Message from './helpers/message.js';
import Request from './helpers/request.js';

Vue.use( Auth );
Vue.use( Message );
Vue.use( Request );

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

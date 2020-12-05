import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import axios from './plugins/axios'
import Vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        
      },
      dark: {

      }
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

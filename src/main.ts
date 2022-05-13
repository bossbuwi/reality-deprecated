import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true
// for dev
axios.defaults.baseURL = 'http://localhost:8090/'
// for prod
// axios.defaults.baseURL = 'http://mancswcbman0278:9080/'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

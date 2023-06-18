import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAdBBxixLkzSY76RXmdCrK6UwZPsit0vTw',
    libraries: 'places'
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

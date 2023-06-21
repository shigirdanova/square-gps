import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import { locales } from '@/locales'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(VueI18n)

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.YOUR_GOOGLE_MAPS_KEY,
    libraries: 'places'
  }
})

const i18n = new VueI18n({
  locale: 'en',
  messages: locales
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

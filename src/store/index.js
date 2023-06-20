import Vue from 'vue'
import Vuex from 'vuex'

import markerModule from './marker'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    map: markerModule
  }
})

export default store

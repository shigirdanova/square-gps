import Vue from 'vue'
import Vuex from 'vuex'

import mapModule from './map'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    map: mapModule
  }
})

export default store

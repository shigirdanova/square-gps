import Vue from 'vue'
import Vuex from 'vuex'

// import main from './main';
import map from './map'

// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    map
  },
  plugins: [
    // createPersistedState(),
  ]
})

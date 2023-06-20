import { Backend } from '@/plugins/api-services/storage-service'
import router from '../router'

const markerModule = {
  namespaced: true,
  state: {
    markers: [],
    selectedMarker: null
  },
  mutations: {
    SET_SAVED_MARKERS (state, markers) {
      state.markers = markers
    },

    SAVE_MARKER (state, marker) {
      state.markers.push(marker)
    },

    SET_SELECTED_MARKER (state, index) {
      state.selectedMarker = {
        id: index,
        ...state.markers[index]
      }
    }
  },
  actions: {
    fetchMarkers ({ commit, state }, markerId = null) {
      const markers = Backend.fetchMarkers()

      commit('SET_SAVED_MARKERS', markers)

      const selectedMarkerId = markerId - 1

      if (markerId && state.markers[selectedMarkerId]) {
        commit('SET_SELECTED_MARKER', selectedMarkerId)
      }
    },

    async createMarker ({ commit, state }, marker) {
      try {
        commit('SAVE_MARKER', { position: marker })
        Backend.saveMarkers(state.markers)
      } catch (e) {
        throw Error(e)
      }
    },

    selectMarker ({ commit }, id) {
      commit('SET_SELECTED_MARKER', id)

      router.push({ name: 'location', params: { id: id + 1 } })
    }
  }
}

export default markerModule

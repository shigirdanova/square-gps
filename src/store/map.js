import { LocalStorage } from '@/api/local-storage-service'
import router from '../router'

const mapModule = {
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

    SET_selectedMarker (state, index) {
      state.selectedMarker = {
        id: index,
        ...state.markers[index]
      }
    }
  },
  actions: {
    fetchMarkers ({ commit, state }, markerId = null) {
      const markers = LocalStorage.fetchMarkers()

      commit('SET_SAVED_MARKERS', markers)

      const selectedMarkerId = markerId - 1

      if (markerId && state.markers[selectedMarkerId]) {
        commit('SET_selectedMarker', selectedMarkerId)
      }
    },

    async createMarker ({ commit, state }, marker) {
      try {
        commit('SAVE_MARKER', marker)
        LocalStorage.saveMarkers(state.markers)
      } catch (e) {
        throw Error(e)
      }
    },

    selectMarker ({ commit }, id) {
      commit('SET_selectedMarker', id)

      router.push({ name: 'location', params: { id: id + 1 } })
    }
  }
}

export default mapModule

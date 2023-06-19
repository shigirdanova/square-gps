import { LocalStorage } from '@/api/local-storage-service'

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

    DELETE_MARKER (state, index) {
      state.markers.splice(index, 1)
    },

    SET_SELECTED_MARKER (state, index) {
      state.selectedMarker = {
        id: index,
        ...state.markers[index]
      }
    }
  },
  actions: {
    fetchMarkers ({ commit, state }, initialId = null) {
      const markers = LocalStorage.fetchMarkers()

      commit('SET_SAVED_MARKERS', markers)

      const initialMarkerId = initialId - 1

      if (initialId && state.markers[initialMarkerId]) {
        commit('SET_SELECTED_MARKER', initialMarkerId)
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
      commit('SET_SELECTED_MARKER', id)
    },

    deleteMarker ({ commit }, index) {
      LocalStorage.deleteMarker(index)
      commit('DELETE_MARKER', index)
    }
  }
}

export default mapModule

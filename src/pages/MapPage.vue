<template>
  <div class="page">
    <MarkersList
      class="markersList"
      :markers="map.markers"
      :selected-marker="map.selectedMarker"
    />
    <GoogleMap
      class="map"
      :markers="map.markers"
    />
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue'
import MarkersList from '../components/MarkersList.vue'
import { mapState } from 'vuex'

export default {
  name: 'MapPage',
  components: {
    GoogleMap,
    MarkersList
  },
  computed: {
    ...mapState({
      map: state => state.map
    })
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('map/fetchMarkers')
  }
}
</script>

<style scope>
.page {
  display: flex;
  width: 100%;
  height: calc(100vh - 112px);
}

.markersList {
  width: 400px;
  height: calc(100vh - 112px);
}

.map {
  width: 100%;
}
</style>

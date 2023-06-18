<template>
  <GmapMap
    :center='center'
    :zoom='12'
    style='width:100%;  height: 100%;'
  >

  <GmapMarker
    v-for="marker, id in markers"
    :key="id"
    ref="markers"
    :position="marker"
    @click="onMarkerClick($event, id)"
  />

  <GmapInfoWindow
    ref="info_window"
    :options="info_window_options"
  />
  </GmapMap>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    createMarker (location) {
      const { lat, lng } = location.latLng
      this.$store.dispatch('map/saveMarker', { lat: lat(), lng: lng() })
    },
    panMapToLocation (marker) {
      this.$refs.gmap.panTo(marker)
      const markerObject = this.$refs.markers[marker.id].$markerObject
      const infoWindowObject = this.$refs.info_window.$infoWindowObject

      if (markerObject && infoWindowObject) {
        infoWindowObject.open(this.$refs.gmap.$mapObject, markerObject)
      }
    },
    onMarkerClick (event, id) {
      this.$store.dispatch('map/selectMarker', id)
    },
    onTilesLoaded () {
      if (this.selected_marker) {
        this.panMapToLocation(this.selected_marker)
      }
    }
  }

}
</script>

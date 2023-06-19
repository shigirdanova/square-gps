<template>
  <div>
    <GmapMap
      ref="map"
      v-bind="options"
      @click="onMapClick"
      class="map"
    >
      <GmapMarker
        v-for="m in markers"
        :key="m.id"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="onMarkerClick"
      />
    </GmapMap>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import nanoId from 'nanoid'

export default {
  name: 'GoogleMap',
  props: {
    markers: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    options: {
      center: { lat: 45.101637, lng: 38.986345 },
      zoom: 12
    }
  }),
  mounted () {
    this.geolocate()
  },
  computed: {
    ...mapState(['map'])
  },
  methods: {
    ...mapActions('map', {
      createMarker: 'createMarker'
    }),

    setPlace (place) {
      this.currentPlace = place
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.options.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    onMapClick (e) {
      this.createMarker({
        id: nanoId,
        position: e.latLng
      })
    },
    onMarkerClick (e) {
      this.$refs.map.panTo(e.latLng)
    }
  }

}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>

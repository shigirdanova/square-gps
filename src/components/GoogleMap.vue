<template>
  <div>
    <v-btn
        elevation="2"
        x-large
        icon
        class="addButton"
        @click="onAddButtonClick"
        :disabled="isAddMarker"
      >
        <v-icon>mdi-plus</v-icon>
    </v-btn>

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
      center: { },
      zoom: 12
    },
    isAddMarker: false
  }),
  mounted () {
    this.geolocate()
  },
  computed: {
    ...mapState({
      selected_marker: (state) => state.map.selected_marker
    }),
    info_window_options () {
      const content = this.selected_marker
        ? `
                <b>ID:${this.selected_marker.id + 1}</b><br/>
                Lat: ${(Number(this.selected_marker.lat)).toFixed(6)}<br/>
                Lng: ${(Number(this.selected_marker.lng)).toFixed(6)}`
        : ''
      return {
        content,
        maxWidth: 200
      }
    }

  },
  methods: {
    ...mapActions('map', {
      createMarker: 'createMarker',
      selectMarker: 'selectMarker'
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
      if (this.isAddMarker) {
        this.createMarker({
          position: e.latLng
        })
        this.isAddMarker = false
      }
    },
    onMarkerClick (e) {
      this.$refs.map.panTo(e.latLng)
      this.selectMarker(e.index)
    },
    onAddButtonClick () {
      this.isAddMarker = true
    }
  }
}

</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}

.addButton {
    position: fixed;
    right: 6px;
    bottom: 200px;
    z-index: 9;
    background-color: white;
  }
</style>

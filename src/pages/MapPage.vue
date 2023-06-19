<template>
  <div class="page">
    <!-- <v-btn
        elevation="2"
        icon
        x-large
        class="addButton"
        @click="addMarker"
      >
        <v-icon>mdi-plus</v-icon>
    </v-btn> -->
    <GoogleMap
      class="map"
      :markers="map.markers"
    />
  </div>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue'
import { mapState } from 'vuex'

export default {
  name: 'MapPage',
  components: {
    GoogleMap
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
  width: 100%;
  height: 100%;
}

.map {
  width: 100%;
  height: 100%;
}

.addButton {
  /* position: fixed;
  right: 0;
  bottom: 0; */
}
</style>

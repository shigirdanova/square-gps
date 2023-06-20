<template>
  <div>
      <v-card class="markers-list">
        <v-card-title>Маркеры:</v-card-title>

        <div v-if="markers.length">
          <v-card
            v-for="(marker, index) in markers"
            :key="index+1"
            :class="{'selected': selectedMarker && index === selectedMarker.id}"
            @click="onSelectMarker(marker, index)"
            tile
            class="markerItem"
            >
            <p class="font-weight-medium">Маркер №{{ index+1 }}</p>
            <p class="grey--text mb-2">
              {{ Number(marker.position.lat).toFixed(6) }}, {{ Number(marker.position.lng).toFixed(6) }}
            </p>
          </v-card>
        </div>

        <div v-else class="emptyList">
          <p class="text--secondary">Нет маркеров</p>
          <p class="grey--text text-darken-1 mb-2">
            Для создания нового маркера нажмите на кнопку "+" в правом нижнем углу
          </p>
        </div>
      </v-card>
  </div>
  </template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'MarkersList',
  props: {
    markers: {
      type: Array,
      default: () => []
    },
    selectedMarker: {
      type: Array,
      default: () => [0, 0]
    }
  },
  computed: {
    ...mapState(['map'])
  },

  methods: {
    ...mapActions('map', {
      selectMarker: 'selectMarker'
    }),

    onSelectMarker (marker, id) {
      this.selectMarker(id)
    }
  }
}
</script>

<style>
  .markers-list {
    height: 100%;
    overflow-y: scroll;
  }

  .markerItem {
    height: fit-content;
    padding: 8px 16px 8px 16px;

    __title {
      font: bold;
    }
  }

  .emptyList {
    margin: 8px 16px 8px 16px;
  }
</style>

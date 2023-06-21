<template>
  <v-app>
    <LayoutHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import LayoutHeader from '../components/LayoutHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader
  }
}
</script>

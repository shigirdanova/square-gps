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
  name: 'App',
  components: {
    LayoutHeader
  },
  data: () => ({
    //
  })
}
</script>

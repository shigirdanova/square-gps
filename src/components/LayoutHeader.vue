<template>
  <v-app>
    <v-app-bar
      app
      color="blue-grey darken-2"
      dark
    >
      <v-toolbar-title>Тестовое задание для SquareGPS</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
          @change="updateRouter($event)"
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab
            v-for="item in tabItems"
            :key="item.name"
            :to="item.path"
          >
            {{ item.name || 'jkhsdf'}}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    tab: ''
  }),
  computed: {
    tabItems () {
      return [
        { id: 'about', name: 'О задании', path: this.getTabPath('about') },
        { id: 'map', name: 'Карта', path: this.getTabPath('map') }
      ]
    }
  },
  methods: {
    getTabPath (name) {
      // Get the path withoust losing params. Usefull e.g. if you have a :locale in your url:
      return this.$router.resolve({ name, params: this.$route.params }).href
    },
    updateRouter (path) {
      if (this.$route.path !== path) this.$router.push(path)
    }
  }
}
</script>

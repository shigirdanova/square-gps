<template>
  <div>
    <v-btn
        elevation="2"
        small
        icon
        class="addButton"
        @click="onButtonClick"
      >
        <v-icon>mdi-web</v-icon>
    </v-btn>

    <v-list v-if="isShown">
      <v-list-item
          v-for="(name, code) in lng"
          :key="code"
          @click="changeLocale(code)"
          :class="{'grey lighten': code === current_locale}"
      >
      <v-list-item-title>{{ name }}</v-list-item-title>
    </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'LocaleDropdown',
  data () {
    return {
      lng: {
        ru: 'Русский',
        en: 'Анлийский'
      },
      isShown: false
    }
  },
  computed: {
    current_locale () {
      return this.$i18n.locale
    }
  },
  methods: {
    changeLocale (code) {
      this.$i18n.locale = code
      this.isShown = false
    },
    onButtonClick () {
      this.isShown = !this.isShown
    }
  }
}
</script>

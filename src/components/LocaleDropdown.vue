<template>
  <v-menu top>
      <v-btn
            color="white"
            v-on="on"
            icon
            small
      ><v-icon(dark) mdi-web />
      </v-btn>

    <v-list>
      <v-list-item
          v-for="(name, code) in langs"
          :key="code"
          @click="changeLocale(code)"
          :class="{'grey lighten-2': code === current_locale}"
      >
      <v-list-item-title>{{ name }}</v-list-item-title>
    </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'LocaleDropdown',
  data () {
    return {
      langs: {
        ru: 'Русский',
        en: 'Анлийский'
      }
    }
  },

  methods: {
    changeLocale (code) {
      this.$i18n.locale = code
    }
  },

  computed: {
    current_locale () {
      return this.$i18n.locale
    }
  }
}
</script>

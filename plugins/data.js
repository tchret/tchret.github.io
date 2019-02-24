import Vue from 'vue'

import data from '~/assets/data.yml'

Vue.mixin({
  methods: {
    siteData () {
      return data
    }
  }
})

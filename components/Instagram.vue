<template>
  <div>{{instagram}}</div>
</template>

<script>
  export default {
    data() {
      return {
        instagram: {}
      }
    },
    mounted() {
      this.fetchInstagramData()
    },

    methods: {
      async fetchInstagramData() {
        this.instagram = await this.$axios.$get('https://www.instagram.com/tchret/?__a=1')
      }
    }
  }
</script>

<template>
  <div class='tabs'>
    <div :class='{tab: true, active: currentPath == tab.slug}' v-for='(tab, i) in siteData().tabs' :key='i'>
      <nuxt-link :to='`/${tab.hasOwnProperty("url") ? tab.url : tab.slug}`'>
        {{tab.name}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      currentPath() {
        return this.$nuxt.$route.name
      }
    }
  }
</script>

<style lang='scss'>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  margin-top: -8px;

  @media(max-width: 800px) {
    margin: 0 -12px;
  }

  .tab {
    text-align: center;
    cursor: pointer;
    @media(max-width: 800px) {
      flex: 1;
    }

    a {
      min-width: 110px;
      text-decoration: none;
      display: inline-block;
      padding: ($spacing * 1.5) ($spacing * 2);

      @media(max-width: 800px) {
        min-width: auto;
      }
    }

    &.active {
      border-bottom: 2px solid $dark;
      a {
        font-weight: 500;
      }
    }
  }
}
</style>

<template>
  <div>
    <Header></Header>
    <nuxt/>
  </div>
</template>

<script>
  import Header from '~/components/page/Header'
  export default {
    components: { Header }
  }
</script>

<style lang='scss'>
html, input
{
  font-family: "AeroportM", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $dark;
  font-weight: 300;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}

*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

a {
  color: $dark;
}
</style>

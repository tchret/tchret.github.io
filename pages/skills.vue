<template>
  <div class='skills'>
    <ItemList :items='siteData().skills' :title='`Skills & services`'></ItemList>
    <ItemList :items='siteData().tools' :title='`Tools`'></ItemList>
  </div>
</template>

<script>
  import ItemList from '~/components/page/ItemList'
  export default {
    components: { ItemList }
  }
</script>

<style scoped lang='scss'>
</style>

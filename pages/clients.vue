<template>
  <div class='clients'>
    <ItemList :items='siteData().clients' :title='false'></ItemList>
  </div>
</template>

<script>
  import ItemList from '~/components/page/ItemList'
  export default {
    components: { ItemList }
  }
</script>

<style scoped lang='scss'>
.clients /deep/ .list {
  justify-content: center;
}
</style>

<template>
  <div>
    <Header></Header>
    <div>
      <ItemList :items='siteData().clients' :title='`Featured clients`'></ItemList>
      <ItemList :items='siteData().skills' :title='`Skills & services`'></ItemList>
      <ItemList :items='siteData().tools' :title='`Tools`'></ItemList>
    </div>
  </div>
</template>

<script>
import Header from '~/components/page/Header'
import ItemList from '~/components/page/ItemList'

export default {
  components: {
    Header, ItemList
  }
}
</script>

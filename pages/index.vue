<template>
  <div>
    <Slider></Slider>
    <div>
      <ItemList :items='siteData().featurings' :title='`Featured on`'></ItemList>
      <ItemList :items='siteData().skills' :title='`Skills & services`'></ItemList>
      <ItemList :items='siteData().clients' :title='`Selected clients`'></ItemList>
      <ItemList :items='siteData().tools' :title='`Tools`'></ItemList>
    </div>
  </div>
</template>

<script>
import Header from '~/components/page/Header'
import ItemList from '~/components/page/ItemList'
import Slider from '~/components/Slider'

export default {
  components: {
    Header, ItemList, Slider
  }
}
</script>

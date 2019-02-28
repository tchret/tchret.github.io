<template>
  <Container>
    <no-ssr>
      <slick :options='slickOptions'>
        <div
          v-for='(caseStudy, i) in siteData().case_studies'
          :key='i'
          class='image-container'
        >
          <div
            :style='{backgroundImage: `url(/case_studies/${caseStudy.slug}/1.jpg)`}'
            class='image'
          ></div>
        </div>
      </slick>
    </no-ssr>
  </Container>
</template>

<script>
  import Container from '~/components/Container'

  export default {
    components: { Container },
    data() {
      return {
        slickOptions: {
          slidesToShow: true,
          infinite: true,
          dots: false,
          arrows: false,
          centerMode: true,
          autoplay: false,
          accessibility: false,
          focusOnSelect: true,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 8000
        }
      }
    }
  }
</script>

<style scoped lang='scss'>

.container {
  min-height: 500px;
  margin-top: $spacing * 4;
  max-width: 940px;
}

.image {
  height: 500px;
  width: 100%;
  background-size: cover !important;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  &:after {
    box-shadow: 0px 0px 0px 1px rgba($dark, .15), 0px 1px 2px 0px rgba($dark, .15);
    border-radius: $radius;
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 111
  }

  &-container {
    padding: 0 $spacing * 2;
  }
}

.container /deep/ .slick-list {
  overflow: visible;
  padding: 0 !important;
}

.container /deep/ .slick-slide {
}

</style>

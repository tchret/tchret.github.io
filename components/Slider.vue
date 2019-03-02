<template>
  <Container>
    <no-ssr>
      <slick :options='slickOptions'>
        <div
          v-for='(caseStudy, i) in siteData().case_studies'
          class='image-container'
          :key='i'
        >
          <CaseStudyItem v-bind='caseStudy'></CaseStudyItem>
        </div>
      </slick>
    </no-ssr>
  </Container>
</template>

<script>
  import Container from '~/components/Container'
  import CaseStudyItem from '~/components/CaseStudyItem'

  export default {
    components: { Container, CaseStudyItem },
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
          autoplaySpeed: 6000
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

  @media(max-width: 950px) {
    min-height: auto;
  }
}

.container /deep/ .slick-list {
  overflow: visible;
  padding: 0 !important;
}

.container /deep/ .slick-slide {
  padding: 0 $spacing * 2;
}

</style>

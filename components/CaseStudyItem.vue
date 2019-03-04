<template>
  <div>
    <div class='header'>
      <div class='image' :style="{backgroundImage: `url(${client_image_path})`}">
      </div>
      <div>
        <div class='title' v-if='client'>{{production}} <span>for</span> {{client.name}}</div>
        <div class='title' v-else>{{title}}</div>
        <div class='tagline'>{{year}}</div>
      </div>
      <a v-if='url' :href='url' target='_blank' class='button'>View live</a>
    </div>
    <div
      :style='{backgroundImage: `url(/case_studies/${slug}/1.jpg)`}'
      class='case-study'
    >
    </div>
  </div>
</template>


<script>
import { find, snakeCase } from 'lodash'

export default {
  props: ['slug', 'production', 'year', 'title', 'url'],
  computed: {
    client() {
      return find(this.siteData().clients, (client) => { return snakeCase(client.name) == this.slug })
    },
    client_image_path() {
      return `/clients/${this.slug}.png`
    }
  }
}
</script>

<style lang='scss' scoped>
.button {
  margin-left: auto;
  line-height: 32px;
  margin-left: auto;
  padding: 0 12px;
  box-shadow: 0px 0px 0px 1px;
  border-radius: 3px;
  font-weight: 500;
  color: #828e9b;
  text-decoration: none;
  opacity: 0;
  transform: translateY(-15%);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
}
.case-study {
  height: 500px;
  width: 100%;
  background-size: cover !important;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 1px 2px 0px rgba($dark, .15);


  @media(max-width: 950px) {
    height: auto;
    padding-bottom: 59%;
  }
  &:before {
    border: 1px solid rgba($dark, .15);
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

.header {
  padding-bottom: 0;
  display: flex;
  position: relative;
  z-index: 2;
  color: $dark;
  align-items: center;
  padding-bottom: $spacing * 2;
  .image {
    width: 42px;
    height: 42px;
    background-color: white;
    background-size: cover !important;
    margin-right: $spacing * 1.5;
  }

  .title {
    font-size: 16px;
    color: $dark;
    span {
      color: $grey;
    }
  }

  .tagline {
    color: $grey;
  }
}

.slick-center {
  .button {
    opacity: 1;
    transform: translateY(0)
  }
}

</style>

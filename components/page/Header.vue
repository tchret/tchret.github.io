<template>
  <div class='header'>
    <container>
      <nav class='nav'>
        <div class='sitename'>
          <div class='logo-container'>
            <div :class='{logo: true, loaded: this.imageLoaded}'></div>
          </div>
          <div class='infos'>
            <div class='name'>
              {{siteData().name}}
            </div>
            <div class='tagline'>
              {{siteData().tagline}}
            </div>
          </div>
        </div>
      </nav>
      <div class='description'>
        {{siteData().description}}
      </div>
    </container>
  </div>
</template>

<script>
  import Container from '~/components/Container'

  export default {
    components: { Container },
    data() {
      return {
        imageLoaded: false
      }
    },
    mounted() {
      let logoImg = new Image

      logoImg.onload = () => { this.imageLoaded = true }

      logoImg.src = '/logo.png'

    }
  }
</script>

<style lang='scss'>
.header {
  padding-top: $spacing * 3;
  background: white;
  position: relative;
  border-bottom: 1px solid $lightgrey;

  &:before {
    position: absolute;
    z-index: -1;
    width: 99%;
    bottom: 0;
    height: 10px;
    left: .5%;
    border-radius: 100px / 2px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    content: '';
  }
}

.sitename {
  position: relative;
  display: flex;
  margin-left: -40px;
}

.logo {
  width: 24px;
  height: 24px;
  background-image: url('/logo.png');
  background-size: cover;
  transform: translateY(-250%);
  transition: transform .8s ease-in-out;
  &-container {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
  }

  &.loaded {
    transform: translateY(0);
  }
}

.infos {
  padding-left: $spacing * 2;
}

.name {
  font-size: 16px;
  font-weight: 500;
}

.tagline {
  font-size: 14px;
  color: $grey;
}

.description {
  font-size: 16px;
  padding: ($spacing * 5) 0;
}

</style>

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
        <div class='menu'>
          <span class='cta'>
            <send-icon></send-icon>
            <input :value='siteData().email' readonly @click='$event.target.select()' @focus="$event.target.select()" />
          </span>
        </div>
      </nav>
      <div class='description' v-html='siteData().description'>
      </div>
    </container>
  </div>
</template>

<script>
  import Container from '~/components/Container'
  import SendIcon from '~/components/icons/Send'

  export default {
    components: { Container, SendIcon },
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

<style lang='scss' scoped>
.header {
  padding-top: $spacing * 3;
  background: white;
  position: relative;
  border-bottom: 1px solid $lightgrey;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 99%;
    bottom: 0;
    height: 10px;
    left: .5%;
    border-radius: 100px / 2px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }
}

.nav {
  display: flex;
  align-items: center;

  .menu {
    margin-left: auto;
  }

  .cta {
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    border: 1px solid #d1d5da;
    border-radius: 3px;
    padding: 5px 10px;

    input {
      width: 127px;
      border: none;
      margin-left: $spacing;
      outline: 0;
      font-weight: 500;
    }
  }
}

.sitename {
  position: relative;
  display: flex;
  margin-left: -40px;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
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

  @media screen and (max-width: 1000px) {
    padding-left: $spacing * 1;
  }
}

.name {
  font-size: 16px;
  color: $brand;
  font-weight: 500;
}

.tagline {
  font-size: 14px;
  color: $grey;
}

.description {
  font-size: 16px;
  padding: ($spacing * 5) 0;

  a {
    color: $dark;
  }
}

</style>

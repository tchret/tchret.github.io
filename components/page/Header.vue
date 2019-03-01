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
          <div class='more-container'>
            <a
              :class='{hovered: this.popoverMoreActive, more: true}'
              @mouseenter='activatePopoverMore'
              @mouseleave='disablePopoverMore'
            >
              <more-icon></more-icon>
            </a>
              <div @mouseenter='activatePopoverMore' @mouseleave='disablePopoverMore'>
                <popover-more :active='popoverMoreActive' ></popover-more>
              </div>
          </div>
          <div class='social'>
            <a
              v-for='(link, i) in siteData().links'
            >

            </a>
          </div>
          <a class='button' v-if='!displayContactInfos' @click='displayContactInfos = true'>
            <send-white-icon></send-white-icon>
            Contact
          </a>
          <div v-else>
            <span class='input'>
              <send-icon></send-icon>
              <input :value='siteData().email' readonly @click='$event.target.select()' @focus="$event.target.select()" />
            </span>
          </div>
        </div>
      </nav>
      <div class='description' v-html='siteData().description'>
      </div>
      <tabs></tabs>
    </container>
  </div>
</template>

<script>
  import Container from '~/components/Container'
  import SendIcon from '~/components/icons/Send'
  import SendWhiteIcon from '~/components/icons/SendWhite'
  import MoreIcon from '~/components/icons/More'
  import PopoverMore from '~/components/Popover/More'
  import Tabs from '~/components/Tabs'

  import DribbbleIcon from '~/components/icons/Social/Dribbble'
  import FacebookIcon from '~/components/icons/Social/Facebook'
  import ProductHuntIcon from '~/components/icons/Social/ProductHunt'
  import TwitterIcon from '~/components/icons/Social/Twitter'
  import InstagramIcon from '~/components/icons/Social/Instagram'
  import GithubIcon from '~/components/icons/Social/Github'

  export default {
    components: {
      Container,
      SendIcon,
      SendWhiteIcon,
      MoreIcon,
      PopoverMore,
      Tabs,
      DribbbleIcon,
      FacebookIcon,
      ProductHuntIcon,
      TwitterIcon,
      InstagramIcon,
      GithubIcon
    },
    data() {
      return {
        imageLoaded: false,
        displayContactInfos: false,
        popoverMoreActive: false
      }
    },
    mounted() {
      let logoImg = new Image

      logoImg.onload = () => { this.imageLoaded = true }

      logoImg.src = '/logo.png'

    },
    methods: {
      activatePopoverMore() {
        clearTimeout(this.timer)
        this.popoverMoreActive = true
      },
      disablePopoverMore() {
        this.timer = setTimeout(() => {
          this.popoverMoreActive = false
        }, 300)
      }
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
  @media(max-width: 420px) {
    position: relative;
  }

  .menu {
    margin-left: auto;
    display: flex;
    align-items: center;
    position: relative;

    @media(max-width: 420px) {
      position: initial !important;
    }
  }

  .more-container {
    margin-right: 12px;
    align-self: stretch;
    display: flex;
    position: relative;
    @media(max-width: 1050px) {
      position: initial;
    }
  }

  .more {
    position: relative;
    top: 1px;
    margin-right: $spacing * 2;
    opacity: 1;
    cursor: pointer;
    display: block;
    align-self: stretch;
    padding: 0 6px;
    margin: 0 -6px;
    display: flex;
    align-items: center;
    transition: .15s ease-in-out opacity;

    &:hover, &.hovered {
      opacity: .6;
    }

    svg {
      display: block;
    }
  }

  .input {
    border-radius: 3px;
    border: none;

    input {
      width: 127px;
      border: none;
      margin-left: $spacing;
      outline: 0;
      font-weight: 500;
    }
  }
}

.button {
  background: $brand;
  color: white;
  line-height: 32px;
  user-select: none;
  padding: 0 $spacing * 1.5;
  display: inline-block;
  font-weight: 500;
  border-radius: $radius;
  box-shadow: 0px 0px 0px 1px inset rgba(black, 0.12), 0px 1px 1px rgba(black, .12);
  cursor: pointer;
  transition: background .15s ease-in-out ;

  &:hover {
    background: darken($brand, 5%);
  }

  & /deep/ svg {
    margin-right: $spacing * 0.5;

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
    padding-left: $spacing * 1.5;
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
}

</style>

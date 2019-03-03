<template>
  <transition name='fade'>
    <div class='popover-more' v-if='active'>
      <div class='header'>
        <img :src='`/${siteData().avatar}`' />
        <div class=infos>
          <div class='title'>
            {{siteData().name}}
          </div>
          <div class='tagline'>
            {{siteData().slug}}
          </div>
        </div>
      </div>
      <div class='links-container'>
        <div class='links'>
          <div v-for='(link, i) in siteData().links' :key='i' class='link-container' @click="handleLinkClick(link)">
            <div :is='`${camelize(link.name)}Icon`'></div>
            <a :href='link.href' target='_blank'>{{link.name}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DribbbleIcon from '~/components/icons/Social/Dribbble'
import FacebookIcon from '~/components/icons/Social/Facebook'
import ProductHuntIcon from '~/components/icons/Social/ProductHunt'
import TwitterIcon from '~/components/icons/Social/Twitter'
import InstagramIcon from '~/components/icons/Social/Instagram'
import GithubIcon from '~/components/icons/Social/Github'

export default {
  props: ['active'],
  components: { DribbbleIcon, FacebookIcon, ProductHuntIcon, TwitterIcon, InstagramIcon, GithubIcon },
  methods: {
    camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return letter.toUpperCase();
      }).replace(/\s+/g, '');
    },
    handleLinkClick(link) {
      window.open(link.url, '_blank')
    }
  }
}
</script>

<style lang='scss' scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease-in-out;
    transform: rotateX(-45deg);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: rotateX(-45deg);
  }

  .popover-more {
    box-shadow: 0 8px 16px rgba(27, 39, 51, 0.08);
    background: white;
    width: 400px;
    border-radius: 5px;
    position: absolute;
    z-index: 99;
    left: 15px;
    transform: translateX(-50%);
    border: 1px solid #E5E7EA;
    top: 40px;

    @media(max-width: 1050px) {
      transform: translateX(0%);
      left: inherit;
      right: 0;
    }

    @media(max-width: 420px) {
      left: 0;
      right: 0;
      width: 100%;
      top: 50px;
    }

    &:after {
      content: '';
      left: 0;
      right: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: white;
      box-shadow: 0 8px 16px rgba(27, 39, 51, 0.08);
      border: 1px solid #E5E7EA;
      position: absolute;
      margin: auto;
      transform: rotate(45deg);
      top: -5px;
      border-radius: 3px;
      clip-path: inset(-3px 11px 11px -4px);

      @media(max-width: 1050px) {
        left: 154px;
      }

      @media(max-width: 420px) {
        left: 35%;
      }
    }

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      padding: 24px;
      border-bottom: 1px solid $lightgrey;

      .title {
        font-weight: 500;
        font-size: 16px;
      }

      .tagline {
        color: $grey;
        margin-top: -3px
      }
    }

    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      margin-right: $spacing;
    }
  }

  .links {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: -1px;
    margin-right: -1px;

    &-container {
      overflow: hidden;
      border-radius: 0 0 $radius $radius;
      a, & /deep/ svg { position: relative; z-index: 9 }
    }

    .link-container {
      align-items: center;
      display: flex;
      flex: 1 0 50%;
      padding: $spacing * 2;
      border-bottom: 1px solid $lightgrey;
      border-right: 1px solid $lightgrey;
      cursor: pointer;
      position: relative;

      &:hover {
        z-index: 999;
        &:before {
          box-shadow: 0px 0px 10px 1px rgba(black, .08);
        }
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        transition: box-shadow .15s ease-in-out;
      }

      svg {
        width: 16px;
        height: 16px;
        margin-right: auto;
      }

      a {
        text-decoration: none;
        color: $grey;
      }
    }
  }
</style>

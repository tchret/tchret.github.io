<template>
  <div class='item-list'>
    <container>
      <header-title v-if='title'>
        {{title}}
      </header-title>
      <div class='list-container'>
        <div class='list'>
          <div class='item-container' v-for='item in items'>
            <div :class='{item: true, clickable: item.url}' @click='item.url && handleClickItem(item)'  v-if='!item.hidden'>
              <div class='item-image' :style='{backgroundImage: `url(${iconUrl(item.name)})`}'>
              </div>
              <div>
                <a class='name' :href='item.url' target='_blank'>
                  {{item.name}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  </div>
</template>

<script>
  import Container from '~/components/Container'
  import HeaderTitle from '~/components/Title'
  import { snakeCase } from 'lodash'

  export default {
    props: ['items', 'title', 'hidden'],
    components: { Container, HeaderTitle },
    methods: {
      iconUrl(name) {
        return `/clients/${snakeCase(name)}.png`
      },
      handleClickItem(item) {
        window.open(item.url, "_blank")
      }
    }
  }
</script>

<style lang='scss' scoped>
.item-list {
  padding-top: $spacing * 5;

  &:last-child {
    margin-bottom: $spacing * 5;
  }
  overflow-x: hidden;
  overflow-y: hidden;

}
.list-container {
  margin: 0 -40px;

  @media(max-width: 950px) {
    margin: 0 -25px;
  }
}

.list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: -($spacing * 3);
  // overflow: hidden;
  @media(max-width: 800px) {
    // justify-content: center;
  }


  .item-container {
    flex: 0 0 12.5%;
    text-align: center;
    margin-bottom: $spacing * 3;

    @media(max-width: 800px) {
      flex: 0 0 25%;
    }

    @media(max-width: 600px) {
      flex: 0 0 33%;
    }

    .item {
      display: inline-block;
      padding: ($spacing * 1) 0;
      border-radius: 5px;
      transition: .15s ease-in-out;
      margin-top: -($spacing * 1);
      display: block;

      &.clickable {
        cursor: pointer;
        &:hover {
          background: rgba($dark, 0.03)
        }
      }

    }

    .name {
      color: $grey;
      font-size: 12px;
      font-weight: 500;
      text-decoration: none;
      margin-top: -2px;
      display: block;
      white-space: nowrap;
    }
  }
}

.item-image {
  width: 42px;
  height: 42px;
  display: inline-block;
  background-size: cover !important;
}
</style>

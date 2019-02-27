<template>
  <div class='item-list'>
    <container>
      <header-title>
        {{title}}
      </header-title>
      <div class='list-container'>
        <div class='list'>
          <div class='item-container' v-for='item in items'>
            <div :class='{item: true, clickable: item.url}' @click='handleClickItem(item)'>
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
    props: ['items', 'title'],
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
  margin-top: $spacing * 5;

  &:last-child {
    margin-bottom: $spacing * 5;
  }
  overflow-x: hidden;
  overflow-y: hidden;

}
.list-container {
  margin: 0 -56px;

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
  @media(max-width: 950px) {
    justify-content: center;
  }


  .item-container {
    flex: 0 0 16.66666%;
    text-align: center;
    margin-bottom: $spacing * 3;

    .item {
      display: inline-block;
      padding: ($spacing * 1) ($spacing * 4);
      border-radius: 5px;
      transition: .15s ease-in-out;
      margin-top: -($spacing * 1);

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
  width: 55px;
  height: 55px;
  display: inline-block;
  background-size: cover !important;
}
</style>

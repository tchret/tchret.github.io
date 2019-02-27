<template>
  <div class='title'>
    <span><slot></slot></span>
  </div>
</template>

<style lang='scss' scoped>
  .title {
    border-bottom: 1px solid $lightgrey;
    padding-bottom: $spacing * 1.5;
    font-weight: 500;
    margin-bottom: $spacing * 3;
    color: $dark;

    span {
      position: relative;

      &:after {
        position: absolute;
        left: 0; right: 0;
        content: '';
        height: 1px;
        background: rgba($dark, .2);
        bottom: -13px;
      }
    }
  }
</style>

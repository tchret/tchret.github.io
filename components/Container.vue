<template>
<div class='container'>
  <slot></slot>
</div>
</template>

<style lang='scss' scoped>
.container {
  max-width: 900px + $spacing * 1.5;
  margin: auto;
  padding: 0 $spacing * 1.5;
}
</style>

<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <!--<keep-alive>-->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <!--</keep-alive>-->
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/scss/common";

</style>

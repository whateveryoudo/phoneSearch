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
  name: 'app',
    created(){
      //添加去除字符串前后空格方法
        String.prototype.trim = function(){
            return this.replace(/(^\s*)|(\s*$)/g,'');
        }
    }
}
</script>

<style lang="scss">

  /*页面之间的切换效果*/
  .router-fade-enter-active,.router-fade-leave-active{
    transition:opacity .3s;
  }
  .router-fade-enter,.router-fade-leave-active{
    opacity: 0;
  }
</style>

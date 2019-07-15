<template>
    <header>
        <i class="arrow_left" v-if="isBack" @click="goback"></i>
        <span class="titleName tdd">{{headTitle}}</span>
    </header>
</template>
<script>
    export default{
        data(){
            return {}
        },
        props : ['isBack','headTitle'],
        mounted(){

        },
        created(){

        },
        methods: {
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "src/style/scss/mixin";
    header{
    @include hl(.45rem,.45rem);
        position: fixed;
        top:0;
        text-align: center;
    @include sc(.17rem,#000);
    @include fj;
        width:100%;
    .titleName{
    @include center;
        display: inline-block;
        max-width: 1.5rem;
    }
    i.arrow_left{
    @include ct;
    @include wh(.20rem,.20rem);
        left:3%;
        display: inline-block;
        background: url(../../assets/icons/arrow-left-black.png) no-repeat;
        background-size: 100% 100%;
    }
    }
</style>
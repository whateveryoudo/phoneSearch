<template>
    <div class='status_container'>
        <head-top :isBack="false" :headTitle="headTitle"></head-top>
        <top-progress></top-progress>
        <div class='rating-page'>
            <img class="status_icon" src="../../../assets/icons/smail.png" alt="">
            <p>通话详单即将发送到你的邮箱，请注意查收。</p>
            <p>感谢你的使用！</p>
            <div class='submit_btn_container'>
                <mt-button type="primary" @click.native="toHome">返回首页</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import topProgress from '@/components/common/topProgress'
    import {mapMutations} from 'vuex'
    export default{
        data(){
            return {
                headTitle : '查询结果'
            }
        },
        components : {
            headTop,
            topProgress
        },
        mounted(){

        },
        created(){
            //初始顶部进度
            this.SAVE_PROGRESS({stepIndex : 3});
        },
        methods: {
            ...mapMutations([
                "SAVE_PROGRESS",
            ]),
            toHome(){
                this.$router.push('/');
            }
        }
    }
</script>
<style lang="scss">
    @import "src/style/scss/mixin";
    .rating-page{
        top: 1rem;
    }
    .status_container{
        .rating-page{
            text-align:center;
            .status_icon{
                margin: .3rem auto;
            }
            p{
                @include sc(.14rem,#666);
                line-height: .2rem;
            }
            .submit_btn_container{
                margin-top: .5rem;
            }
        }
    }
</style>
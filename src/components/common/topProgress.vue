<template>
    <div>
        <section class="fill"></section>
        <div class='progress_container'>
            <!--顶部留白padding无法改变高度-->
            <section class="prev_step_con">
                <section class="progress_item" :class="item.isComplete && 'stepOver'" v-for="(item,index) in prevSteps" :key="index">
                    <div class="line"></div>
                    <span class="step_name">{{item.title}}</span>
                </section>
            </section>
            <div class="last_step_con" :class="lastStep.isComplete && 'stepOver'">

            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

            }
        },
        computed : {
            prevSteps : function(){//去除最后一项
                let progressSteps = JSON.parse(JSON.stringify(this.$store.state.login.progressSteps));//深拷贝
                progressSteps.splice(progressSteps.length - 1,1);
                return progressSteps;
            },
            lastStep : function(){
                let progressSteps = JSON.parse(JSON.stringify(this.$store.state.login.progressSteps));
                return progressSteps[progressSteps.length - 1];

            }
        },
        mounted(){

        },
        created(){
        },
        methods: {}
    }
</script>
<style lang="scss">
    @import "src/style/scss/mixin";
    .fill{
        background-color: #fff;
        @include wh(100%,.1rem);
        top:.45rem;
        position: fixed;
    }
    .progress_container{
        box-sizing: border-box;
        padding:0 .15rem;
        @include fj;
        position: fixed;
        top:.55rem;
        background-color: #fff;
        @include wh(100%,.45rem);

        .prev_step_con{
            flex:14;
            @include fj;
            .progress_item{
                text-align: center;
                position: relative;
                flex:1;
                .line{
                    @include wh(100%,1px);
                    @include ct;
                    background-color: #bbb;
                }
                .step_name{
                    color:#bbb;
                    margin-left: .12rem;
                }
                &:after{
                    content: ' ';
                    display: inline-block;
                    @include wh(.18rem,.18rem);
                    border:2px solid #bbb;
                    border-radius: 50%;
                    @include ct;
                    left: 0;
                    z-index: 10;
                    background-color: #fff;
                 }
            }
            .progress_item.stepOver{
                .line{
                    background-color: $blue;
                }
                span.step_name{
                    color:$blue;
                }
                &:after{
                    background-color:$blue;
                    border-color:$blue;
                 }
            }
        }
        .last_step_con{
            flex: 1;
            position:relative;
            &:after{
                 content: ' ';
                 display: inline-block;
             @include wh(.18rem,.18rem);
                 border:2px solid #bbb;
                 border-radius: 50%;
             @include ct;
                 left: 0;
                 z-index: 10;
                 background-color: #fff;
             }
            &.stepOver:after{
                 background-color:$blue;
                 border-color:$blue;
             }
        }
    }
</style>
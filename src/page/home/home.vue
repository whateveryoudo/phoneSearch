<template>
    <div class="container">
        <header>
            <h2 class="bounceInDown animated">请选择你需要查询的类型</h2>
        </header>
        <section class="phone_types_con">
            <ul>
                <li  @click="toLoginPage(1)" :class="[currentIndex == 1 && 'choosed']" class="phone_choose_item">
                    <div class="phone_icon">
                        <img src="../../assets/icons/china_yd.png" alt="中国移动">
                    </div>
                    <p>中国移动</p>
                </li>
                <li  @click="toLoginPage(2)" :class="[currentIndex == 2 && 'choosed']" class="phone_choose_item" >
                    <div class="phone_icon">
                        <img src="../../assets/icons/china_dx.png" alt="中国电信">
                    </div>
                    <p>中国电信</p>
                </li>
                <li  @click="toLoginPage(3)" :class="[currentIndex == 3 && 'choosed']" class="phone_choose_item" >
                    <div class="phone_icon">
                        <img src="../../assets/icons/china_lt.png" alt="中国联通">
                    </div>
                    <p>中国联通</p>
                </li>
            </ul>

        </section>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                currentIndex : '',
                routeLink : ['/yd_login','/dx_login','/lt_login']
            }
        },

        mounted(){

        },
        created(){

        },
        methods: {
            toLoginPage(type){
                this.currentIndex = type;
                setTimeout(() => {
                    this.$router.push(this.routeLink[type - 1]);
                },100)

            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "src/style/scss/mixin";
    .container{
        overflow:hidden;
        background: -webkit-linear-gradient(bottom, rgba(102,192,255,1), rgba(28,162,255,1));
        height:100%;
        color:#eee;
        header{
            text-align: center;
            margin-top: .5rem;

        }
        .phone_types_con{
            ul{
                @include fj();
                flex-direction: column;
                align-items: center;
                li.phone_choose_item{
                    margin-top:.8rem;
                    transition:all .2s;
                    .phone_icon{
                        margin: 0 auto;
                        margin-bottom:.2rem;
                        border : 5px solid transparent;
                        border-radius : 50%;
                        img{
                            @include wh(100%,100%);
                            vertical-align: middle;
                        }
                    }
                    &.choosed{
                    p{
                        font-size: .16rem;
                        font-weight: bold;
                    }
                    }
                    &:nth-of-type(1).choosed{
                         color:rgb(255,148,21);
                         .phone_icon{
                             border : 5px solid rgb(255,148,21);
                             border-radius : 50%;
                         }
                     }
                    &:nth-of-type(2).choosed{
                         color:rgb(0,92,161);
                        .phone_icon{
                            border : 5px solid rgb(0,92,161);
                            border-radius : 50%;
                        }
                    }
                    &:nth-of-type(3).choosed{
                         color:#ee1b22;
                        .phone_icon{
                            border : 5px solid #ee1b22;
                            border-radius : 50%;
                        }
                    }
                }
            }
        }
    }
</style>
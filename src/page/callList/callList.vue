<template>

    <div class="callList-container">
        <!--<button @click="print">点击打印</button>-->
        <!--<mt-navbar v-model="selected">-->
            <!--<mt-tab-item id="0">10月</mt-tab-item>-->
            <!--<mt-tab-item id="1">9月</mt-tab-item>-->
            <!--<mt-tab-item id="2">8月</mt-tab-item>-->
            <!--<mt-tab-item id="3">7月</mt-tab-item>-->
        <!--</mt-navbar>-->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item :id="selected">
                <!--顶部title-->
                <section class="header-con">
                    <header>
                        <img src="../../assets/icons/china_yd.png" alt="中国移动">
                        <div class="yd_info">
                            <p>中国移动</p>
                            <p>China Mobile</p>
                        </div>
                    </header>
                    <div class="title-desc">中国移动内蒙古分公司通话详单</div>
                </section>
                <!--详单顶部信息-->
                <section class="list-top-info">
                    <ul>
                        <li class="l-i-item">
                            <span class="t-i-left">手机号码：</span>
                            <span>15982819091</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">纪录条数：</span>
                            <span>159</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">查询月份：</span>
                            <span>15982819091</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">余额：</span>
                            <span>0</span>
                        </li>
                    </ul>
                </section>
                <!--当月费用信息-->
                <section class="list-money-info">
                    <ul>
                        <li class="l-i-item">
                            <span class="t-i-left">本地通话费：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">电话费：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">其他费用：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">长途通话费：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">港澳台长途：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">国内长途：</span>
                            <span>0.00元</span>
                        </li>

                        <li class="l-i-item">
                            <span class="t-i-left">国际长途：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">漫游通话费：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">国内漫游：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">港澳台漫游：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">国际漫游：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">港澳台长途：</span>
                            <span>0.00元</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">国内长途：</span>
                            <span>0.00元</span>
                        </li>
                    </ul>
                </section>
                <section class="list-detail-con">
                    <mt-cell class="list-item-title">
                        <span class="item-start-time">开始时间</span>
                        <span class="item-call-address">通信地点</span>
                        <span class="item-call-type">呼叫类型</span>
                        <span class="item-contact-phone">对方号码</span>
                        <span class="item-call-time">通话时长</span>
                        <span class="item-receive-money">实收通信费</span>
                    </mt-cell>
                    <mt-cell class="list-con" v-for="item in listObj.data">
                        <span class="item-start-time">{{item.startTime}}</span>
                        <span class="item-call-address">{{item.commPlac}}</span>
                        <span class="item-call-type">{{item.commType}}</span>
                        <span class="item-contact-phone">{{item.anotherNm}}</span>
                        <span class="item-call-time">{{item.commTime}}</span>
                        <span class="item-receive-money">{{item.commFee}}</span>
                    </mt-cell>
                </section>
                <!--底部事件地点-->
                <section class="print-address-time">
                    <ul>
                        <li class="l-i-item">
                            <span class="t-i-left">打印地点：</span>
                            <span>奥术大师大所</span>
                        </li>
                        <li class="l-i-item">
                            <span class="t-i-left">打印时间：</span>
                            <span>2017-11-13 11:54:22</span>
                        </li>
                    </ul>
                </section>
                <!--底部补充项-->
                <section class="supplement-con">
                    <p>
                        说明：费用单位为元,时间为秒
                    </p>
                    <p>时间样式 01-020305说明：01代表打印月份中的日期，02代表小时，03代表分钟,05代表秒数</p>
                    <p>声明：本详单信息权仅提供客户核对之用，不做任何凭据</p>
                    <section class="remind-con">
                        <div class="remind-l">提示:</div>
                        <div class="remind-r">
                            <p>1.为保护你的密码不被他人恶意使用,请经常修改</p>
                            <p>2.以上内容如有不想支出,请向营业员查询</p>
                            <p>客户服务热线：10086</p>
                        </div>
                    </section>
                </section>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    import listData from '@/config/testData'
//    import $ from 'jquery'
//    import printView from '@/config/jq-print-preview'
    export default{
        data(){
            return {
                listObj : {},
                selected : '0'
            }
        },

        mounted(){
//            this.initData();
            setTimeout(() => {
                window.print();
            },1000)

        },
        created(){

        },
        methods: {
            initData(type){
                let index = type || 0;
                this.listObj = listData.data[index] && listData.data[index].contentList;
            },
            print(){
//                $.printPreview.loadPrintPreview();
                window.print();
            }
        },
        watch : {
            'selected' : function(val){
                this.initData(Number(val));
            }
        }
    }
</script>
<style>
</style>
<style lang="scss" scoped>
    @import "src/style/scss/mixin";

    .callList-container{
        background-color:#fff;
        font-size: 12px;
        color:#333;
        .mint-tab-container-item{
            &>section{
                border-bottom: 1px dashed #333;
                padding:.1rem 0;
              }
              section.header-con{
                  border-bottom: none;
              }
            header{
                margin-bottom:.2rem;
                margin-top:1.6rem;
                img{
                    @include wh(.5rem,.5rem);
                    margin-right: .1rem;
                }
                @include fj(center);
                .yd_info{
                    &>p:first-child{
                          font-size: 16px;
                            padding-top:.05rem;
                      }
                }
            }
            .title-desc{
                text-align: center;
                margin-bottom:0.05rem;
            }
            .list-top-info,.list-money-info{
                width:95%;
            }
            /*手机信息*/
            .list-top-info>ul{
                width:60%;
            }
            .list-top-info>ul>li.l-i-item{
                @include fj;
                span{
                    flex:1;
                }
                span:first-child{
                    &:after{
                        content: ':';
                     }
                }
            }
            /*费用信息*/
            .list-money-info>ul{
                @include fj;
                flex-wrap: wrap;
                li.l-i-item{
                   width:50%;
                    span:first-child{
                        margin-right:.25rem;
                    }
                    @include fj(flex-start);
                }
            }
            /*底部补充信息*/
            .supplement-con{
                .remind-con{
                    @include fj(flex-start);
                }
            }
        }
    }
    .list-item-title{
        & span{
            width: .6rem;
          }

        .item-start-time{
           margin-right: .8rem;
        }
        .item-call-address{
            margin-right: 0.1rem;
        }
        .item-contact-phone{
            margin-right: 0.25rem;
        }
        .item-call-time{
            margin-right: 0.1rem;
        }
        .item-receive-money{
            width: 0.8rem;
        }
    }

    .list-con{
    .item-start-time{
        margin-left: 0.05rem;
        margin-right: 0.2rem;
    }
    .item-call-address{
        margin-right: 0.34rem;
    }
    .item-contact-phone{
        margin-right: 0.25rem;
    }
    .item-call-time{
        margin-right: 0.1rem;
    }
    .item-receive-money{
        width: 0.8rem;
    }
    }
</style>
<!--不加scope修改样式-->
<style lang="scss">
    .mint-navbar{
        background-color:#ccc;
    }
    .list-item-title, .list-con {
        min-height:.35rem;
        .mint-cell-value {
            flex-wrap: wrap;
            line-height: 1.4;
            color:#333;
        }
        .mint-cell-wrapper {
            .mint-cell-title{
                display: none;
            }
            padding:0;
            font-size: 12px;
        }
    }
</style>
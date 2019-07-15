<template>
    <div class="repay_info_container">
        <div class='rating-page'>
            <div class="repay-info-top">
                <div class="info-item">
                    <p class="title">{{repayInfo.money.toFixed(2)}}</p>
                    <p class="desc">单位：元</p>
                </div>
                <div class="info-item">
                    <p class="title">{{repayInfo.date}}</p>
                    <p class="desc">请及时还款</p>
                </div>
            </div>
            <div class="repay-info-content">
                <div class="info-block-item" style="padding-top: .1rem">
                    <div class="info-block-item-header">
                        贷款详情
                    </div>
                    <div class="info-block-item-body">
                        <mt-cell title="贷款金额(元)" :value="loanInfoDetail.actualMoney.toFixed(2)"></mt-cell>
                        <mt-cell title="期限" :value="`${loanInfoDetail.periodNum}期`"></mt-cell>
                    </div>
                </div>
                <div class="divider-block"></div>
                <div class="info-block-item">
                    <div class="info-block-item-header">
                        <span>还款计划</span>
                        <router-link :to="{path : '/repayPlanList'}">点击查看></router-link>
                    </div>
                </div>
                <div class="divider-block"></div>
                <div class="info-block-item">
                    <div class="info-block-item-header">
                        还款银行卡
                    </div>
                    <div class="info-block-item-body">
                        <div class="info-item-cell">
                            <img class="bank-logo" :src="bankLogo" alt="">
                            <span>
                                {{cardInfo.bankName}}&nbsp;&nbsp;&nbsp;
                                <span class="little-font">{{cardInfo.cardDesc}}</span>
                            </span>
                        </div>
                        <div class="info-item-cell cell-small little-font">
                            注：还款时需确保银行卡余额充足,银行卡需开通银联支付
                        </div>
                    </div>
                </div>
            </div>
            <!--底部下一步按钮组件-->
            <next-btn
                    :enable="true"
                    text="还款"
                    @toNext="toNext"
            ></next-btn>
        </div>
    </div>
</template>
<script>
    import headTop from '@/components/header/headTop'
    import nextBtn from '@/components/common/nextBtn'
    import { MessageBox,Toast} from 'mint-ui';
    import {mapMutations,mapActions,mapGetters} from 'vuex'
    import {getLoginMsg,toLogin} from '@/service/getData'
    import { Indicator} from 'mint-ui'
    export default{
        data(){
            return {
                headTitle : '还款详情',
                bankLogo : require('../../assets/icons/bank-logo.png'),
                repayInfo : {
                   money : 3000,
                    date : '2019.08.09'
                },
                loanInfoDetail : {
                    periodNum : 3,
                    actualMoney : 3000
                },
                cardInfo : {
                    bankName : '中国工商银行',
                    cardDesc : '储蓄卡|尾号8511'
                },
            }
        },
        computed:{
           totalMoneyStr : function(){
               return this.loanInfoDetail.repayTotalMoney.toFixed(2) + `含利息(${this.loanInfoDetail.accrual})`;
           }
        },
        components : {
            headTop,
            nextBtn
        },
        mounted(){

        },
        created(){

        },
        methods: {
            toNext(){
                this.$router.push('/repayResult');
            }
        }
    }
</script>
<style lang="scss" scope>
    @import "src/style/scss/mixin";
    .info-block-item{
        background-color: #fff;
    }
    .repay-info-top{
        background: url('../../assets/icons/nav_bg.png') no-repeat;
        width:100%;
        height:2.19rem;
        background-size: 100% 100%;
        display: flex;
        color:rgba(255,255,255,.85);
        text-align: center;
        align-items: center;
        .info-item{
            flex: 1;
            .title{
                font-size: 25px;
                margin-bottom: .06rem;
            }

        }
    }
    .bank-logo{
        width: .2rem;
        height: auto;
        margin-right: .05rem;
    }
</style>
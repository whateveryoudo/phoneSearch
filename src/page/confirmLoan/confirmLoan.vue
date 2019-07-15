<template>
    <div class="loan_info_container">
        <div class='rating-page'>
            <div class="loan-info-top">
                <p class="title">借款金额(元)</p>
                <p class="money">{{money}}</p>
            </div>
            <div class="loan-info-content">
                <div class="info-block-item">
                    <div class="info-block-item-header">
                        贷款详情
                    </div>
                    <div class="info-block-item-body">
                        <mt-cell title="期限" :value="`${loanInfoDetail.periodNum}期`"></mt-cell>
                        <mt-cell title="到账金额(元)" :value="loanInfoDetail.actualMoney.toFixed(2)"></mt-cell>
                        <mt-cell title="还款总额(元)" :value="totalMoneyStr"></mt-cell>
                    </div>
                </div>
                <div class="divider-block"></div>
                <div class="info-block-item">
                    <div class="info-block-item-header">
                        收款银行卡
                    </div>
                    <div class="info-block-item-body">
                        <div class="info-item-cell">
                            <img class="bank-logo" :src="bankLogo" alt="">
                            <span>{{cardInfo.bankName}}&nbsp;&nbsp;&nbsp;{{cardInfo.cardDesc}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部下一步按钮组件-->
            <next-btn
                    :enable="true"
                    text="确认借款"
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
                headTitle : '确认借款',
                bankLogo : require('../../assets/icons/bank-logo.png'),
                money : 3000,
                loanInfoDetail : {
                    periodNum : 3,
                    actualMoney : 3000,
                    repayTotalMoney : 3172.5,
                    accrual : 172.5
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
                this.$router.push('/repayDetail');
            }
        }
    }
</script>
<style lang="scss" scope>
    @import "src/style/scss/mixin";
    .info-block-item, .loan-info-top{
        background-color: #fff;
    }
    .loan-info-top{
        text-align: center;
        padding:.3rem 0;
        padding-bottom: .35rem;
        margin-bottom: .1rem;
        p.title{
            @include sc(14px,#bbb)
        }
        p.money{
            @include sc(25px,#000)
        }

    }
    .loan-info-content{

    }
    .bank-logo{
        width: .2rem;
        height: auto;
        margin-right: .05rem;
    }
</style>
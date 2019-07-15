<template>
    <div class="plan_list_container">
        <div class='rating-page'>
            <div class="plan-list-wrapper">
                <ul>
                    <li v-for="item in loanList" class="list-item">
                        <div class="prefix"></div>
                        <div class="list-item-content">
                            <div class="right-info-item">第{{item.period}}期</div>
                            <div class="right-info-item">
                                <span>还款金额￥{{item.money.toFixed(2)}}</span>
                                <span>{{payStatusMap[item.status]}}</span>
                            </div>
                            <div class="right-info-item">应还日期{{item.repayDate}}</div>
                        </div>
                    </li>
                </ul>
            </div>
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
                payStatusMap : ['待还清','已还清'],
                loanList : [
                    {period : 1,status : 0,money : 1057.5,repayDate : '2019.08.09'},
                    {period : 2,status : 0,money : 1057.5,repayDate : '2019.09.09'},
                    {period : 3,status : 0,money : 1057.5,repayDate : '2019.10.09'},
                ],
                headTitle : '分期账单'
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

            }
        }
    }
</script>
<style lang="scss" scope>
    @import "src/style/scss/mixin";
      .plan-list-wrapper{
          background: #fff;
          color:#333;
          .list-item{
              display: flex;
              div.prefix{
                  position: relative;
                  width:5%;
                  margin-right: .06rem;
                  &:after{
                      content: ' ';
                      width:.1rem;
                      height:.1rem;
                      border:1px solid $color-primary;
                      border-radius: 50%;
                      position: absolute;
                      top:7px;
                  }
              }
              div.list-item-content{
                  width:95%;
                  .right-info-item{
                      height:30px;
                      line-height: 30px;
                      @include fj();
                  }
              }
              padding:.1rem .15rem;
          }
      }
</style>
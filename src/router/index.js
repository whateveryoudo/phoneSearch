import Vue from 'vue'
import Router from 'vue-router'

const userLogin = r => require.ensure([], () => r(require('../page/login/userLogin.vue')), 'userLogin');
const deal = r => require.ensure([], () => r(require('../page/deal/deal.vue')), 'deal');
const confirmLoan = r => require.ensure([], () => r(require('../page/confirmLoan/confirmLoan.vue')), 'confirmLoan');
const repayDetail = r => require.ensure([], () => r(require('../page/repayDetail/repayDetail.vue')), 'repayDetail');
const repayPlanList = r => require.ensure([], () => r(require('../page/repayPlanList/repayPlanList.vue')), 'repayPlanList');
const repayResult = r => require.ensure([], () => r(require('../page/repayResult/repayResult.vue')), 'repayResult');



const yd_login = r => require.ensure([], () => r(require('../page/login/yd_login')), 'yd_login');
const search_login = r => require.ensure([], () => r(require('../page/searchLogin/searchLogin')), 'searchLogin');
const sendStatus = r => require.ensure([], () => r(require('../page/sendStatus/sendStatus')), 'sendStatus');
const Test = r => require.ensure([], () => r(require('../page/test/test.vue')), 'sendStatus');
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'userLogin',
      component: userLogin
    },
      {
          path: '/test',
          name: '测试界面',
          component: Test
      },
      {
          path: '/confirmLoan',
          name: 'confirmLoan',
          component: confirmLoan
      },
      {
          path: '/repayDetail',
          name: 'repayDetail',
          component: repayDetail
      },
      {
          path: '/repayPlanList',
          name: 'repayPlanList',
          component: repayPlanList
      },
      {
          path: '/repayResult',
          name: 'repayResult',
          component: repayResult
      },
      {
          path: '/deal/:type',
          name: 'deal',
          component: deal
      }
  ]
})

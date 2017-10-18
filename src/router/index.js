import Vue from 'vue'
import Router from 'vue-router'

const yd_login = r => require.ensure([], () => r(require('../page/login/yd_login')), 'yd_login');
const search_login = r => require.ensure([], () => r(require('../page/searchLogin/searchLogin')), 'searchLogin');
const sendStatus = r => require.ensure([], () => r(require('../page/sendStatus/sendStatus')), 'sendStatus');
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: yd_login
    },
      {
          path: '/searchLogin',
          name: 'searchLogin',
          component: search_login
      },
      {
          path: '/sendStatus',
          name: 'sendStatus',
          component: sendStatus
      },
  ]
})

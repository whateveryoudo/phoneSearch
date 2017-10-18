import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
const yd_login = r => require.ensure([], () => r(require('../page/login/yd_login')), 'yd_login');
const search_login = r => require.ensure([], () => r(require('../page/searchLogin/searchLogin')), 'searchLogin');
const sendStatus = r => require.ensure([], () => r(require('../page/sendStatus/sendStatus')), 'sendStatus');


const agreement = r => require.ensure([], () => r(require('../page/agreement')), 'agreement');


Vue.use(Router)
export default new Router({
  routes: [
      {
          path: '/',
          name: 'home',
          component: home
      },
    {
      path: '/yd_login',
      name: 'yd_login',
      component: yd_login,
        children : [
            {
                path : 'agreement',
                component : agreement
            }
        ]
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

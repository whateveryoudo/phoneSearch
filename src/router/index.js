import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home');
//移动业务
const yd_login = r => require.ensure([], () => r(require('../page/YD_pages/login/login')), 'yd_login');
const search_login = r => require.ensure([], () => r(require('../page/YD_pages/searchLogin/searchLogin')), 'searchLogin');
const sendStatus = r => require.ensure([], () => r(require('../page/YD_pages/sendStatus/sendStatus')), 'sendStatus');
//电信业务
const dx_login = r => require.ensure([], () => r(require('../page/DX_pages/login/login')), 'dx_login');
const dx_search_login = r => require.ensure([], () => r(require('../page/DX_pages/searchLogin/searchLogin')), 'dx_search_login');
const dx_sendStatus = r => require.ensure([], () => r(require('../page/DX_pages/sendStatus/sendStatus')), 'dx_sendStatus');
const pwdReset = r => require.ensure([], () => r(require('../page/DX_pages/pwdReset/pwdReset')), 'pwdReset');

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
      {
          path: '/dx_login',
          name: 'dx_login',
          component: dx_login,
          children : [
              {
                  path : 'agreement',
                  component : agreement
              }
          ]
      },
      {
          path: '/dx_search_login',
          name: 'dx_search_login',
          component: dx_search_login
      },
      {
          path: '/dx_sendStatus',
          name: 'dx_sendStatus',
          component: dx_sendStatus
      },
      {
          path: '/pwdReset',
          name: 'pwdReset',
          component: pwdReset
      },
  ]
})

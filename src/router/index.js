import Vue from 'vue'
import Router from 'vue-router'

const yd_login = r => require.ensure([], () => r(require('../page/login/yd_login')), 'yd_login');
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: yd_login
    }
  ]
})

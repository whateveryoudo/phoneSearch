import Vue from 'vue'
import Router from 'vue-router'
import config from '../../config';
import routerData from './routerData'

Vue.use(Router)
const whiteListPath = ['/deal/1', '/deal/2', '/regist']; // TODO正则匹配
export const router = new Router({
  routes: routerData
})

// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : config.APP_NAME;
  if (whiteListPath.includes(to.path)) {
    next()
  } else {
    if (sessionStorage.getItem('token')) {
      if (to.path === '/login') {
        sessionStorage.removeItem('token')
      }
      next()
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
})

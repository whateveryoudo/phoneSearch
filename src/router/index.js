import Vue from 'vue'
import Router from 'vue-router'
import routerData from './routerData'

Vue.use(Router)
export const router = new Router({
  routes: routerData
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('token')) {
    if (to.path === '/login') {
      sessionStorage.removeItem('token');
    }
    next();
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import register from '@/views/register'
import index from '@/views/index'

Vue.use(Router)

var router = new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/register',
    name: 'register',
    component: register
  }, {
    path: '/index',
    name: 'index',
    meta: {
      requireAuth: true //判断是否需要登录
    },
    component: index
  }]
})

export default router;
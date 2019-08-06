import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
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
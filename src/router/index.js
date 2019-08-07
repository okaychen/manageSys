import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'

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

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
//     console.log('需要登录');
//     if (localStorage.token) { // 判断当前的token是否存在 ； 登录存入的token
//       next();
//     } else {
//       next({
//         path: '/',
//         query: {
//           redirect: to.fullPath
//         } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next();
//   }
// });

export default router;
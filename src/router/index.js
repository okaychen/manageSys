import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

var router = new Router({
	routes: [{
		path: '/',
		redirect: '/login'
	}, {
		path: '/login',
		name: 'login',
		component: resolve => require(['@/views/login'], resolve),
	}, {
		path: '/register',
		name: 'register',
		component: resolve => require(['@/views/register'], resolve)
	}, {
		path: '/index',
		name: 'index',
		component: resolve => require(['@/views/index'], resolve)
	}, {
		path: '/articleList',
		name: 'articleList',
		component: resolve => require(['@/views/articleList'], resolve)
	}]
})

export default router;
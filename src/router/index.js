import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import login from '@/views/login'
import register from '@/views/register'
import index from '@/views/index'

Vue.use(Router)
Vue.use(VueResource)

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
		component: index
	}]
})

export default router;
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/views/login')), 'login');
const register = r => require.ensure([], () => r(require('@/views/register')), 'register');
const index = r => require.ensure([], () => r(require('@/views/index')), 'index');
const articleList = r => require.ensure([], () => r(require('@/views/articleList')), 'articleList');

const router = new Router({
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
	}, {
		path: '/articleList',
		name: 'articleList',
		component: articleList
	}]
})

export default router;
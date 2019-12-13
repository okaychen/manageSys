import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const login = r => require.ensure([], () => r(require('@/views/login')), 'login');
const register = r => require.ensure([], () => r(require('@/views/register')), 'register');
const manage = r => require.ensure([], () => r(require('@/views/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const articleList = r => require.ensure([], () => r(require('@/views/articleList')), 'articleList');

const routes = [{
	path: '/',
	component: login
}, {
	path: '/register',
	component: register
}, {
	path: '/manage',
	component: manage,
	children: [{
		path: '',
		component: home,
		meta: []
	}, {
		path: '/articleList',
		component: articleList,
		meta: ['数据列表', '文章列表']
	}]
}]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
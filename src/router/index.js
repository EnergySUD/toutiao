import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect:'/index'
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/Index.vue')
	},
	{
		path: '/video',
		name: 'video',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Video.vue')
	},
	{
		path: '/top',
		name: 'top',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Top.vue')
	},
	{
		path: '/cinema',
		name: 'cinema',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Cinema.vue')
	},
	{
		path: '/me',
		name: 'me',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/Me.vue')
	},
	{
		path: '/*',
		redirect:'/index'
	},
]

const router = new VueRouter({
	routes
})

export default router

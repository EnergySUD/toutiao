import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' // axios http请求库

axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
Vue.prototype.$http = axios

Vue.config.productionTip = false

process.env.NODE_ENV === 'development' && require('../mock/mock.js'); // 开发环境引入mock

//弹出框禁止滑动
Vue.prototype.stopScroll = function() {
	let mo = function(e) {
		e.preventDefault()
	}
	document.body.style.overflow = 'hidden'
	document.addEventListener('touchmove', mo, false) // 禁止页面滑动
}

//弹出框可以滑动
Vue.prototype.canScroll = function() {
	let mo = function(e) {
		e.preventDefault()
	}
	document.body.style.overflow = '' // 出现滚动条
	document.removeEventListener('touchmove', mo, false)
}

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

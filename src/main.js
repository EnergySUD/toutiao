import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios' // axios http请求库

axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
Vue.prototype.$http = axios

Vue.config.productionTip = false

process.env.NODE_ENV === 'development' && require('../mock/mock.js');// 开发环境引入mock


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

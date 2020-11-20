import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Date扩展日期格式化方法
require('./utils/nativeExtends.js')

// axios
import instance from './http'

// reset css
// rem

import './style/reset.css'
import 'lib-flexible/flexible'

console.log(process.env)
// 移动端调试插件,真机调试时
if (process.env.NODE_ENV === 'development' && process.env.VUE_APP_CONSOLE) {
  const Vconsole = require('vconsole')
  new Vconsole()
}

// 日期插件
const dayjs = require('dayjs')
// 引入dayjs模块
// const advancedFormat = require('dayjs/plugin/advancedFormat')
// dayjs.extend(advancedFormat)
Vue.prototype.dayjs = dayjs

Vue.config.productionTip = false

// axios挂载vue原型
Vue.prototype.$http = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

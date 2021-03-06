import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
  el: '#app',
  render: h => h(App),
})
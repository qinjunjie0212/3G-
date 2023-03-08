import Vue from 'vue'
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  // 将组件放进容器
  render: h => h(App),
}).$mount('#app')

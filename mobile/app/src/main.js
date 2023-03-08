import Vue from 'vue'
import App from './App.vue'

// import 'lib-flexible'

//引入路由
import router from '@/router';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由
  router
}).$mount('#app')

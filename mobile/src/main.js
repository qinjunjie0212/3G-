import Vue from 'vue'
import App from './App.vue'
import store from './store'

var axios = require('axios') //引用axios
    // axios.defaults.baseURL = 'http://127.0.0.1:3007'//设置一个基础请求地址
Vue.prototype.$axios = axios // 全局注册，之后可在其他组件中通过 this.$axios 发送数据

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    let ret = ''
    for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
}]


//然后再修改原型链
Vue.prototype.$axios = axios


//引入路由
import router from '@/router';


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //注册路由
    router,
    store
}).$mount('#app')
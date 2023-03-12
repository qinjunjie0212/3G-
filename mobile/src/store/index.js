import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state() {
        return {
            loginState: 5,
            loginToken: '',
        }
    },
    mutations: {
        updateLogin(data, content) {
            data.loginState = content.status
            data.loginToken = content.token
        }
    }
})
export default store
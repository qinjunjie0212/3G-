import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
    state() {
        return {
            loginState: -1,
            loginToken: '',
            status: -1,
        }
    },
    mutations: {
        updateLogin(data, content) {
            data.loginState = content.status
            data.loginToken = content.token
        },
        updatestatus(data, content) {
            console.log('content', content);
            data.status = content.status
        }
    }
})
export default store
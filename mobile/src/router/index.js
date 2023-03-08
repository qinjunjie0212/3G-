//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import About from '@/pages/About'
import Web from '@/pages/Group/Web'
import Ios from '@/pages/Group/Ios'
import Server from '@/pages/Group/Server'
import Android from '@/pages/Group/Android'
import GGG from '@/pages/Group/GGG'
import Infos from '@/pages/Infos'
import Info from '@/pages/Infoss/Info'
import State from '@/pages/Infoss/State'

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            meta: { show: true },
            children: [ //通过children配置子级路由
                {
                    path: 'web', //此处一定不要写：/news
                    component: Web,
                    meta: { show: false }

                },
                {
                    path: 'ios',//此处一定不要写：/message
                    component: Ios,
                    meta: { show: false }

                },
                {
                    path: 'android', //此处一定不要写：/news
                    component: Android,
                    meta: { show: false }

                },
                {
                    path: 'server', //此处一定不要写：/news
                    component: Server,
                    meta: { show: false }

                },
                {
                    path: '3g', //此处一定不要写：/news
                    component: GGG,
                    meta: { show: false }
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/infos',
            component: Infos,
            meta: { isShow: true },
            children: [ //通过children配置子级路由
                {
                    path: 'info', //此处一定不要写：/news
                    component: Info,
                    meta: { isShow: false }
                },
                {
                    path: 'state', //此处一定不要写：/news
                    component: State,
                    meta: { isShow: false }
                }
            ]
        },
        //重定向，再项目进行运行时，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: '/home',
            meta: {
                show: true
            }
        }
    ]
})


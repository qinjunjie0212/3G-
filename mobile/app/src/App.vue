<template>
  <div>
    <!-- <Home/> -->
    <router-view></router-view>
    <!-- 书写路由组件出口的地方 -->
    <!-- <router-view></router-view> -->
    <!-- 第一种隐藏组件的方式 -->
    <!-- 通过路由的$route属性上的path路径值进行判断Footer的显示和隐藏 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path==='/search'"></Footer> -->
  </div>
</template>

<script>
import Home from './pages/Home/index.vue'
export default {
  name:'App',
  components:{
    Home
  }
}
</script>

<style>

</style>
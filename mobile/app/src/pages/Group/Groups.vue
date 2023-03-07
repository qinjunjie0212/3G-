<template>
  <div>
    <h1>我是详情页</h1>
    <router-link to="/about/ios">ios</router-link>
    <br>
    <router-link to="/about/web">web</router-link>
    <br>
    <router-link to="/about/android">android</router-link>
    <br>
    <router-link to="/about/server">server</router-link>
    <br>
    <router-link to="/about/3g">3g</router-link>
    <br><br>
    <router-link to="/login">next</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Ios from './../Group/Ios.vue'
import Web from './../Group/Web.vue'
import Server from './../Group/Server.vue'
import Android from './../Group/Android.vue'
import GGG from './../Group/GGG.vue'
export default {
    name:'About',
    components:{Ios,Web,Server,GGG,Android}   
}
</script>

<style>

</style>
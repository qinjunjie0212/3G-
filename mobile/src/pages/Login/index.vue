<template>
    <div>
      <router-link to="/About">返回</router-link>
      <h1>我是登录</h1>
      <router-link to="/Infos">登录成功，跳转到个人信息主页面</router-link>
      <br><br>
      <router-link to="/register">还未报名，点击这里</router-link>
    </div>
  </template>
  
  <script>
  import Infos from './../Infos/index.vue'
  import About from './../About/index.vue'
  import Register from './../Register/index.vue'
  export default {
  name:'login',
  components:{About,Register,Infos}
  }
  </script>
  
  <style>
  
  </style>
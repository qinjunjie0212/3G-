<template>
  <div>
    <h1>我是首页</h1>
    <router-link to="/about">next</router-link>
  </div>
</template>

<script>
import About from './../About/index.vue'

export default {
  name:'Home',
  components:{
    About
  }
}
</script>

<style>

</style>
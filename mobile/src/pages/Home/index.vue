<template>
  <div>
    <router-link replace to="/about">
      <img src="./../../assets/img/HomePage.jpg" alt="">
    </router-link>
    <span>点击任意位置继续</span>
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
<style scoped>
  img{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -999;
  }
  span{
    position: fixed;
    bottom: 1rem;
    font-size: 0.75rem;
    width: 10rem;
    left: 50%;
    margin-left: -5rem;
    text-align: center;
    z-index: 99999;
  }
</style>
  
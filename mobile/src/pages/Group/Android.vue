<template>
  <div>
    <router-link class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
    <h1>我是Android</h1>
  </div>
</template>

<script>

export default {
name:'Android'
}
</script>

<style scoped>
.last img{
  width: 2.3333rem;
    height: 2.3333rem;
    position: absolute;
    left: 0.4533rem;
    top: 1rem;
}
h1{
  position: absolute;
  right: 1.9rem;
  top: 14rem;
}
.back{
  position: absolute;
  z-index: 999;
}
</style>
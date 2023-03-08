<template>
    <div>
      <router-link class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <h1>我是server</h1>
      <!-- <router-link to="/About">返回</router-link> -->
    </div>
  </template>
  
  <script>
  
  export default {
  name:'Server'
  }
  </script>
  
  <style scoped>
  .last img{
  width: 2.3333rem;
    height: 2.3333rem;
    position: absolute;
    left: 17px;
    top: 1rem;
}
h1{
  position: absolute;
  right: 1.9rem;
  top: 14rem;
}
  </style>
<template>
    <div>
      <router-link class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <h1>Server</h1>
      <div class="box glass-container animate__animated animate__backInLeft">
        <div class="introduce">后端开发，也可以称为服务器端开发，是对用户看不到的程序后端部分的开发，负责处理前端的请求，进行逻辑处理和数据交互，涉及到mysql、redis、 后台语言及相关框架等相关知识。后端开发需要考虑底层业务逻辑的实现、数据的保存与读取、平台的稳定性和性能等。</div>
      </div>
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
    top: 5rem;
    left: 2.2rem;
    font-family: 'winmantun23001356b6000b824eb5';
    font-size: 4rem;
    color: #efefef;
    text-shadow: 0 0 0.5em #979896, 0 0 0.2em #5c5c5c;
}
.introduce{
  width: 16.333rem;
    font-size: 19px;
    font-weight: 600;
    position: absolute;
    top: 0.9rem;
    left: 0.4rem;
    letter-spacing: 0.01rem;
    line-height: 1.5rem;
    color: #121415;
    text-indent: 0.5rem;
}
.glass-container{
width: 17rem;
    height: 20rem;
    position: relative;
    top: 12rem;
    left: 1.5rem;
    border-radius: 10px; 
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    background-color: rgba(220,219,220, 0.098);
    box-shadow: rgb(0 0 0 / 30%) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
}
  </style>
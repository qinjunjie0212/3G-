<template>
    <div>
      <router-link replace class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <h1>Web</h1>
      <div class="box glass-container animate__animated animate__backInLeft">
        <div class="introduce">Web组致力于以HTML/HTML5、CSS/CSS3、Less、Javascript、jQuery、Ajax为主的Web前端开发，和以Node.js、PHP、JSP、ASP.NET为主的后台开发。 如今已上线项目有手机版网站《西邮图书馆》、《高校成绩》，校园综合网站《MyCollege》（包含有易校园（校园二手市场）、论坛、资料库、订餐吧、 PC浏览器版成绩单和图书查询、学生会、实验室等模块）正在进行中。</div>
      </div>
      <!-- <router-link to="/About">返回</router-link> -->
    </div>
  </template>
  
  <script>
  export default {
  name:'Web'
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
<template>
    <div>
      <router-link replace class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <!-- <router-link to="/About">返回</router-link> -->
      <h1>IOS</h1>
      <div class="box glass-container special animate__animated animate__backInLeft">
        <div class="introduce">IOS致力基于IOS系统的移动应用开发，主要使用 Objective-C 语言进行开发。 有着先进的IOS开发设备，积极活跃的开发团队，团队成员互相合作，共同进步，积极参加各类竞赛。也正因如此，近几年来我们都取得了非常可观的成绩， 如今已经有玩转西邮，西邮成绩，西邮图书馆，近健步行等多个APP上线，除此之外我们的就业率更是达到了百分之百，并且都是就职于腾讯，百度，爱奇艺， 搜狐等大型互联网公司。怀揣着对IOS开发的无限热情，我们将继续努力，共同进步。</div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
  name:'IOS'
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
  .special{
    height: 24rem;
    top: 10rem;
  }
</style>
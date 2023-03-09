<template>
  <div>
    <router-link class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
    <h1>Android</h1>
    <div class="box glass-container">
        <div class="introduce">Android组 利用安卓系统的开放性，进行了各种各样的移动应用开发，是实验室中成果最多、规模最大的开发组。Android开发组多次参加多种大赛， 并获得了不错的成绩！应用《酷步》，曾参加全国级大赛并获奖，《西邮图书借阅系统》率先发布， 《iXiyou》整合了多种与西邮校园相关的功能，方便了西邮学生。Android开发组已走出了多位优秀的学长、学姐，并就职于国内知名企业</div>
      </div>
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
    left: 17px;
    top: 1rem;
}
h1{
  position: absolute;
    top: 5rem;
    left: 2.2rem;
    font-family:'jdzhonyuanjian356b36141d24eb5';
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
    left: 2rem;
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
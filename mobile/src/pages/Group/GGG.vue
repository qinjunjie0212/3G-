<template>
    <div>
      <router-link replace class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <h1>3G</h1>
      <div @click="intrShow" class="onea com">3G简介</div>
      <div @click="intrJob" class="twob com">就业介绍</div>
      <div class="box glass-container animate__animated animate__backInLeft">
        <div class="introduce" v-show="introduceShow">西安邮电大学移动应用开发实验室，亦称西安邮电大学3G实验室。创建于2011年，专注于移动应用开发。位于西安邮电大学长安校区东区教学楼一层FZ155教室，西邮IT应用型人才实训中心。</div>
        <div class="job" v-show="jobShow">我是就业</div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
  name:'GGG',
  data(){
    return {
      introduceShow:true,
      jobShow:false
    }
  },
  methods:{

    intrShow(){
      this.introduceShow=true;
      this.jobShow=false;
      
    },
    intrJob(){
      this.jobShow=true;
      this.introduceShow=false;
    }
    
  }
  }
  </script>
  
  <style scoped>
   .com:active {
      /* background-color: #908a8a; */
      border-bottom: 4px solid #080808;
    }
.com{
  border-bottom: 4px solid #878787;
    border-radius: 5px;
    color: #515151;
}
.onea{
    text-align: center;
    width: 6rem;
    height: 2rem;
    font-size: 1.5rem;
    top: 11.5rem;
    left: 3rem;
    position: absolute;
  }
  .twob{
    text-align: center;
    width: 6rem;
    height: 2rem;
    font-size: 1.5rem;
    top: 11.5rem;
    left: 11rem;
    position: absolute;
  }
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
.job{
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
    /* top: 12rem; */
    top: 14rem;
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
<template>
    <div>
      <router-link replace class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
      <h1>3G</h1>
      <div @click="intrShow" class="onea com">3G简介</div>
      <div @click="intrJob" class="twob com">就业介绍</div>
      <div class="box glass-container animate__animated animate__backInLeft">
        <div class="introduce" v-show="introduceShow">西安邮电大学移动应用开发实验室，亦称西安邮电大学3G实验室。 创建于2011年，隶属于西安邮电大学计算机学院，专注于移动应用开发。 2012年被谷歌授予“Android人才培养示范基地” 实验室位于西安邮电大学长安校区东区教学楼一层FZ155教室，西邮IT应用型人才实训中心。 实验室不仅为同学们提供了丰富的软、硬件资源，包括： 120m2配备空调、独立桌子、靠背椅、饮水机的干净、整洁、舒适的学习环境。 公共图书角、免费学习资料、科学上网、共享打印设备、投影仪等便利的学习资源。 学习路线、周报或圆桌分享、官网wiki 的学习分享、定时的讲课、老师指导的独特学习方式。 毕业学长学姐的工作经验指导、春招秋招的内推直推优势的就业资源。 并且一直以“传、帮、带”的学习方式，秉承“用代码编织未来”的宗旨，每年以百分百的就业率， 源源不断的为国内著名互联网公司输送优秀人才。目前由Android、IOS、Web及后台4个小组组成~</div>
        <div class="job" v-show="jobShow">2013、2014级62名成员在保持百分之百就业,大部分成员入职于腾讯、百度、阿里、网易、京东、美团、58、头条等国内著名互联网公司。也有少部分成员考入到自己心仪的学校，继续深造学习。 实验室成员积极参加各种互联网比赛，且大都获得了优异的成绩。其中实验室六名成员在全国Google开发者大赛中摘得银奖、铜奖；三名同学在爱奇艺大赛中获得最佳创意奖并获得暑假实习资格；一名成员获得首届解放者号比赛的优秀奖，多名成员参加蓝桥杯全国赛、省赛，并取得不错的成绩；也有实验室成员参加了Google 暑期特训营、Google开发者大会等大型活动。</div>
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
    /* border-radius: 5px; */
    color: #515151;
}
.onea{
    text-align: center;
    width: 5.4rem;
    height: 2rem;
    font-size: 1.5rem;
    top: 11.5rem;
    left: 3rem;
    position: absolute;
  }
  .twob{
    text-align: center;
    width: 6.4rem;
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
    overflow-y:auto;
}
  </style>
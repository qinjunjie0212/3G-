<template>
  <div class="common">
        <img class="one" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="two" src="./../../assets/img/浅灰树.png" alt="">
        <img class="three" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="four" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="five" src="./../../assets/img/灰色圆点.png" alt="">
    <Groups v-show="$route.meta.show"/>
    <router-view></router-view>
  </div>
</template>

<script>

import Groups from './../Group/Groups'
export default {
    name:'About',
    components:{Groups}   
}
</script>

<style scoped>
.back{
  position: absolute;
  z-index: 999;
}
body{
    background-color:#f8f8f8;
}
.common {
    position: relative
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
    color: slategrey;
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
.one {
    position: absolute;
    left: -0.8667rem;
    top: -0.2rem;
    width: 9.8rem;
    height: 13.3333rem;
    opacity: .6;
}

.two {
    position: absolute;
    width: 17.5333rem;
    height: 21.5333rem;
    left: 9.2667rem;
    top: 9.2667rem;
    opacity: .6;
}

.three {
    position: absolute;
    left: -5.8667rem;
    top: 23.8rem;
    width: 13.8rem;
    height: 19.3333rem;
    opacity: .6;
}

.four {
    position: absolute;
    left: 6.1333rem;
    top: 43.8rem;
    width: 15.8rem;
    height: 21.3333rem;
    opacity: .6;
}

.five {
    position: absolute;
    left: 18.1333rem;
    top: -12.2rem;
    width: 15.8rem;
    height: 21.3333rem;
    opacity: .6;
}

</style>
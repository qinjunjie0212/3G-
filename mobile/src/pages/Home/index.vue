<template>
  <div class="box">
    <router-link replace to="/about">

    <img src="./../../assets/img/背景.jpeg" alt="">
        <img src="./../../assets/img/三角.png" alt="">
        <img src="./../../assets/img/恐龙6.png" class="c8" alt="">
        <img src="./../../assets/img/恐龙2.png" alt="">
        <img src="./../../assets/img/恐龙3.png" alt="">
        <img src="./../../assets/img/恐龙4.png" alt="">
        <img src="./../../assets/img/恐龙5.png" alt="">
        <img src="./../../assets/img/3G.png" alt="">
<!--         <img src="./../../assets/img/深圆点.png" alt="">
        <img src="./../../assets/img/灰色圆点.png" alt="">
        <img src="./../../assets/img/灰色三角.png" alt=""> -->
        <img src="./../../assets/img/浅灰圆.png" class="c1" alt="">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="c2">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="c3">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="c4">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="c5">
        <img src="./../../assets/img/骷髅头.png" alt="" class="bone">
        <img src="./../../assets/img/深圆点.png" alt="" class="c6">
        <img src="./../../assets/img/浅灰三角.png" alt="" class="c7">
    </router-link>
    <span>点击任意位置继续</span>
    <img class="shuiyin" src="./../../assets/img/水印.png" alt="">
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
.bone{
  width: 6rem;
    /* height: 3rem; */
    top: 7rem;
    left: 7rem;
}
.shuiyin{
  margin-top: 28rem;
    margin-left: 1.3rem;
    width: 6rem;
    z-index: 999;
}
div {
  margin-top: 4rem;
    font: weight 50px; ;
    /* background: #fafafa; */
    position: relative;
    text-align: center;
    height:32rem;
}
img{
    position: absolute;
}
img:nth-child(1){
    z-index: -2;
    position: relative;
    width: 0;
}
/* 黑三角 */
img:nth-child(2){
  width: 32%;
    left: 1rem;
    top: 17.3rem;
}
.c8{
  width: 40%;
    left: 9rem;
    top: rem;
}
/* 恐龙6 */
/* img:nth-child(3){
    width: 40%;
    left: 9rem;
    top: rem;
} */
/* 恐龙2 */
img:nth-child(4){
    width: 40%;
    right: 0;
    bottom: 1rem;
    z-index: 999;
}
/* 恐龙3 */
img:nth-child(5){
    width: 31%;
    right: -2rem;
    z-index: 2;
    top: 7rem;
}
/* 恐龙4 */
img:nth-child(6){
  width: 59%;
    transform: rotateY(180deg);
    left: -6rem;
    top: -2rem;
    z-index: 999;
}
/* 恐龙5 */
img:nth-child(7){
  width: 85%;
    left: -10rem;
    bottom: -1rem;
}
/* 3G */
img:nth-child(8){
  width: 75%;
    left: 2.3rem;
    bottom: 13rem;
    z-index: 999;
}
/* 圆点深 */
/* img:nth-child(9){
    width: 20%;
    right: 1rem;
    bottom: 7rem;
    z-index: 999;
} */
/* 灰色大圆点，右下角 */
/* img:nth-child(10){
    transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 150%;
    right:-20rem;
    top:2rem;
} */

/* 左上角灰色三角 */
/* img:nth-child(11){
  transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 33%;
    left: 3rem;
    top: 3rem;
    z-index: -999;
    opacity: 0.3;
  } */
  .c1{
    top: -3.4rem;
    left: 11.2rem;
    width: 7rem;
    z-index: -1;
  }
  .c2{
    top: 8.3rem;
    left: 13rem;
    width: 2rem;
}
.c3{
  top: 11rem;
    left: -2.3rem;
    width: 4rem;
}
.c4{
  top: 19rem;
    left: 1.8rem;
    width: 3.5rem;
    z-index: -1;
}
.c5{
  top: 10rem;
    left: 10rem;
    width: 21rem;
}
.c6{
  width: 26%;
    left: 14rem;
    top: 18.3rem;
}
.c7{
  width: 26%;
    left: 4rem;
    top: 2.3rem;
    z-index: -1;
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
  
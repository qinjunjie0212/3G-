<template>
  <div class="box">
    <router-link replace to="/about">

    <img src="./../../assets/img/背景.jpeg" alt="">
        <img src="./../../assets/img/三角.png" alt="">
        <img src="./../../assets/img/恐龙6.png" alt="">
        <img src="./../../assets/img/恐龙2.png" alt="">
        <img src="./../../assets/img/恐龙3.png" alt="">
        <img src="./../../assets/img/恐龙4.png" alt="">
        <img src="./../../assets/img/恐龙5.png" alt="">
        <img src="./../../assets/img/3G.png" alt="">
        <img src="./../../assets/img/深圆点.png" alt="">
        <img src="./../../assets/img/灰色圆点.png" alt="">
        <img src="./../../assets/img/灰色三角.png" alt="">
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
.shuiyin{
  margin-top: -2.7rem;
  margin-left: -8rem;
  z-index: 999;
}
.bone {
  width: 200px;
  height: 200px;
}
.box {
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
    width: 25%;
    left: 2rem;
    top: 20rem;
}
/* 恐龙6 */
img:nth-child(3){
    width: 40%;
    left: 9rem;
    top: rem;
}
/* 恐龙2 */
img:nth-child(4){
    width: 40%;
    right: 0;
    bottom: 1rem;
    z-index: 999;
}
/* 恐龙3 */
img:nth-child(5){
    width: 30%;
    right: -2rem;
    z-index: 2;
    top: 7rem;
}
/* 恐龙4 */
img:nth-child(6){
    width: 50%;
    transform: rotateY(180deg);
    left: -5rem;
    top: 5rem;
    z-index: 999;
}
/* 恐龙5 */
img:nth-child(7){
    width: 80%;
    left: -9rem;
    bottom: -1rem;
}
/* 3G */
img:nth-child(8){
    width: 75%;
    left: 3.5rem;
    bottom: 12.5rem;
    z-index: 999;
}
/* 圆点深 */
img:nth-child(9){
    width: 20%;
    right: 1rem;
    bottom: 7rem;
    z-index: 999;
}
/* 灰色大圆点，右下角 */
img:nth-child(10){
    transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 150%;
    right:-20rem;
    top:2rem;
}

/* 左上角灰色三角 */
img:nth-child(11){
    transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 30%;
    left: 3rem;
    top:3rem;
    z-index: -999;
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
  
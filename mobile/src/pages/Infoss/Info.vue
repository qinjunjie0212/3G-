<template>
  <div class="main">
    <router-link to="/infos">
      <img src="./../../assets/img/右箭头.png" alt="" class="paw">

    </router-link>
        <br>
        <h1>Personal Information</h1>
            <div class="tittles">  姓名Name:</div>
            <div class="tittles">  手机号Phone :</div>
            <div class="tittles">  QQ :</div>
            <div class="tittles">  专业班级Class :</div>
            <div class="tittles">  意向Direction :</div>
        <!-- <br> -->
        <!-- <br> -->
        <!-- <br> -->
        <img src="./../../assets/img/恐龙5.png" alt="" class="dinosaur">
        <img src="./../../assets/img/太阳.png" alt="" class="sun">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle1">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle2">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle3">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle4">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle5">
        <img src="./../../assets/img/浅灰圆.png" alt="" class="circle6">
  </div>
</template>

<script>
export default {
name:'Info'
}
</script>

<style>

.main{
  margin-top: 3rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.9rem;
}
.tittles{
    border: 1px solid rgb(134, 91, 11);
    width: 15rem;
    margin: 1rem auto;
    text-align: left;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin-top: 1.5rem;
}
.dinosaur{
    z-index: 0;
    position: absolute;
    bottom: 3.2rem;
    left:56%;
    width: 10rem;
    margin-left: -2rem;
}
.sun{
    z-index: -11;
    position: absolute;
    top: 3rem;
    width: 10rem;
    left: 10rem;
    opacity: 0.6;
}
.paw{
  transform: rotateY(180deg);
    position: fixed;
    top: 1rem;
    width: 3rem;
    left: 1rem;
}
.circle1{
    position: absolute;
    bottom: 5.3333rem;
    z-index: -10;
    width: 9rem;
    left: -3.5rem;
}
.circle2{
    position: absolute;
    bottom: 17rem;
    z-index: -10;
    width: 2.4rem;
    left: 0rem;
}
.circle3{
    position: absolute;
    bottom: 0rem;
    z-index: -10;
    width: 4rem;
    left: 0rem;
}
.circle4{
    position: absolute;
    bottom: 3.3333rem;
    z-index: -10;
    width: 2rem;
    left: 6.5rem;
}
.circle5{
    position: absolute;
    bottom: 7.8rem;
    z-index: -10;
    width: 3.5rem;
    left: 7.6rem;
}
.circle6{
    position: absolute;
    bottom: -6rem;
    z-index: -10;
    width: 12rem;
    right: -3rem;
    z-index: -5;
    opacity: 0.8;
}
h1{
  /* position: absolute; */
  /* top: 2.1333rem; */
  text-align: center;
}
</style>

<template>
  <div class="main">
    <router-link to="/infos" replace>
      <img src="./../../assets/img/右箭头.png" alt="" class="paw">

    </router-link>
        <br>
        <h1>Personal Information</h1>
            <div class="tittles">  姓名/Name:</div>
            <div class="tittles">  手机号/Phone :</div>
            <div class="tittles">  QQ号/QQnumber :</div>
            <div class="tittles">  专业班级/Class :</div>
            <div class="tittles">  意向/Direction :</div>
        <br>
        <br>
        <br>
        <img src="./../../assets/img/3G恐龙.png" alt="" class="_3G">
        <img src="./../../assets/img/太阳.png" alt="" class="sun">
        <img src="./../../assets/img/灰色圆点.png" alt="" class="crl">
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
}
._3G{
    z-index: -11;
    position: absolute;
    bottom: 0;
    left:50%;
    width: 20rem;
    margin-left: -10rem;
}
.sun{
    z-index: -11;
    position: absolute;
    top: 3rem;
    width: 10rem;
    left: 10rem;
}
.paw{
  transform: rotateY(180deg);
    position: fixed;
    top: 1rem;
    width: 3rem;
    left: 1rem;
}
.crl{
    position: absolute;
    bottom: 0;
    z-index: -22;
    width: 15rem;
    left: -3.5rem;
    transform: rotateX(180deg);
}
h1{
  text-align: center;
}
</style>

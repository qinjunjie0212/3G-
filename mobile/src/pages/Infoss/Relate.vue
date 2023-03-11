<template>
  <div>
    <router-link replace to="/about">      <img src="./../../assets/img/右箭头.png" alt="" class="paw">
</router-link>
<br>
<br>
<br>
    <h1>Personal Page</h1>
    <img src="./../../assets/img/恐龙5.png" alt="" class="long">

        <img src="../../assets/img/圆.png" alt="" class="circle1">
        <img src="../../assets/img/圆.png" alt="" class="circle2">
        <img src="../../assets/img/圆.png" alt="" class="circle3">
        <img src="../../assets/img/圆.png" alt="" class="circle4">
        <img src="../../assets/img/浅灰树.png" alt="" class="tree">
        <img src="../../assets/img/太阳.png" alt="" class="sun">
    <router-link  replace to="/infos/info" class="btn1 btn">个人信息</router-link>
    <br><br>
    <router-link   replace to="/infos/state" class="btn2 btn">面试状态</router-link><button></button>
  </div>
</template>
<script>
export default {
name:'Relate',
components:{}
}
</script>

<style scoped>
.btn {
    position: absolute;
    left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 10rem;
    height: 2.3rem;
    text-decoration: none;
    border: solid 5px rgb(121, 113, 113);
    border-radius: 40px;
    background: #f4cf47;
    opacity: 0.8;
    color: black;
    font-size: .8rem;
    /* font-family: 'winmantun23001356b6000b824eb5'; */
}
.btn2{
  margin-top: 10rem;
}
.btn1{
  margin-top: 5rem;
}
.circle1{
    position: absolute;
    width: 7rem;
    right: -2.6667rem;
    bottom: 5rem;
    opacity: 0.6;
    z-index: -10;
}
.circle2{
    position: absolute;
    width: 4rem;
    left: 8rem;
    bottom: 4rem;
    opacity: 0.6;
    z-index: -10;
}
.circle3{
    position: absolute;
    width: 3.3rem;
    right: 1rem;
    top: 10.5rem;
    opacity: 0.4;
    z-index: -10;
}
.circle4{
    position: absolute;
    width: 3rem;
    left: 2.5rem;
    bottom: 0;
    opacity: 0.6;
}
.tree{
    position: absolute;
    width: 18.3333rem;
    right: 9.8667rem;
    top: 6rem;
    opacity: 0.6;
    z-index: -999;
}

.sun {
    position: absolute;
    width: 11.3333rem;
    top: -9rem;
    left: -2.1333rem;
    opacity: 0.8;
}

.paw{
  transform: rotateY(180deg);
    position: fixed;
    top: 1rem;
    width: 3rem;
    left: 1rem;
}
h1{
  font-size: 2rem;
  text-align: center;
}
.long{
  position: fixed;
  right: 0;
  bottom: -5rem;
  width: 45rem;
}


</style>
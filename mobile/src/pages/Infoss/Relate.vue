<template>
  <div>
    <router-link replace to="/about">      <img src="./../../assets/img/右箭头.png" alt="" class="paw">
</router-link>
<br>
<br>
<br>
    <span class="title">Personal Page</span>
        <!-- <img src="./../../assets/img/恐龙2.png" alt="" class="dinosaur"> -->
        <img src="../../assets/img/圆.png" alt="" class="circle1">
        <img src="../../assets/img/圆.png" alt="" class="circle2">
        <img src="../../assets/img/圆.png" alt="" class="circle3">
        <img src="../../assets/img/圆.png" alt="" class="circle4">
        <img src="../../assets/img/浅灰树.png" alt="" class="tree">
        <img src="../../assets/img/太阳.png" alt="" class="sun">
    <router-link to="/infos/info" class="btn btn1">个人信息</router-link>
    <!-- <br><br> -->
    <router-link to="/infos/state" class="btn">面试状态</router-link><button></button>
  </div>
</template>
<script>
import store from '../../store'
export default {
name:'Relate',
mounted(){
            var store=this.$store.state
            if(store.loginState === -1)
            {
                alert('请先登录')
                window.location.href = ""
            }
          }
}
</script>

<style scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 8rem;
    height: 3rem;
    text-decoration: none;
    border: solid 1.5px rgb(110, 110, 110);
    border-radius: 40px;
    background: #f4cf47;
    opacity: 0.8;
    /* margin-bottom: 1.2rem; */
    margin-left: 5.3333rem;
    color: black;
    font-size: .8rem;
    margin-top: 4.3333rem;
    /* font-weight: 550; */
}
.btn2{
  margin-top: 10rem;
}
.btn1{
  margin-top: 10rem;
}
.circle1{
    position: absolute;
    width: 8rem;
    left: -0.6667rem;
    bottom: 17rem;
    opacity: 0.6;
    z-index: -10;
}
.circle2{
    position: absolute;
    width: 5rem;
    left: 6rem;
    bottom: 10rem;
    opacity: 0.6;
    z-index: -10;
}
.circle3{
    position: absolute;
    width: 3.8rem;
    left: 1.5rem;
    bottom: 6rem;
    opacity: 0.4;
    z-index: -10;
}
.circle4{
    position: absolute;
    width: 3rem;
    left: -0.5rem;
    bottom: 12rem;
    opacity: 0.4;
}
.tree{
    position: absolute;
    width: 18.1333rem;
    right: -5rem;
    top: 9rem;
    opacity: 0.4;
    z-index: -10;
}

.sun {
    position: absolute;
    width: 11.3333rem;
    top: -9rem;
    left: -2.1333rem;
    opacity: 0.8;
}

h1{
  font-size: 2rem;
  text-align: center;
}

.dinosaur {
  position: fixed;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 8rem;
}

.title {
    position: absolute;
    top: 5.5rem;
    left: 2.5rem;
    font-weight: bold;
    font-size: 2.2rem;
    z-index: 10;
}
</style>
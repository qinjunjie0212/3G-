<template>
    <div class="box">
        <span class="title">LOGIN</span>
        <img src="../../assets/img/圆.png" alt="" class="circle1">
        <img src="../../assets/img/圆.png" alt="" class="circle2">
        <img src="../../assets/img/圆.png" alt="" class="circle3">
        <img src="../../assets/img/圆.png" alt="" class="circle4">
        <img src="../../assets/img/浅灰树.png" alt="" class="tree">
        <img src="../../assets/img/太阳.png" alt="" class="sun">
        <!-- <router-link to="/About">返回</router-link> -->
        <router-link class="last" to="/About"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
        <form action="#" id="reg" enctype="application/x-www-form-urlencoded">                
            <div class="Div_hint"><span class="Span_hint">姓名：</span><input type="text" placeholder="姓名" id="username" class="Login_input" v-model="loginInfo.name"></div><br> 
            <div class="Div_hint"><span class="Span_hint">手机号：</span><input type="text" placeholder="手机号" id="tel" class="Login_input" v-model="loginInfo.tel"></div><br>
            <a class="btn" @click="loginForm">登录</a>
            <!-- <router-link to="/Infos" class="btn">登录</router-link> -->
            <router-link to="/Register" class="btn">我要报名</router-link>
        </form>
   </div>
  </template>
  
  <script>
  export default {
  name:'Login',
  data(){
    return{
        loginInfo:{}
    }
  },
  methods:{
/*     loginForm(){
            this.$axios.post('http://localhost:3007/api/login', {
            name: this.loginInfo.name,
            tel: this.loginInfo.tel
          }).then(res=>{
            alert(res.data.message)
            if(res.data.message === '报名成功') {
                setTimeout(() => {
                this.$router.replace({
                    path: '/infos'
            }
            )},3000)
            }
          }).catch(error =>{
            alert('未知错误')
 	  })
        } */
  }
  }
  </script>
  
  <style scoped>
  .box {
    position: relative;
    left: 1.6667rem;
    top: 13.6667rem;
    width: 15rem;
    height: 0rem;
    /* padding: 5.3333rem; */
}

.Login_input {
    width: 18.6667rem;
    padding: 0.3333rem;
    border: 0;
    border-bottom: .04rem solid black;
    opacity: 0.8;
    background-color: transparent;
    margin-left: 1.3333rem;
}
.Login_input:focus {
    outline: none;
}

.Div_hint {
    display: flex;
    margin-bottom: 2.16rem;
}

.Span_hint {
    font-size: .8rem;
    width: 7.6666rem;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 5rem;
    height: 2.3rem;
    text-decoration: none;
    border: solid 1.5px rgb(110, 110, 110);
    border-radius: 40px;
    background: #f4cf47;
    opacity: 0.8;
    margin-bottom: 1.2rem;
    margin-left: 2.2667rem;
    color: black;
    font-size: .8rem;
}

.circle1{
    position: absolute;
    width: 7rem;
    left: -2.6667rem;
    top: -5rem;
    opacity: 0.6;
    z-index: -10;
}
.circle2{
    position: absolute;
    width: 4rem;
    left: 4.8rem;
    top: 4rem;
    opacity: 0.6;
    z-index: -10;
}
.circle3{
    position: absolute;
    width: 3.3rem;
    left: 1rem;
    top: 8.5rem;
    opacity: 0.4;
    z-index: -10;
}
.circle4{
    position: absolute;
    width: 3rem;
    left: -2.5rem;
    top: 4rem;
    opacity: 0.6;
}
.tree{
    position: absolute;
    width: 18.3333rem;
    right: -9.8667rem;
    top: -6rem;
    opacity: 0.6;
}

.sun {
    position: absolute;
    width: 11.3333rem;
    top: -9rem;
    left: -2.1333rem;
    opacity: 0.8;
}

.title {
    position: absolute;
    top: -11rem;
    left: 3.7rem;
    font-weight: bold;
    font-size: 2.5rem;
}
.last img{
    position: absolute;
    width: 2.3333rem;
    height: 2.3333rem;
    position: absolute;
    left: -0.5rem;
    top: -12.5rem;
}
</style>
<template>
  <div class="box">
        <span class="title">REGISTER</span>
        <img src="../../assets/img/圆.png" alt="" class="circle1">
        <img src="../../assets/img/圆.png" alt="" class="circle2">
        <img src="../../assets/img/圆.png" alt="" class="circle3">
        <img src="../../assets/img/圆.png" alt="" class="circle4">
        <img src="../../assets/img/浅灰树.png" alt="" class="tree">
        <img src="../../assets/img/太阳.png" alt="" class="sun">
    <!-- 这里的返回与之前不同，是返回到登录页面 -->
    <!-- <router-link to="/login">返回</router-link> -->
    <router-link replace class="last" to="/login"><img src="./../../assets/img/左箭头.png" alt=""></router-link>
    <form action="#" id="reg" enctype="application/x-www-form-urlencoded">                
            <div class="Div_hint"><span class="Span_hint">姓名：</span><input type="text" placeholder="姓名" id="username" class="Register_input" v-model="formData.username"></div><br> 
            <div class="Div_hint"><span class="Span_hint">手机号：</span><input type="text" placeholder="手机号" id="tel" class="Register_input" v-model="formData.tel"></div><br>
            <div class="Div_hint"><span class="Span_hint">QQ号：</span><input type="text" placeholder="QQ号" id="qq" class="Register_input" v-model="formData.qq"></div><br>
            <div class="Div_hint"><span class="Span_hint">专业班级：</span><input type="text" placeholder="专业班级" id="class" class="Register_input" v-model="formData.class"></div><br>
            <div class="Div_hint"><span class="Span_hint">方向选择：</span>
                <select class="dir" v-model="formData.dir">
                    <option value="">请选择方向</option>
                    <option value="Web">Web</option>
                    <option value="iOS">IOS</option>
                    <option value="Server">Server</option>
                    <option value="Andriod">Andriod</option>
                    <option value="未定向">未定向</option>
                </select>
            </div><br>
            <a class="btn" @click="registInfo">报名</a>
            <!-- <router-link  to="/infos" class="btn">报名</router-link>报名按键（报名成功后直接跳转到个人主页面） -->
        </form>
    <!-- <router-link to="/about">点击回看各组介绍</router-link> -->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name:'Register',
    data(){
        return {
            formData:{
                username:'',
                tel:'',
                qq:'',
                class:'',
                dir:''
            }
        }
    },
    components:{},
    methods:{
        // localStorage.setItem('name',this.formData.name)
       registInfo() {
        this.$axios.post('http://43.138.89.150:8889/api/reguser', {
            name: this.formData.username,
            tel: this.formData.tel,
            qq:this.formData.qq,
            banji:this.formData.class,
            dir:this.formData.dir,
          }).then(res=>{
            if(res.data.message === '报名成功') {
                alert(res.data.message)
                setTimeout(() => {
                this.$router.replace({
                    path: '/login'
            }
            )},1000)
            }
            else{
                alert(res.data.message)
            }
          }).catch(error =>{
            alert('未知错误')
 	  })
        }
          //通常本地开发会遇到跨域问题，所以我们需要在config的index.js里面配置proxyTable反向代理，具体详情自行百度，有很多很清楚的讲解与写法。
    }
      } 
</script>

<style scoped>
.box {
    position: relative;
    left: 1.6667rem;
    top: 13.6667rem;
    width: 16rem;
    height: 0rem;
    /* padding: 5.3333rem; */
}

.Register_input {
    width: 18.6667rem;
    padding: 0.3333rem;
    border: 0;
    border-bottom: .04rem solid black;
    opacity: 0.8;
    background-color: transparent;
    margin-left: -0.3333rem;
}
.Register_input:focus {
    outline: none;
}

.Div_hint {
    display: flex;
    margin-bottom: 0.17rem;
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
    margin-left: 5.2667rem;
    color: black;
    font-size: .8rem;
}

select {
    padding: .4rem;
    margin-bottom: 0.3333rem;
    border: 0;
    border-bottom: .04rem solid black;
    opacity: 0.8;
    background-color: transparent;
    opacity: 0.8;
    margin-left: -3.3rem;
}
select:focus {
    outline: none;
}
select option {
    border: 0;
    border-bottom: .04rem solid black;
    opacity: 0.8;
    background-color: transparent;
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
    z-index: 0;
}

.title {
    position: absolute;
    top: -11rem;
    left: 2.8rem;
    font-weight: bold;
    font-size: 2.5rem;
    z-index: 10;
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
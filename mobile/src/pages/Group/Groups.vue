<template>
  <div class="common">
    <div class="firstLine">FAVOURABLY RECEIVE</div>
        <!-- <img class="one" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="two" src="./../../assets/img/浅灰树.png" alt="">
        <img class="three" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="four" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="five" src="./../../assets/img/灰色圆点.png" alt=""> -->
        <router-link to="/about/web" class="kind animate__animated animate__zoomIn" @click.native="increment"> <img class="web"
                src="./../../assets/img/web.png" alt=""></router-link>
        <router-link to="/about/ios" class="kind animate__animated animate__zoomIn" @click="increment"><img class="ios"
                src="./../../assets/img/ios.png" alt=""></router-link>
        <router-link to="/about/server" href="#" class="kind animate__animated animate__zoomIn" @click="increment"><img class="server"
                src="./../../assets/img/server.png" alt=""></router-link>
        <router-link to="/about/android" href="#" class="kind animate__animated animate__zoomIn" @click="increment"><img class="android"
                src="./../../assets/img/Android.png" alt=""></router-link>
        
                <router-link to="/about/3g" class="kind animate__animated animate__zoomIn" @click="increment"><img class="ggg"
                src="./../../assets/img/3G恐龙.png" alt=""></router-link>
                <router-link to="/login" class="next"><img src="./../../assets/img/右箭头.png" alt=""></router-link>
                <router-view></router-view>
    </div>
</template>

<script>
import Ios from './../Group/Ios.vue'
import Web from './../Group/Web.vue'
import Server from './../Group/Server.vue'
import Android from './../Group/Android.vue'
import GGG from './../Group/GGG.vue'
export default {
    name:'About',
    components:{Ios,Web,Server,GGG,Android},
    methods:{
        increment (){
            // this.classList.add('animate__animated', 'animate__zoomOut');
            // console.log('aaa')
            }
        }
}

</script>

<style scoped>
/* body{
    background-color: #e8e8e8;
}
.next{
    position: absolute;
    width: 2.6667rem;
    height: 2.6667rem;
    top: 32.5rem;
    right: 1.5rem;
}
.firstLine {
    font-size: 2.32rem;
    font-weight: 900;
    width: 16.533rem;
    position: absolute;
    z-index: 1;
    top: 2.2667rem;
    left: 1.2667rem;
}

.common {
    position: relative
}

.one {
    position: absolute;
    left: -0.8667rem;
    top: -0.2rem;
    width: 9.8rem;
    height: 13.3333rem;
}

.two {
    position: absolute;
    width: 17.5333rem;
    height: 21.5333rem;
    left: 9.2667rem;
    top: 9.2667rem;
}

.three {
    position: absolute;
    left: -5.8667rem;
    top: 23.8rem;
    width: 13.8rem;
    height: 19.3333rem;
}

.four {
    position: absolute;
    left: 6.1333rem;
    top: 43.8rem;
    width: 15.8rem;
    height: 21.3333rem;
}

.five {
    position: absolute;
    left: 18.1333rem;
    top: -12.2rem;
    width: 15.8rem;
    height: 21.3333rem;
}
 */
 .firstLine {
    font-size: 2.32rem;
    font-weight: 900;
    width: 16.533rem;
    position: absolute;
    z-index: 1;
    top: 2.2667rem;
    left: 1.2667rem;
}

.web {
    position: absolute;
    left: 0.2667rem;
    top: 18.2667rem;
    width: 9.3333rem;
    height: 6.3333rem;
}

.ios {
    position: absolute;
    left: -0.7333rem;
    top: 9.2667rem;
    width: 11.3333rem;
    height: 6.3333rem;
}

.server {
    position: absolute;
    left: 9.2667rem;
    top: 25.2667rem;
    width: 10.3333rem;
    height: 5.3333rem;
}

.android {
    position: absolute;
    left: 9.2667rem;
    top: 14.2667rem;
    width: 10.3333rem;
    height: 7.3333rem;
}

.ggg {
    position: absolute;
    left: 0.226rem;
    top: 30.2667rem;
    width: 9.3333rem;
    height: 4.3333rem;
}

.next img{
    width: 4.3333rem;
    height: 4.3333rem;
    position: absolute;
    right: 17px;
    top: 31rem;
}
</style>
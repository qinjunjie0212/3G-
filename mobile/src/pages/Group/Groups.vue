<template>
  <div class="common">
    <div class="firstLine">FAVOURABLY RECEIVE</div>
        <router-link replace to="/about/web" class="kind animate__animated animate__zoomIn"> <img class="web"
                src="./../../assets/img/恐龙3.png" alt=""><img src="./../../assets/img/前端.png" class="webText" alt=""></router-link>
        <router-link replace to="/about/ios" class="kind animate__animated animate__zoomIn"><img class="ios"
                src="./../../assets/img/恐龙1.png" alt=""><img src="./../../assets/img/苹果.png" alt="" class="iosText"></router-link>
        <router-link replace to="/about/server" href="#" class="kind animate__animated animate__zoomIn"><img class="server"
                src="./../../assets/img/恐龙5.png" alt=""><img src="./../../assets/img/后台.png" class="serverText" alt=""></router-link>
        <router-link replace to="/about/android" href="#" class="kind animate__animated animate__zoomIn"><img class="android"
                src="./../../assets/img/恐龙2.png" alt=""><img src="./../../assets/img/安卓.png" class="androidText" alt=""></router-link>
        
                <router-link replace to="/about/3g" class="kind animate__animated animate__zoomIn"><img class="ggg"
                src="./../../assets/img/恐龙6.png" alt=""><img src="./../../assets/img/三G.png" class="sangText" alt=""></router-link>
                <router-link replace to="/login" class="next"><img src="./../../assets/img/右箭头.png" alt=""></router-link>
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
        }
}

</script>

<style scoped>
 .androidText{
    top: 18rem;
    left: 10.5rem;
    z-index: 1;
    width: 9rem;
    position: absolute;
    height: 2rem;
}
 .serverText{
    top: 27rem;
    left: 11rem;
    z-index: 1;
    width: 8rem;
    position: absolute;
    height: 2rem;
}
.sangText{
    top: 31.5rem;
    left: 3.3rem;
    z-index: 1;
    width: 4rem;
    position: absolute;
    height: 2rem;
}
 .webText{
    top: 21.5rem;
    left: 2rem;
    width: 5rem;
    height: 2rem;
    position: absolute;
}

.iosText{
    top: 12.1rem;
    left: 2.5rem;
    width: 5rem;
    height: 2rem;
    position: absolute;
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
    left: 8.2667rem;
    top: 24.2667rem;
    width: 11.3333rem;
    height: 6.3333rem;
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
    width: 3rem;
    /* height: 4.3333rem; */
    position: absolute;
    right: 1.5rem;
    top: 31.5rem;
}
</style>
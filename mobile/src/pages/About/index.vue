<template>
  <div class="common">
    <div class="firstLine">FAVOURABLY RECEIVE</div>
        <img class="one" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="two" src="./../../assets/img/浅灰树.png" alt="">
        <img class="three" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="four" src="./../../assets/img/灰色圆点.png" alt="">
        <img class="five" src="./../../assets/img/灰色圆点.png" alt="">
    <Groups v-show="$route.meta.show"/>
    <router-view></router-view>
  </div>
</template>

<script>

import Groups from './../Group/Groups'
export default {
    name:'About',
    components:{Groups}   
}
</script>

<style scoped>
body{
    background-color: #e8e8e8;
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

</style>
<template>
  <div>
    
    <div id="father">
        <div id="picture">
            <img src="./../../assets/img/太阳.png" class="sun1">
    <router-link to="/infos">
      <img src="./../../assets/img/左箭头.png" class="leftArrow">

    </router-link>

        </div>
        <div id="start" @click="changeClass(1)">
            <img src="./../../assets/img/恐龙2.png"  ref="1" v-show="changenum" class="inimg">
            <h2>3G</h2>
        </div>
        <div id="first"  @click="changeClass(2)" >
            <img src="./../../assets/img/恐龙2.png"  ref="2" v-show="changenum" class="inimg">
            <h2>三面</h2>
        </div>
        <div id="second"  @click="changeClass(3)" >
            <img src="./../../assets/img/恐龙2.png" ref="3" v-show="changenum" class="inimg">
            <h2>二面</h2>
        </div>
        <div id="third"  @click="changeClass(4)" >
            <img src="./../../assets/img/恐龙2.png"  ref="4" v-show="changenum" class="inimg">
            <h2>一面</h2>
        </div>
        <div id="final"  @click="changeClass(5)" >
            <img src="./../../assets/img/恐龙2.png" ref="5" v-show="changenum" class="inimg">
            <h2>开始</h2>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'State',
    data(){
            return{
                changenum:0
            } 
        },
        methods:{
            changeClass(i){
                for(let j=1;j<=5;j++)
                {
                    this.$refs[j].style.display='none'
                }
                this.$refs[i].style.display='block'
            }
        }
}
</script>

<style scoped>
#father{
    width: 100vw;
    height: 100vh;
    background-color: rgb(254, 227, 176);
}
#picture{
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 30vh;
}
#picture .sun1{
    z-index: 9999;
    position: absolute;
    top: 17px;
    right: -1rem;
    width: 84vw;
    height: 30vh;
    
}
#picture .leftArrow{
    z-index: 9999;
    position: absolute;
    top: 17px;
    left: 15px;
    width: 15vw;
    height: 8vh;
    
}
.inimg{
    position: absolute;
    bottom: 0px;
    right: 9px;
    width: 15vw;
    height: 10vh;
    z-index: 999999;
}
h2{
    color: rgb(144, 141, 141);
    position: absolute;
    bottom: -50px;
    right: 16px;
}
#start{
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
    position: relative;
    float: right;
    width: 20vw;
    height:40vh;
    margin-right: 0rem;
    background-color: #f5f5f5;
}
#first{
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
    position: relative;
    float: right;
    width: 20vw;
    height:48vh;
    margin-right: 2rem;
    background-color: #f5f5f5;
    margin: 0;
}
#second{
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
    position: relative;
    float: right;
    width: 20vw;
    height:56vh;
    margin-right: 4rem;
    background-color: #f5f5f5;
    margin: 0;
}
#third{
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
    position: relative;
    float: right;
    width: 20vw;
    height:64vh;
    margin-right: 6rem;
    margin: 0;
    background-color: #f5f5f5;
}
#final{
    box-sizing: border-box;
    border: 2px solid #f5f5f5;
    position: relative;
    float: right;
    width: 20vw;
    height:72vh;
    margin-right: 8rem;
    margin: 0;
    background-color: #f5f5f5;
}
.out{
    display: block;
    position: absolute;
    bottom: 0px;
    right: 9px;
    width: 15vw;
    height: 10vh;
}
.hid{
    display: none;
}
</style>
<template>
<div id="father">
        <div id="picture">
            <img src="./../../assets/img/太阳.png" class="sun1">
    <router-link to="/infos"  replace>
      <img src="./../../assets/img/左箭头.png" class="leftArrow">
    </router-link>
        </div>
        <div class="start">
            <img src="./../../assets/img/恐龙2.png"  ref="1"  class="inimg">
            <svg id="win" t="1678370766463" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3511" width="200" height="200"><path d="M689.8 121.4l94.6 17.9c20.1 3.8 37.5 15.3 49.1 32.3 11.6 17 15.9 37.4 12.1 57.5L822 353.8c-3.8 20.1-15.3 37.5-32.3 49.1-17 11.6-37.4 15.9-57.5 12.1l-94.6-17.9c-20.1-3.8-37.5-15.3-49.1-32.3-11.6-17-15.9-37.4-12.1-57.5L600 182.6c3.8-20.1 15.3-37.5 32.3-49.1 17.1-11.6 37.5-15.9 57.5-12.1m3-15.7c-50.2-9.5-99 23.8-108.5 74l-23.6 124.7c-9.5 50.2 23.8 99 74 108.5l94.6 17.9c50.2 9.5 99-23.8 108.5-74l23.6-124.7c9.5-50.2-23.8-99-74-108.5l-94.6-17.9z" fill="#581166" p-id="3512"></path><path d="M580.6 332.5c7 10.3 17.5 17.2 29.6 19.4l118.7 22.5c12.1 2.3 24.4-0.3 34.6-7.3 10.3-7 17.2-17.5 19.4-29.6l20.4-107.6c2.3-12.1-0.3-24.4-7.3-34.6-7-10.3-17.5-17.2-29.6-19.4l-118.7-22.5c-12.1-2.3-24.4 0.3-34.6 7.3-3.3 2.3-6.3 4.9-8.9 7.9 5.6-14.1 15.3-26.3 28.2-35.1 17-11.6 37.4-15.9 57.5-12.1l94.6 17.9c20.1 3.8 37.5 15.3 49.1 32.3 11.6 17 15.9 37.4 12.1 57.5l-23.6 124.7c-3.8 20.1-15.3 37.5-32.3 49.1-17 11.6-37.4 15.9-57.5 12.1l-94.6-17.9c-20.1-3.8-37.5-15.3-49.1-32.3-8.8-12.9-13.4-27.8-13.4-42.9 1.3 3.7 3.1 7.2 5.4 10.6z" fill="#FFB243" p-id="3513"></path><path d="M647.7 153.4l118.7 22.5c12.1 2.3 22.6 9.2 29.6 19.4 7 10.3 9.6 22.5 7.3 34.6l-20.4 107.6c-2.3 12.1-9.2 22.6-19.4 29.6-10.3 7-22.5 9.6-34.6 7.3l-118.7-22.5c-12.1-2.3-22.6-9.2-29.6-19.4-7-10.3-9.6-22.5-7.3-34.6l20.4-107.6c2.3-12.1 9.2-22.6 19.4-29.6s22.5-9.6 34.6-7.3m2.9-15.7c-33.7-6.4-66.4 16-72.8 49.6l-20.4 107.6c-6.4 33.7 16 66.4 49.6 72.8l118.7 22.5c33.7 6.4 66.4-16 72.8-49.6L819 232.9c6.4-33.7-16-66.4-49.6-72.8l-118.8-22.4zM334.6 121.4c20.1-3.8 40.5 0.5 57.5 12.1s28.5 29 32.3 49.1L448 307.3c3.8 20.1-0.5 40.5-12.1 57.5s-29 28.5-49.1 32.3L292.1 415c-20.1 3.8-40.5-0.5-57.5-12.1s-28.5-29-32.3-49.1l-23.6-124.7c-3.8-20.1 0.5-40.5 12.1-57.5s29-28.5 49.1-32.3l94.7-17.9m-2.9-15.7L237 123.6c-50.2 9.5-83.4 58.3-74 108.5l23.6 124.7c9.5 50.2 58.3 83.4 108.5 74l94.6-17.9c50.2-9.5 83.4-58.3 74-108.5l-23.6-124.7c-9.5-50.2-58.3-83.5-108.4-74z" fill="#581166" p-id="3514"></path><path d="M443.9 332.5c-7 10.3-17.5 17.2-29.6 19.4l-118.7 22.5c-12.1 2.3-24.4-0.3-34.6-7.3-10.3-7-17.2-17.5-19.4-29.6l-20.4-107.6c-2.3-12.1 0.3-24.4 7.3-34.6 7-10.3 17.5-17.2 29.6-19.4l118.7-22.5c12.1-2.3 24.4 0.3 34.6 7.3 3.3 2.3 6.3 4.9 8.9 7.9-5.6-14.1-15.3-26.3-28.2-35.1-17-11.6-37.4-15.9-57.5-12.1L240 139.3c-20.1 3.8-37.5 15.3-49.1 32.3-11.6 17-15.9 37.4-12.1 57.5l23.6 124.7c3.8 20.1 15.3 37.5 32.3 49.1 17 11.6 37.4 15.9 57.5 12.1l94.6-17.9c20.1-3.8 37.5-15.3 49.1-32.3 8.8-12.9 13.4-27.8 13.4-42.9-1.3 3.7-3.1 7.2-5.4 10.6z" fill="#FFB243" p-id="3515"></path><path d="M376.8 153.4c12.1-2.3 24.4 0.3 34.6 7.3 10.3 7 17.2 17.5 19.4 29.6l20.4 107.6c2.3 12.1-0.3 24.4-7.3 34.6-7 10.3-17.5 17.2-29.6 19.4l-118.7 22.5c-12.1 2.3-24.4-0.3-34.6-7.3-10.3-7-17.2-17.5-19.4-29.6l-20.4-107.6c-2.3-12.1 0.3-24.4 7.3-34.6 7-10.3 17.5-17.2 29.6-19.4l118.7-22.5m-3-15.7l-118.7 22.5c-33.7 6.4-56 39.1-49.6 72.8l20.4 107.6c6.4 33.7 39.1 56 72.8 49.6l118.7-22.5c33.7-6.4 56-39.1 49.6-72.8l-20.4-107.6c-6.4-33.6-39.1-56-72.8-49.6zM512.5 690.3c32.7 0 64.4 3.5 94.1 10.5 28.5 6.7 54 16.2 75.8 28.2 21.1 11.7 37.6 25.1 48.9 39.9 10.9 14.3 16.5 29.2 16.5 44.4s-5.5 30.1-16.5 44.4c-11.3 14.8-27.7 28.2-48.9 39.9-21.8 12-47.3 21.5-75.8 28.2-29.8 7-61.5 10.5-94.1 10.5-32.7 0-64.4-3.5-94.1-10.5-28.5-6.7-54-16.2-75.8-28.2-21.1-11.7-37.6-25.1-48.9-39.9-10.9-14.3-16.5-29.2-16.5-44.4s5.5-30.1 16.5-44.4c11.3-14.8 27.7-28.2 48.9-39.9 21.8-12 47.3-21.5 75.8-28.2 29.7-7 61.4-10.5 94.1-10.5m0-16c-138.7 0-251.2 62.2-251.2 138.9s112.5 138.9 251.2 138.9S763.7 890 763.7 813.2c0-76.7-112.5-138.9-251.2-138.9z" fill="#581166" p-id="3516"></path><path d="M512.5 690.3c32.7 0 64.4 3.5 94.1 10.5 28.5 6.7 54 16.2 75.8 28.2 21.1 11.7 37.6 25.1 48.9 39.9 10.9 14.3 16.5 29.2 16.5 44.4s-5.5 30.1-16.5 44.4c-11.3 14.8-27.7 28.2-48.9 39.9-21.8 12-47.3 21.5-75.8 28.2-29.8 7-61.5 10.5-94.1 10.5-32.7 0-64.4-3.5-94.1-10.5-28.5-6.7-54-16.2-75.8-28.2-21.1-11.7-37.6-25.1-48.9-39.9-10.9-14.3-16.5-29.2-16.5-44.4s5.5-30.1 16.5-44.4c11.3-14.8 27.7-28.2 48.9-39.9 21.8-12 47.3-21.5 75.8-28.2 29.7-7 61.4-10.5 94.1-10.5" fill="#FFB243" p-id="3517"></path><path d="M850.3 808.3v135.5H174.7V808.3h675.6m16-16H158.7v167.5h707.5V792.3h0.1zM527.2 586.9v87.6h-29.5v-87.6h29.5m16-16h-61.5v119.6h61.5V570.9z" fill="#581166" p-id="3518"></path><path d="M850.3 808.3v135.5H174.7V808.3h675.6" fill="#FF5855" p-id="3519"></path><path d="M527.2 586.9v87.6h-29.4v-87.6h29.4" fill="#FFB243" p-id="3520"></path><path d="M738.4 72.2v271.2c0 30.5-6 60.1-17.7 87.9-11.4 26.9-27.7 51.1-48.4 71.8-20.8 20.8-44.9 37-71.8 48.4-27.8 11.8-57.4 17.7-87.9 17.7-30.5 0-60.1-6-87.9-17.7-26.9-11.4-51.1-27.7-71.8-48.4s-37-44.9-48.4-71.8c-11.8-27.8-17.7-57.4-17.7-87.9V72.2h-16v271.2c0 133.6 108.3 241.9 241.9 241.9 133.6 0 241.9-108.3 241.9-241.9V72.2h-16.2z" fill="#581166" p-id="3521"></path><path d="M286.6 64.2v279.2c0 30.5 6 60.1 17.7 87.9 11.4 26.9 27.7 51.1 48.4 71.8s44.9 37 71.8 48.4c27.8 11.8 57.4 17.7 87.9 17.7 30.5 0 60.1-6 87.9-17.7 26.9-11.4 51.1-27.7 71.8-48.4 20.8-20.8 37-44.9 48.4-71.8 11.8-27.8 17.7-57.4 17.7-87.9V64.2H286.6z" fill="#FFC86B" p-id="3522"></path><path d="M746.4 80.2H278.6c-4.4 0-8-3.6-8-8s3.6-8 8-8h467.8c4.4 0 8 3.6 8 8s-3.6 8-8 8zM855.5 858.3H171c-4.4 0-8-3.6-8-8s3.6-8 8-8h684.5c4.4 0 8 3.6 8 8s-3.6 8-8 8zM855.5 910.7H171c-4.4 0-8-3.6-8-8s3.6-8 8-8h684.5c4.4 0 8 3.6 8 8s-3.6 8-8 8z" fill="#581166" p-id="3523"></path><path d="M242.6 949.8l0.4-147.5c0-4.4 3.6-8 8-8s8 3.6 8 8l-0.4 147.5c0 4.4-3.6 8-8 8s-8-3.6-8-8zM413.2 949.8l0.4-147.5c0-4.4 3.6-8 8-8s8 3.6 8 8l-0.4 147.5c0 4.4-3.6 8-8 8s-8-3.6-8-8zM583.8 949.8l0.4-147.5c0-4.4 3.6-8 8-8s8 3.6 8 8l-0.4 147.5c0 4.4-3.6 8-8 8s-8-3.6-8-8zM754.4 949.8l0.4-147.5c0-4.4 3.6-8 8-8s8 3.6 8 8l-0.4 147.5c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#581166" p-id="3524"></path><path d="M661.6 128.7V88.2c0-4.4 3.6-8 8-8s8 3.6 8 8v40.5c0 4.4-3.6 8-8 8s-8-3.6-8-8zM626.6 190.9V88.2c0-4.4 3.6-8 8-8s8 3.6 8 8v102.7c0 4.4-3.6 8-8 8s-8-3.6-8-8z" fill="#FFFFFF" p-id="3525"></path></svg>
        </div>
        <div class="first">
            <img src="./../../assets/img/恐龙2.png"  ref="2"  class="inimg">
            <h2 class="orginal" ref="8">三面</h2>
        </div>
        <div class="second">
            <img src="./../../assets/img/恐龙2.png" ref="3"  class="inimg">
            <h2  class="orginal" ref="7">二面</h2>
        </div>
        <div class="third">
            <img src="./../../assets/img/恐龙2.png"  ref="4"  class="inimg">
            <h2 class="orginal" ref="6">一面</h2>
        </div>
        <div class="final">
            <img src="./../../assets/img/恐龙2.png" ref="5"  class="inimg">
            <svg id="open" t="1678371668608" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5925" width="200" height="200"><path d="M624 960H208c-44.1 0-80-35.9-80-80V176c0-44.1 35.9-80 80-80h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-26.5 0-48 21.5-48 48v704c0 26.5 21.5 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16zM720 960h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zM816 960h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c44.1 0 80 35.9 80 80v704c0 44.1-35.9 80-80 80zM656 128H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h288c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="#333333" p-id="5926"></path><path d="M768 352H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h512c8.8 0 16 7.2 16 16s-7.2 16-16 16zM768 544H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h512c8.8 0 16 7.2 16 16s-7.2 16-16 16zM448 736H256c-8.8 0-16-7.2-16-16s7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16zM320 176c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16zM704 176c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16z" fill="#333333" p-id="5927"></path><path d="M769.1 610.8c-6.3-6.3-16.4-6.3-22.6 0L622.1 735.2l-56.6-56.6c-6.3-6.3-16.4-6.3-22.6 0s-6.3 16.4 0 22.6l67.9 67.9c3.1 3.1 7.2 4.7 11.3 4.7 4.1 0 8.2-1.6 11.3-4.7l135.8-135.8c6.2-6.2 6.2-16.3-0.1-22.5z" fill="#0F82E4" p-id="5928"></path></svg>
        </div>
</div>
</template>

<script>
import store from '../../store'
//import ref from 'vue'
import axios from 'axios'
    export default {
    name:'State',
        mounted(){
    //         this.$axios.get('http://127.0.0.1:3007/my/userinfo', {
    //             'Authorization':this.$store.state.loginToken,
    //             'Content-Type':'application/x-www-form-urlencoded'
    //       }).then(res=>{
    //         alert(res.data.message)
    //         console.log('111',res.data.message)
    //         console.log('222',res.data)
    //         if(res.data.message === '获取用户信息成功') {
    //             console.log('返回数据',res.data)
    //             this.$store.commit('updatestatus',res.data.status)
    //         }
    //       }).catch(error =>{
    //         alert('未知错误')
 	//   })
    axios({
        method: "get",
        url: "http://43.138.89.150:8889/my/userinfo",
            headers: { // 设置请求头
                'Authorization': this.$store.state.loginToken,
                'Content-Type':'application/x-www-form-urlencoded',
            },
        }).then(res => { // 成功后的回调函数
            console.log('返回数据',res.data.data.status)
            this.$store.commit('updatestatus',res.data.data.status)
            //var store=this.$store.state
            //console.log('fanhui',res.data.status)
            for(let j=1;j<=5;j++)
            {
                this.$refs[j].style.display='none'
            }
            if(res.data.data.status == 0)//报名成功
            {
                console.log(111)
                this.$refs[5].style.display='block'
            }
            else if(res.data.data.status == 1)//一面通过
            {
                this.$refs[4].style.display='block'
                this.$refs[6].innerHTML='已通过'
                this.$refs[6].className='change'
                this.$refs[6].style.color='green'
            }
            else if(res.data.data.status == 2)//一面未通过
            {
                this.$refs[5].style.display='block'
                this.$refs[6].innerHTML='未通过'
                this.$refs[6].className='change'
                this.$refs[6].style.color='red'
            }
            else if(res.data.data.status == 3)//二面通过
            {
                this.$refs[3].style.display='block'
                console.log(111)
                this.$refs[7].style.color='green'
                this.$refs[7].className='change'
                this.$refs[7].innerHTML='已通过'
                this.$refs[6].innerHTML='已通过'
                this.$refs[6].className='change'
                this.$refs[6].style.color='green'
            }
            else if(res.data.data.status == 4)//二面未通过
            {
                this.$refs[7].innerHTML='未通过'
                this.$refs[7].style.color='red'
                this.$refs[7].className='change'
                this.$refs[4].style.display='block'
                this.$refs[6].innerHTML='已通过'
                this.$refs[6].className='change'
                this.$refs[6].style.color='green'
            }
            else if(res.data.data.status == 5)//三面通过
            {
                
                this.$refs[8].className='change'
                this.$refs[8].innerHTML='已通过'
                this.$refs[2].style.display='block'
                this.$refs[8].style.color='green'
                this.$refs[7].style.color='green'
                this.$refs[7].className='change'
                this.$refs[7].innerHTML='已通过'
                this.$refs[6].innerHTML='已通过'
                this.$refs[6].className='change'
                this.$refs[6].style.color='green'
            }
            else if(this.$store.state.status == -1)
            {
                alert('请先登录')
                window.location.href = ""
            }
            //return res.data 
        })
        
    }
}
</script>

<style>

#father{
    width: 105vw;
    height: 103vh;
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
    right: 18px;
    width: 15vw;
    height: 10vh;
    z-index: 999999;
}
.orginal{
    font-size: 1rem;
    color: rgb(118, 116, 116);
    position: absolute;
    bottom: -45px;
    right: 22px;
}
.start{
    box-sizing: border-box;
    border: 2px solid rgb(232,232,232);
    position: relative;
    float: right;
    width: 21vw;
    height:40vh;
    margin-right: 0rem;
    background-color: rgb(232,232,232);
}
.first{
    box-sizing: border-box;
    border: 2px solid rgb(232,232,232);
    position: relative;
    float: right;
    width: 21vw;
    height:48vh;
    margin-right: 2rem;
    background-color: rgb(232,232,232);
    margin: 0;
}
.second{
    box-sizing: border-box;
    border: 2px solid rgb(232,232,232);
    position: relative;
    float: right;
    width: 21vw;
    height:56vh;
    margin-right: 4rem;
    background-color: rgb(232,232,232);
    margin: 0;
}
.third{
    box-sizing: border-box;
    border: 2px solid rgb(232,232,232);
    position: relative;
    float: right;
    width: 21vw;
    height:64vh;
    margin-right: 6rem;
    margin: 0;
    background-color: rgb(232,232,232);
}
.final{
    box-sizing: border-box;
    border: 2px solid rgb(232,232,232);
    position: relative;
    float: right;
    width: 21vw;
    height:72vh;
    margin-right: 8rem;
    margin: 0;
    background-color: rgb(232,232,232);
}

#win{
  position: absolute;
  height: 50px;
  right: 10px;
  width: 50px;
  bottom: -55px;
  z-index: 9999;
}
#open{
  position: absolute;
  height: 50px;
  right: 10px;
  width: 50px;
  bottom: -55px;
  z-index: 9999;
}
.change{
    font-size: 20px;
    position: absolute;
    bottom: -46px;
    right: 7px;
}
</style>
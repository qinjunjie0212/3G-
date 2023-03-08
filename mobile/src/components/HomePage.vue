<template>
    <div>
        <img src="../assets/背景.jpeg" alt="">
        <img src="../assets/三角.png" alt="">
        <img src="../assets/恐龙6.png" alt="">
        <img src="../assets/恐龙2.png" alt="">
        <img src="../assets/恐龙3.png" alt="">
        <img src="../assets/恐龙4.png" alt="">
        <img src="../assets/恐龙5.png" alt="">
        <img src="../assets/3G.png" alt="">
        <img src="../assets/深圆点.png" alt="">
        <img src="../assets/灰色圆点.png" alt="">
        <img src="../assets/灰色三角.png" alt="">
        <p>{{sends}}</p>
        <button>
            
        </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data(){
        return{
        sends:'点击任意位置继续...'
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>

p{
    font-size: 0.5rem;
    color: rgb(64, 72, 110);
    position: fixed;
    left: 8rem;
    bottom: 0;
    z-index: 999;
    
}


@media screen and (min-width:750px) {
    html {
        font-size: 37.5px !important;
    }
}

div {
    font: weight 50px; ;
    background: #fafafa;
    position: relative;
    text-align: center;
    height:32rem;
}
img{
    position: fixed;
}
img:nth-child(1){
    z-index: -2;
    position: relative;
    width: 100%;
}
/* 黑三角 */
img:nth-child(2){
    width: 25%;
    left: 2rem;
    top: 23rem;
}
/* 恐龙6 */
img:nth-child(3){
    width: 40%;
    left: 9rem;
    top: 5rem;
}
/* 恐龙2 */
img:nth-child(4){
    width: 40%;
    right: 0;
    bottom: 1rem;
    z-index: 999;
}
/* 恐龙3 */
img:nth-child(5){
    width: 30%;
    right: -2rem;
    z-index: 2;
    top: 10rem;
}
/* 恐龙4 */
img:nth-child(6){
    width: 50%;
    transform: rotateY(180deg);
    left: -5rem;
    top: 5rem;
    z-index: 999;
}
/* 恐龙5 */
img:nth-child(7){
    width: 80%;
    left: -9rem;
    bottom: -1rem;
}
/* 3G */
img:nth-child(8){
    width: 75%;
    left: 3.5rem;
    bottom: 13.5rem;
    z-index: 999;
}
/* 圆点深 */
img:nth-child(9){
    width: 20%;
    right: 1rem;
    bottom: 7rem;
    z-index: 999;
}
/* 灰色大圆点，右下角 */
img:nth-child(10){
    transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 150%;
    right:-20rem;
    top:2rem;
}

/* 左上角灰色三角 */
img:nth-child(11){
    transform: rotateY(180deg);
    transform: rotateX(180deg);
    width: 30%;
    left: 3rem;
    top:3rem;
    z-index: 2;}
</style>
  
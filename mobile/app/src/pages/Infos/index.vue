<template>
  <div>
    <header></header>
    <Relate v-show="$route.meta.isShow"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Relate from './../Infoss/Relate'
export default {
    name:'Infos',
    components:{Relate}
}
</script>

<style scoped>
header{
    width: 100%;
    height:2.6667rem;
    background-color: rgb(67, 37, 47);
}
</style>
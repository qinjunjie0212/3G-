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
</style>
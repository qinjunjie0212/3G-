<template>
  <div>
    <header></header>
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
header{
    width: 100%;
    height: 2.6667rem;
    background-color: pink;
}
</style>
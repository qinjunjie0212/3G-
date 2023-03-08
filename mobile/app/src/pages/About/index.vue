<template>
  <div>
    <!-- <header></header> -->
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

</style>
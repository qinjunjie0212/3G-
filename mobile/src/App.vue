<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './pages/Home/index.vue'
export default {
  name:'App',
  components:{
    Home
  }
}
</script>

<style>

</style>
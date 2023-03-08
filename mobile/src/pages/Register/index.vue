<template>
  <div>
    <!-- 这里的返回与之前不同，是返回到登录页面 -->
    <router-link to="/login">返回</router-link>
    <h1>我是报名</h1>
    <br><br>
    <router-link to="/infos">报名按键（报名成功后直接跳转到个人主页面）</router-link>
    <br><br>
    <router-link to="/about">点击回看各组介绍</router-link>
  </div>
</template>

<script>
export default {
name:'Register'
}
</script>

<style>

</style>
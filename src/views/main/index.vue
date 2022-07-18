<template>
  <div class="main">
    <login-header />
    <div>
      <img :src="headerImage" style="width: 100%; height: 60px" />
    </div>
    <nav-header></nav-header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import { NavHeader } from "@/components/header";
import LoginHeader from "@/views/login/LoginHeader.vue";
import headerImage from "@/assets/img/headerImg.png";
export default {
  components: {
    NavHeader,
    LoginHeader,
  },
  setup() {
    return {
      headerImage,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  .content{
    width:90%;
    margin:auto;
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="login-header">
    <div>
      <el-button text style="color: #409eff" @click="toLogin">亲，请登录</el-button>
      <el-button text  @click="toRegister" index="volunteer">志愿者注册</el-button>
      <span>/</span>
      <el-button text  @click="toRegister" index="master">团体注册</el-button>
    </div>
    <div class="user-center">
      <el-button text>发起项目</el-button>
      <el-menu
        class="el-menu-demo my-menu"
        mode="horizontal"
        background-color="#f4f4f5"
      >
        <el-sub-menu index="2" class="my-sub-menu">
          <template #title>志愿中心</template>
          <el-menu-item index="2-1">我的项目</el-menu-item>
          <el-menu-item index="2-2">我的时长</el-menu-item>
          <el-menu-item index="2-3">我的团体</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import {  useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const toLogin = () => {
      router.push('/login')
    }
    const toRegister = (e) => {
      if(e.currentTarget.getAttributeNode('index').value === 'volunteer'){
          router.push('/register/volunteer')
      }
      else{
          router.push('/register/master')
      }
    }
    return {
      toLogin,
      toRegister
    };
  },
};
</script>

<style lang="less" scoped>
.login-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f5;
  padding: 0;
  height: 30px;
  .user-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.my-menu {
  width: 200px;
  border: none;
  height: 30px;
}
</style>

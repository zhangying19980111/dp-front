<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo nav-header"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/main">首页</el-menu-item>
      <el-menu-item index="/project">志愿项目</el-menu-item>
      <el-menu-item index="/team">志愿团队</el-menu-item>
      <el-menu-item index="/activity">活动动态</el-menu-item>
      <el-menu-item index="/notice">通知公告</el-menu-item>
      <el-menu-item index="/train">在线培训</el-menu-item>
      <el-sub-menu index="2">
        <template #title>审核通道</template>
        <el-sub-menu index="2-4">
          <template #title>队伍审核通道</template>
          <el-menu-item index="2-4-1">志愿者入队审核</el-menu-item>
          <el-menu-item index="2-4-2">志愿者入项审核</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2-5">
          <template #title>单位审核通道</template>
          <el-menu-item index="2-5-1">审核队伍</el-menu-item>
          <el-menu-item index="2-5-2">审核项目</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    const activeIndex = "/main";
    return {
      activeIndex,
    };
  },
};
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
}
</style>

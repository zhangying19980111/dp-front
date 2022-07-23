<template>
  <div>
    <el-tabs
      tab-position="left"
      class="demo-tabs"
      v-model="selectedTab"
      @tab-change="handleClick"
    >
      <el-tab-pane label="入队审核" :name="0">
        <VolToTeam />
      </el-tab-pane>
      <el-tab-pane label="入项审核" :name="1">
        <VolToProject />
      </el-tab-pane>
      <el-tab-pane label="我的项目" :name="2">
        <MyProject />
      </el-tab-pane>
      <el-tab-pane label="我的成员" :name="3">
        <MyVol />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VolToProject from "@/views/check/team/VolToProject.vue";
import VolToTeam from "@/views/check/team/VolToTeam.vue";
import MyVol from "@/views/center/team/MyVol.vue";
import MyProject from "@/views/center/team/MyProject.vue";
import {ref} from 'vue'
export default {
  components: {
    VolToProject,
    VolToTeam,
    MyVol,
    MyProject,
  },
  setup() {
    let selectedTab = ref(0);
    !(function tabCache() {
      const currentTab = sessionStorage.getItem("tab");
      if (currentTab) {
        selectedTab = Number(currentTab);
      }
    })(selectedTab);
    const handleClick = (name) => {
      selectedTab = name;
      sessionStorage.setItem("tab", name);
    };
    return {
      selectedTab,
      handleClick,
    };
  },
};
</script>

<style lang="less" scoped></style>

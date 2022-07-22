<template>
  <div>
    <el-tabs
      tab-position="left"
      class="demo-tabs"
      v-model="selectedTab"
      @tab-change="handleClick"
    >
      <el-tab-pane label="项目审核" :name="0">
        <ProjectCheck />
      </el-tab-pane>
      <el-tab-pane label="队伍审核" :name="1">
        <TeamCheck />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectCheck from "@/views/check/organizer/ProjectCheck.vue";
import TeamCheck from "@/views/check/organizer/TeamCheck.vue";
import {ref} from 'vue'
export default {
  components: {
    ProjectCheck,
    TeamCheck,
  },
  setup() {
    let selectedTab = ref(0);
    !(function tabCache() {
      const currentTab = sessionStorage.getItem('tab')
      if(currentTab){
        selectedTab = Number(currentTab)
      }
    })(selectedTab)
    const handleClick = (name) => {
      selectedTab = name
      sessionStorage.setItem("tab", name);
    };

    return {
      selectedTab,
      handleClick
    };
  },
};
</script>

<style lang="less" scoped></style>

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
      <el-tab-pane label="申请记录" :name="4">
        <ApplyList />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VolToProject from "@/views/check/team/VolToProject.vue";
import VolToTeam from "@/views/check/team/VolToTeam.vue";
import MyVol from "@/views/center/team/MyVol.vue";
import MyProject from "@/views/center/team/MyProject.vue";
import ApplyList from "@/views/center/team/ApplyList.vue";
import {ref} from 'vue'
import { useStore } from "vuex";
import { computed } from "vue";
import { setupTeamStore } from '@/store/'
export default {
  components: {
    VolToProject,
    VolToTeam,
    MyVol,
    MyProject,
    ApplyList
  },
  setup() {
    let selectedTab = ref(0);
    const store = useStore();
    const role = store.state.login.role;
    const uid =  store.state.login.uid;
    !(function tabCache() {
      // store.dispatch('team/accountVolToProData',{role, uid})
      // setupTeamStore({role, uid})
      const currentTab = sessionStorage.getItem("tab");
      if (currentTab) {
        selectedTab = Number(currentTab);
      }
    })(selectedTab, role, uid);
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

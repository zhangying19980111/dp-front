<template>
  <div>
    <el-tabs tab-position="left" class="demo-tabs" v-model="selectedTab">
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
import VolToProject from '@/views/check/team/VolToProject.vue'
import VolToTeam from '@/views/check/team/VolToTeam.vue'
import MyVol from '@/views/center/team/MyVol.vue'
import MyProject from '@/views/center/team/MyProject.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    VolToProject,
    VolToTeam,
    MyVol,
    MyProject
  },
  setup() {
    const router = useRouter()
    const selectedTab = 0
    return {
      selectedTab
    }
  }
}
</script>

<style lang="less" scoped>
</style>
<template>
  <div>
    <el-tabs tab-position="left"  class="demo-tabs">
      <el-tab-pane label="志愿者入队审核"><VolToTeam/></el-tab-pane>
      <el-tab-pane label="志愿者入项审核"><VolToProject/></el-tab-pane>
      <el-tab-pane label="项目审核"><ProjectCheck/></el-tab-pane>
      <el-tab-pane label="队伍审核"><TeamCheck/></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ProjectCheck from '@/views/check/organizer/ProjectCheck.vue'
import TeamCheck from '@/views/check/organizer/TeamCheck.vue'
import VolToProject from '@/views/check/team/VolToProject.vue'
import VolToTeam from '@/views/check/team/VolToTeam.vue'
export default {
  components:{
    ProjectCheck,
    TeamCheck,
    VolToProject,
    VolToTeam
  },
  setup() {


    return {}
  }
}
</script>

<style lang="less" scoped>
</style>
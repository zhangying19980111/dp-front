<template>
  <div>
    <el-tabs tab-position="left" class="demo-tabs" v-model="selectedTab">
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
import ProjectCheck from '@/views/check/organizer/ProjectCheck.vue'
import TeamCheck from '@/views/check/organizer/TeamCheck.vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    ProjectCheck,
    TeamCheck,
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
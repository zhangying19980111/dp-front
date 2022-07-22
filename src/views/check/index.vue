<template>
  <div>
    <team-tab/>
  </div>
</template>

<script>
import TeamTab from '@/components/tab/TeamTab.vue'
import CenterTab from '@/components/tab/CenterTab.vue'
export default {
  components: {
     TeamTab,
    CenterTab
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
</style>
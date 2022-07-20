<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane :label="tabName">
        <ul>
          <li><record/></li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Record from './Record.vue'
export default {
    components:{
        Record
    },
  props: {
    tabName: {
      type: String,
      default: "通知公告",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
ul li::marker {
  color: #409EFF;
}
li{
   padding: 2px;
  border-bottom: solid #ccc thin;
  // border-width:
}
</style>

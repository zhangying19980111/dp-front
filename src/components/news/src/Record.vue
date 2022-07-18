<template>
  <div class="record">
    <el-link :underline="false" class="title">primary</el-link>
    <span class="time">time</span>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.record {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-size: medium;
  }
  .time{
    font-size:medium;
    color:#909399
  }
}
</style>

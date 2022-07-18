<template>
  <div>
    <el-card class="box-card">
      <div>
        {{ title }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>

<template>
  <div class="content">
    <overview />
  </div>
</template>

<script>
import Overview from "@/components/news/src/Overview.vue";
export default {
  compontents:{
Overview,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 90%;
  margin: auto;
  margin-top: 20px;
}
</style>

<template>
  <div class="record">
    <button class="title" link @click="go"
      >关于开展“圆梦工程”——农村未成年人暑期志愿服务行动方案</button
    >
    <span class="time">2022.07.05</span>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const go = () => {
      router.push("/notic/info");
    };
    return {
      go,
    };
  },
};
</script>

<style lang="less" scoped>
.record {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    display: inline-block;
    font-size: medium;
    text-align: left;
    width: 75%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border:none;
    background-color: #FFFFFF;
  }
  .title:hover {
    color: #409eff;
    cursor: pointer;
  }
  .time {
    display: inline-block;
    font-size: medium;
    color: #909399;
  }
}
</style>

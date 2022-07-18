<template>
  <div class="info-card">
    <el-card 
    :body-style="{ padding: '0px' }"
     shadow="hover">
      <div class="top">
        <span>发布时间</span>
      </div>
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px">
        <span>项目名称</span>
        <div class="bottom">
          <el-button text class="button" @click="getProjectInfo">查看详情</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  setup() {
    const getProjectInfo = () => {
        console.log(1)
    }
    return {
        getProjectInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.info-card {
  width: 20%;
  .top {
    text-align: center;
    background-color: #ccc;
  }
  .image {
    width: 100%;
    display: block;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    .button {
      padding: 0;
      min-height: auto;
      margin-left: 150px;
    }
  }
}
</style>

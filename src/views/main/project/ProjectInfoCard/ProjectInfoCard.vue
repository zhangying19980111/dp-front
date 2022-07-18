<template>
  <div class="info-card">
    <el-card 
    :body-style="{ padding: '0px' }"
     shadow="hover">
      <div class="top">
        <span>发布时间</span>
      </div>
      <img
        :src="ProjectLogo"
        class="image"
      />
          <el-divider />
      <div style="padding:0 14px">
        <span>项目名称</span>
        <div class="bottom">
          <el-button text class="button" @click="getProjectInfo">查看详情</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import ProjectLogo from '@/assets/img/project_logo.png'
export default {
  components: {
  },
  setup() {
    const getProjectInfo = () => {
        console.log(1)
    }
    return {
        getProjectInfo,
        ProjectLogo
    };
  },
};
</script>

<style lang="less" scoped>
.info-card {
  width: 200px;
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
      margin-left: 100px;
    }
  }
}
</style>

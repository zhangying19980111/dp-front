<template>
  <div class="info-card">
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <div class="top">
        <span>{{ date }}</span>
      </div>
      <img :src="imgSrc" class="image" />
      <el-divider />
      <div style="padding: 0 14px;">
        <span class="word">{{ name }}</span>
        <div class="bottom">
          <el-button text class="button" @click="getProjectInfo"
            >查看详情</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import ProjectLogo from "@/assets/img/project_logo.png";
export default {
  components: {},
  props: {
    id:{
      type:Number,
      default:1
    },
    date: {
      type: String,
      default: "2022-07-18",
    },
    name: {
      type: String,
      default: "队伍/项目名称",
    },
    imgSrc: {
      default: ProjectLogo,
    }
  },
  emits: ["getInfo"],
  setup(props, { emit }) {
    const getProjectInfo = () => {
      emit('getInfo', props.id)
    };
    return {
      getProjectInfo,
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
  .word{
    display: block; 
    overflow:hidden;
    text-overflow:ellipsis; 
    white-space:nowrap
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

<template>
  <div>
    <el-card>
      <div class="content">
        <div class="content-image">
          <img :src="imgSrc" />
        </div>
        <div class="content-word">
          <div>
            <span class="word-label" v-for="item in contentLabel" :key="item"
              >{{ item }}:</span
            >
          </div>
          <div>
            <span class="word-value" v-for="item in contentValue" :key="item">{{
              item
            }}</span>
          </div>
        </div>
        <div class="content-linkman">
          <div>
            <span class="word-label"  v-for="item in linkLabel" :key="item">{{ item }}:</span>
          </div>
          <div>
            <span class="word-value" v-for="item in linkValue" :key="item">{{item}}</span>
          </div>
        </div>
        <!-- <solt name="contentButton" class="content-button">
          <el-button type="primary">报名加入</el-button>
        </solt> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import ProjectLogo from "@/assets/img/project_logo.png";
export default {
  props: {
    contentLabel: {
      type: Array,
      default: [],
    },
    contentValue: {
      type: Array,
      default: [],
    },
    imgSrc: {
      default: ProjectLogo,
    },
    linkLabel: {
      type: Array,
      default: [],
    },
    linkValue: {
      type: Array,
      default: [],
    },
    leadLabel: {
      type: Array,
      default: [],
    },
    leadValue: {
      type: Array,
      default: [],
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;
  width: 95%;
  .content-image {
    padding: 20px;
    border: solid #fafafa;
  }
  .content-word {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
    margin:10px, 10px;
    border-right: 1px solid #c0c4cc;
  }
  .content-linkman {
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c0c4cc;
    border-radius: 2px;
    width:20%;
  }
  .content-button {
    align-self: flex-end;
    margin-left: 20%;
  }
  .word-label {
    display: block;
    padding: 10px;
  }
  .word-value {
    display: block;
    padding: 10px;
  }
}
</style>

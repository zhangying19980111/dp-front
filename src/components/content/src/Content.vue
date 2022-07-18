<template>
  <div>
    <el-card>
      <div class="content">
        <div class="content-image">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          />
        </div>
        <div class="content-word">
          <div>
            <span class="word-label" v-for="item in contentLabel" key="item">{{
              item
            }}</span>
          </div>
          <div>
            <span class="word-value" v-for="item in contentValue" key="item">{{
              item
            }}</span>
          </div>
        </div>
        <solt name="contentButton" class="content-button">
          <el-button type="primary">报名加入</el-button>
        </solt>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    contentLabel: {
      type: Array,
      default: ["项目地点", "服务类别", "服务对象"],
    },
    contentValue: {
      type: Array,
      default: ["念坛公园", "城市服务", "青少年"],
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
  justify-content: center;
  align-items: center;
  .content-image {
    padding: 20px;
  }
  .content-word {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: medium;
    .word-label {
      font-weight: 100;
      display: block;
      padding: 10px;
    }
    .word-value {
      display: block;
      padding: 10px;
    }
  }
  .content-button {
    align-self: flex-end;
    margin-left:20%
  }
}
</style>

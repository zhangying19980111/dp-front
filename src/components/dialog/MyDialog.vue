<template>
  <el-dialog v-model="contentVisible" width="60%" :before-close="handleClose">
    <template #header>
      <h3 style="border-bottom: solid #CDD0D6; padding: 20px;">{{ title }}</h3>
    </template>
    <div>
      <template v-for="item in dialogData" :key="item.value">
        <el-row class="dialog-content">
          <el-col :span="6">
            <span style="text-align: center">{{ item.label }}:</span>
          </el-col>
          <el-col :span="12">
            <span>{{ item.value }}</span>
          </el-col>
        </el-row>
      </template>
    </div>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button>拒绝</el-button>
        <el-button type="primary">通过</el-button>
      </span>
    </template> -->
  </el-dialog>
</template>

<script>
export default {
  props: {
    contentVisible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "title",
    },
    dialogData: {
      // type: () => [],
      default: [
        {
          label: "姓名",
          value: "张三",
        },
        {
          label: "年龄",
          value: "21",
        },
      ],
    },
  },
  emits: ["closeDialog"],
  setup(props, { emit }) {
    const handleClose = (done) => {
      done();
      emit("closeDialog", false);
    };

    return {
      handleClose,
    };
  },
};
</script>

<style lang="less" scoped>
.dialog-content {
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
}
</style>

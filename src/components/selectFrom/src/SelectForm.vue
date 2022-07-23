<template>
  <div>
    <el-form class="select-form">
      <el-form-item :label="dateName" :model="form.value" class="select-form-item">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          style="width: 200px"
        />
      </el-form-item>
      <el-form-item :label="entryName"  class="select-form-item">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item  class="select-form-item">
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    dateName: {
      type: String,
      default: "时间",
    },
    entryName: {
      type: String,
      default: "名称",
    },
  },
  setup() {
    const form = ref({
      date: "",
      id: "",
      name: "",
    });
    const onSubmit = () => {
    };
    return {
      form,
      onSubmit,
    };
  },
};
</script>

<style lang="less" scoped>
.select-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color:  #f4f4f5;
  .select-form-item{
    margin: auto;
  }
}
</style>

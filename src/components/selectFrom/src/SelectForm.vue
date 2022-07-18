<template>
  <div>
    <el-form label-width="120px" class="select-form">
      <el-form-item :label="dateName" :model="form.value">
        <el-date-picker
          v-model="form.date"
          type="daterange"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          style="width: 200px"
        />
      </el-form-item>
      <el-form-item :label="idName">
        <el-input v-model="form.id" />
      </el-form-item>

      <el-form-item :label="entryName">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item>
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
    idName: {
      type: String,
      default: "id",
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
      console.log(form.value)
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
  justify-content: space-around;
}
</style>

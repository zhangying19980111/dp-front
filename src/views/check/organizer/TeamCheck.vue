<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <el-col :span="5">
          <el-form-item label="队伍名称" prop="tname" class="select-form-item">
            <el-input v-model="form.tname" placeholder="请输入..." />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目状态" prop="status" class="select-form-item">
            <el-select v-model="form.status" class="m-2" placeholder="请选择...">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="select-form-item">
            <el-button type="primary" @click="handleQuery" style="margin-left: 10px">搜索</el-button>
            <el-button @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <zy-table :tableConfig="teamCheck_tableConfig" tableName="队伍审核" />
  </div>
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import { reactive } from "vue";
import { teamCheck_tableConfig } from "./t_config";

export default {
  components: {
    ZyTable,
  },
  setup() {
    const form = reactive({
      tname: '',
      status: 1
    })
    const options = [
      {
        label: '已通过',
        value: 1
      },
      {
        label: '待审核',
        value: 2
      },
      {
        label: '被拒绝',
        value: 3
      }
    ]
    const handleQuery = () => {

    }
    const resetQuery = () => {
      form.tname = "";
    };
    return {
      form,
      options,
      teamCheck_tableConfig,
      handleQuery,
      resetQuery
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
}

.select-form {
  padding: 10px;
  background-color: #f4f4f5;
  width: 93%;
  margin: auto;
  margin-top: 20px;

  .select-form-item {
    margin: auto;
    padding: 10px;
  }
}
</style>

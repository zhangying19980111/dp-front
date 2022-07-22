<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <el-col :span="7">
          <el-form-item label="项目名称" prop="pname" class="select-form-item">
            <el-input v-model="form.pname" placeholder="请输入..." />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="起止日期" prop="date" class="select-form-item">
            <el-date-picker v-model="form.date" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间"
              style="width: 200px" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="审核状态" prop="status" class="select-form-item">
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
    <ProjectTable tableName="我的项目" :isShow="false"/>
  </div>
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import ProjectTable from "@/components/table/ProjectTable.vue";
import { reactive } from 'vue'
export default {
  components: {
    ZyTable,
    ProjectTable
  },
  setup() {
    const form = reactive({
      pname: '',
      date: '',
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
    return {
      form,
      options
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

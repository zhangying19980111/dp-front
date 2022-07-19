<template>
  <div>
    <el-form :model="queryParams" label-width="80px" class="select-form">
      <el-form-item label="项目ID" prop="projectId" class="select-form-item">
        <el-input v-model="queryParams.projectId" placeholder="请输入项目ID" />
      </el-form-item>
      <el-form-item
        label="服务领域"
        prop="serverDomain"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.serverDomain"
          placeholder="请输入项目服务领域"
        />
      </el-form-item>
      <el-form-item
        label="项目日期"
        prop="projectDate"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.projectDate"
          placeholder="请输入项目日期"
        />
      </el-form-item>
      <el-form-item
        label="审核状态"
        prop="checkStatus"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.checkStatus"
          placeholder="请输入审核状态"
        />
      </el-form-item>
      <el-button type="primary" @click="handleQuery" style="margin-left:10px">搜索</el-button>
      <el-button @click="resetQuery">重置</el-button>
    </el-form>
    <zy-table :tableConfig="ProjectCheck_tableConfig" tableName="项目审核"/>
  </div>
</template>
<script>
import ZyTable from "@/components/table/table.vue";
import { ProjectCheck_tableConfig } from "./t_config";

export default {
  components: {
    ZyTable,
  },
  data() {
    return {
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        projectId: null,
        serverDomain: null,
        projectDate: null,
        checkStatus: null,
      },
    };
  },
  setup() {
    return {
      ProjectCheck_tableConfig,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
.select-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f5;
  width: 93%;
  margin: auto;
  margin-top: 20px;
  .select-form-item {
    margin: auto;
  }
}
</style>

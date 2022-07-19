<template>
  <div>
    <el-form :model="queryParams" label-width="80px" class="select-form">
      <el-form-item label="队伍ID" prop="teamId" class="select-form-item">
        <el-input v-model="queryParams.teamId" placeholder="请输入队伍ID" />
      </el-form-item>
      <el-form-item label="队伍名称" prop="teamName" class="select-form-item">
        <el-input v-model="queryParams.teamName" placeholder="请输入队伍名称" />
      </el-form-item>
      <el-form-item
        label="服务领域"
        prop="serverDomain"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.serverDomain"
          placeholder="请输入服务领域"
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
    <zy-table :tableConfig="teamCheck_tableConfig" tableName="队伍审核" />
  </div>
</template>
<script>
import ZyTable from "@/components/table/table.vue";
import { teamCheck_tableConfig } from "./t_config";

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
        teamId: null,
        teamName: null,
        serverDomain: null,
        checkStatus: null,
      },
    };
  },
  setup() {
    return {
      teamCheck_tableConfig,
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

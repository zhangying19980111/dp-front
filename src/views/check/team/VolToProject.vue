<template>
  <div>
    <el-form :model="queryParams" label-width="80px" class="select-form">
      <el-form-item
        label="志愿者ID"
        prop="volunteerId"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.volunteerId"
          placeholder="请输入志愿者ID"
        />
      </el-form-item>
      <el-form-item label="队伍ID" prop="teamId" class="select-form-item">
        <el-input v-model="queryParams.teamId" placeholder="请输入队伍ID" />
      </el-form-item>
      <el-form-item
        label="申请项目ID"
        prop="teamId"
        label-width="100px"
        class="select-form-item"
      >
        <el-input v-model="queryParams.teamId" placeholder="请输入申请项目ID" />
      </el-form-item>
      <el-form-item
        label="加入项目状态"
        prop="toProjectStatus"
        label-width="100px"
        class="select-form-item"
      >
        <el-input
          v-model="queryParams.toProjectStatus"
          placeholder="请输入加入项目状态"
        />
      </el-form-item>
      <el-button type="primary" @click="handleQuery" style="margin-left:10px">搜索</el-button>
      <el-button @click="resetQuery">重置</el-button>
    </el-form>
    <zy-table
      :tableConfig="VolToProject_tableConfig"
      tableName="志愿者入项审核"
    />
  </div>
</template>

<script>
import ZyTable from "@/components/table/table.vue";
import { VolToProject_tableConfig } from "./t_config";

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
        id: null,
        volunteerId: null,
        teamId: null,
        projectId: null,
        toProjectStatus: null,
      },
    };
  },
  setup() {
    return {
      VolToProject_tableConfig,
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

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
      <el-form-item label="用户名" prop="nickname" class="select-form-item">
        <el-input v-model="queryParams.nickname" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="姓名" prop="name" class="select-form-item">
        <el-input v-model="queryParams.name" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone" class="select-form-item">
        <el-input v-model="queryParams.phone" placeholder="请输入手机号" />
      </el-form-item>

      <el-button type="primary" @click="handleQuery" style="margin-left:10px">搜索</el-button>
      <el-button @click="resetQuery">重置</el-button>
    </el-form>
    <zy-table :tableConfig="VolToTeam_tableConfig" tableName="志愿者入队审核" />
  </div>
</template>

<script>
import ZyTable from "@/components/table/table.vue";
import { VolToTeam_tableConfig } from "./t_config";

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
        nickname: null,
        name: null,
        phone: null,
      },
    };
  },
  setup() {
    return {
      VolToTeam_tableConfig,
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

<template>
  <div>
    <h1 style="text-align: center">队伍审核志愿者入项</h1>
  </div>
  <el-card class="content">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="true" label-width="80px">
      <el-form-item label="志愿者ID" prop="volunteerId">
        <el-input
            v-model="queryParams.volunteerId"
            placeholder="请输入志愿者ID"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="队伍ID" prop="teamId">
        <el-input
            v-model="queryParams.teamId"
            placeholder="请输入队伍ID"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="申请项目ID" prop="teamId" label-width="100px">
        <el-input
            v-model="queryParams.teamId"
            placeholder="请输入申请项目ID"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加入项目状态" prop="toProjectStatus" label-width="100px">
        <el-input
            v-model="queryParams.toProjectStatus"
            placeholder="请输入加入项目状态"
            clearable
            size="small"
            @keyup.enter.ntive="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">搜索</el-button>
        <el-button @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <div>
    <zy-table :tableConfig="VolToProject_tableConfig"/>
  </div>
</template>

<script>
import ZyTable from '@/components/table/table.vue'
import {VolToProject_tableConfig} from './t_config'

export default {
  components: {
    ZyTable
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
        toProjectStatus:null

      },
    }
  },
  setup() {
    return {
      VolToProject_tableConfig
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
</style>
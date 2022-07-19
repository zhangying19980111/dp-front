<template>
  <div>
    <h1 style="text-align: center">承办单位审核项目</h1>
  </div>
  <el-card class="content" >
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="true" label-width="80px">
      <el-form-item label="项目ID" prop="projectId">
        <el-input
            v-model="queryParams.projectId"
            placeholder="请输入项目ID"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="服务领域" prop="serverDomain">
        <el-input
            v-model="queryParams.serverDomain"
            placeholder="请输入项目服务领域"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="项目日期" prop="projectDate">
        <el-input
            v-model="queryParams.projectDate"
            placeholder="请输入项目日期"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="审核状态" prop="checkStatus">
        <el-input
            v-model="queryParams.checkStatus"
            placeholder="请输入审核状态"
            clearable
            size="small"
            @keyup.enter.ntive="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="handleQuery">搜索</el-button>
        <el-button size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>

  <div>
    <zy-table :tableConfig="ProjectCheck_tableConfig"/>
  </div>
</template>
<script>
import ZyTable from '@/components/table/table.vue'
import {ProjectCheck_tableConfig} from './t_config'

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
        projectId: null,
        serverDomain: null,
        projectDate: null,
        checkStatus: null,
      },
    }
  },
  setup() {

    return {
      ProjectCheck_tableConfig
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
<template>
  <div>
    <h1 style="text-align: center">队伍审核志愿者入队</h1>
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
      <el-form-item label="用户名" prop="nickname">
        <el-input
            v-model="queryParams.nickname"
            placeholder="请输入用户名"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input
            v-model="queryParams.name"
            placeholder="请输入姓名"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input
            v-model="queryParams.phone"
            placeholder="请输入手机号"
            clearable
            size="small"
            @keyup.enter.ntive="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  @click="handleQuery">搜索</el-button>
        <el-button  @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <div>
    <zy-table :tableConfig="VolToTeam_tableConfig"/>
  </div>
</template>

<script>
import ZyTable from '@/components/table/table.vue'
import {VolToTeam_tableConfig} from './t_config'

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
        nickname: null,
        name: null,
        phone: null,
      },
    }
  },
  setup() {
    return {
      VolToTeam_tableConfig
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
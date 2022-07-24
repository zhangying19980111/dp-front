<template>
  <div>
      <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
         <el-col :span="8">
          <el-form-item
            label="审核状态"
            prop="status"
            label-width="100px" 
            class="select-form-item"
          >
           <el-select
              v-model="form.status"
              class="m-2"
              placeholder="请选择..."
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="8">
          <el-form-item
            label="姓名"
            prop="vname"
            label-width="100px" 
            class="select-form-item"
          >
            <el-input
              v-model="form.vname"
              placeholder="请输入..."
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话号码" prop="vtel" label-width="100px"  class="select-form-item">
            <el-input
              v-model="form.vtel"
              placeholder="请输入..."
            />
          </el-form-item>
        </el-col> -->
       <el-col :span="8">
          <el-form-item class="select-form-item">
            <el-button type="primary" @click="handleQuery" style="margin-left:10px">搜索</el-button>
            <el-button @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props:{
    form:{
      default:{
        vname:'',
        tel:'',
        status:''
      }
    }
  },
  emits:['selectEvent', 'resetEvent'],
  setup (props, {emit}) {
    const options = [
      {
        label: "待审核",
        value: "unverified",
      },
      {
        label: "已通过",
        value: "agreed",
      },
      {
        label: "未通过",
        value: "disagreed",
      },
    ];
    const handleQuery = () => {
      emit('selectEvent')
    }
    const resetQuery = () => {
      emit('resetEvent')
    }
    return {
      options,
      handleQuery,
      resetQuery
    }
  }
}
</script>

<style lang="less" scoped>
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
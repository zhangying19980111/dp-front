<template>
  <el-card class="register-form">
    <template #header>
      <div class="card-header">
        <el-icon :size=24><UserFilled /></el-icon>
        <span style="display:inline-block">团体注册</span>
      </div>
    </template>
    <el-form :model="form" label-width="70px" label-position="right">
      <el-form-item label="用户名：">
        <el-col :span="24">
          <el-input v-model="form.usernme" type="text" />
        </el-col>
      </el-form-item>
      <el-form-item label="密码：">
        <el-col :span="24">
          <el-input
            v-model="form.password"
            type="password"
            autocomplete="off"
            :show-password="true"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="角色：">
        <el-col :span="24">
          <el-select v-model="form.role" placeholder="请选择角色">
            <el-option label="志愿者" value="volunteer" />
            <el-option label="队伍" value="master" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 300px; display: block; margin: auto"
        @click="submit"
        >登录</el-button
      >
    </el-form>
  </el-card>
</template>

<script>
import {ref} from 'vue'
import {UserFilled} from '@element-plus/icons-vue'
export default {
    components:{
        UserFilled
    },
  setup() {
    const form = ref({
        username:'',
        password:'',
        role:''
    })
    return {
        form
    };
  },
};
</script>

<style lang="less" scoped>
.card-header{
    display: flex;
    align-items: center;
}
</style>

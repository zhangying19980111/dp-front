<template>
  <div>
    <el-card class="login-form" >
      <el-form :model="form" label-width="70px" label-position="right">
        <el-form-item label="用户名：">
          <el-col :span="24">
            <el-input 
            v-model="form.usernme"
            type="text" />
          </el-col>
        </el-form-item>
        <el-form-item label="密码：">
          <el-col :span="24">
            <el-input
             v-model="form.password"
            type="password"
            autocomplete="off"
            :show-password=true />
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const form = ref({
      username: "",
      password: "",
      role: "",
    });
    const submit = () => {
        console.log(form.value)
    }
    return {
      form,
      submit
    };
  },
};
</script>

<style lang="less" scoped>
.login-form {
  width: 400px;
}
</style>

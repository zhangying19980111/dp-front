<template>
  <div class="login">
    <el-card class="login-form">
      <el-form
        :model="form"
        label-width="90px"
        label-position="right"
        :rules="rules"
      >
        <el-form-item label="用户名：" prop="username">
          <el-col :span="24">
            <el-input v-model="form.username" type="text" />
          </el-col>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-col :span="24">
            <el-input
              v-model="form.password"
              type="password"
              autocomplete="off"
              :show-password="true"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="角色：" prop="role">
          <el-col :span="24">
            <el-select v-model="form.role" placeholder="请选择角色">
              <el-option label="志愿者" value="volunteer" />
              <el-option label="队伍" value="master" />
              <el-option label="承办单位" value="xxx" />
              <el-option label="服务中心" value="center" />
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
import { reactive, ref } from "vue";
export default {
  setup() {
    const form = reactive({
      username: "",
      password: "",
      role: "",
    });
    const submit = () => {
      console.log(form);
    };
    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
      role: [
        {
          required: true,
          message: "请选择角色",
          trigger: "blur",
        },
      ],
    });
    return {
      form,
      rules,
      submit,
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    width: 400px;
  }
}
</style>

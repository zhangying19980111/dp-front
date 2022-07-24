<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <el-col :span="8">
          <el-form-item label="项目名称" prop="pname" class="select-form-item">
            <el-input v-model="form.pname" placeholder="请输入..." />
          </el-form-item>
        </el-col>
        <!--        <el-col :span="8">-->
        <!--          <el-form-item label="服务领域" prop="domain" class="select-form-item">-->
        <!--            <el-input v-model="form.domain" placeholder="请输入..." />-->
        <!--          </el-form-item>-->
        <!--        </el-col>-->
        <el-col :span="8">
          <el-form-item label="项目状态" prop="status" class="select-form-item">
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
        <el-col :span="8">
          <el-form-item label="起止日期" prop="date" class="select-form-item">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="width: 200px"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item class="select-form-item">
            <el-button
              type="primary"
              @click="handleQuery"
              style="margin-left: 10px"
              >搜索
            </el-button>
            <el-button @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <project-table tableName="项目审核" :tableData="tableData">
      <template #operate="scope">
        <el-button
          link
          type="success"
          size="small"
          @click="
            handleAction(scope.row.volunteer.uid, scope.row.project.id, 'agree')
          "
          >通过</el-button
        >
        <el-button
          link
          type="danger"
          size="small"
          @click="
            handleAction(
              scope.row.volunteer.uid,
              scope.row.project.id,
              'disagree'
            )
          "
          >拒绝</el-button
        >
        <el-button link type="primary" size="small" @click="handleContent"
          >详情</el-button
        >
      </template>
    </project-table>
  </div>
</template>
<script>
import ProjectTable from "@/components/table/ProjectTable.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getProData } from "@/api/check/index";

export default {
  components: {
    ProjectTable,
  },
  setup() {
    const uid = sessionStorage.getItem("uid");
    const form = reactive({
      pname: "",
      // domain: "",
      status: 2,
      date: "",
    });
    const options = [
      {
        label: "已通过",
        value: 1,
      },
      {
        label: "待审核",
        value: 2,
      },
      {
        label: "未通过",
        value: 3,
      },
    ];
    const handleQuery = () => {};
    const resetQuery = () => {
      form.pname = "";
      // form.domain = "";
      form.status = 2;
      form.date = "";
    };
    const state = reactive({
      tableData: [],
    });
    const getData = async (status) => {
      const res = await getProData({ uid, status});
      const volToProData = res.data;
      state.tableData = volToProData.map((item) => {
        return {
          project: {
            id: item.id,
            leaderName: item.leaderName,
            leaderEmail: item.leaderEmail,
            leaderTelephone: item.leaderTelephone,
            projectLocation: item.projectLocation,
            projectName: item.projectName,
            serviceArea: item.serviceArea,
            serviceEndDate: item.serviceEndDate,
            serviceStartDate: item.serviceStartDate,
            serviceTarget: item.serviceTarget,
            status: item.status,
          },
        };
      });
    };
    onMounted(() => {
      getData( "unverified");
    });
    return {
      form,
      ...toRefs(state),
      options,
      handleQuery,
      resetQuery,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
}

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

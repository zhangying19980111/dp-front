<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <el-col :span="7">
          <el-form-item label="项目名称" prop="pname" class="select-form-item">
            <el-input v-model="form.pname" placeholder="请输入..." />
          </el-form-item>
        </el-col>
        <el-col :span="7">
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
          <el-form-item label="审核状态" prop="status" class="select-form-item">
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
          <el-form-item class="select-form-item">
            <el-button
              type="primary"
              @click="handleQuery"
              style="margin-left: 10px"
              >搜索</el-button
            >
            <el-button @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <MyProjectTable tableName="我的项目" :isShow="false" :tableData="tableData">
      <template #operate="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.id)"
          >详情</el-button
        >
           <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.id)"
          >查看我的志愿者</el-button
        >
      </template>
      
    </MyProjectTable>
  </div>
  <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="项目信息"
  />
   <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="志愿者列表"
  />
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import MyProjectTable from "@/components/table/MyProjectTable.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getMyProjectData } from "@/api/check/index";
import { fromByteArray } from "ipaddr.js";
export default {
  components: {
    ZyTable,
    MyProjectTable,
    MyProjectTable,
  },
  setup() {
    const uid = sessionStorage.getItem("uid");
    const role = sessionStorage.getItem("role");
    const contentVisible = ref(false);
    const form = reactive({
      pname: "",
      date: "",
      status: "aggreed",
    });
    const state = reactive({
      tableData: [],
      dialogData: [],
    });
    const options = [
      {
        label: "待审核",
        value: "unverified",
      },
      {
        label: "已通过",
        value: "aggreed",
      },
      {
        label: "待启动",
        value: "pending",
      },
      {
        label: "进行中",
        value: "ongoing",
      },
      {
        label: "已结束",
        value: "finished",
      },
      {
        label: "未通过",
        value: "disagreed",
      },
    ];
    const getData = async () => {
      const res = await getMyProjectData({ role, uid, status: form.status });
      const myProData = res.data;
      
      state.tableData = myProData.map((item) => {
        return {
          id: item.id,
          projectName: item.projectName,
          serviceArea: item.serviceArea,
          serviceStartDate: item.serviceStartDate,
          serviceEndDate: item.serviceEndDate,
          serviceTarget: item.serviceTarget,
          status: statusMap.get(item.status),
          centerName: item.centerName,
          projectLocation: item.projectLocation,
          leaderEmail: item.leaderEmail,
          leaderName: item.leaderName,
          leaderTelephone: item.leaderTelephone,
          teamId: item.teamId,
          teamName: item.teamName,
        };
      });
    };
    onMounted(() => {
      getData();
    });
    const handleContent = async (id) => {
      const res = await getVolToProOneData(id);
      const volToTeamOneData = res.data;
      state.dialogData = [
        {
          label: "姓名",
          value: volToTeamOneData.volunteer.name,
        },
        {
          label: "性别",
          value: volToTeamOneData.volunteer.sex,
        },
        {
          label: "出生日期",
          value: volToTeamOneData.volunteer.birthDate,
        },
        {
          label: "电子邮箱",
          value: volToTeamOneData.volunteer.email,
        },
        {
          label: "电话号码",
          value: volToTeamOneData.volunteer.telephone,
        },
        {
          label: "学历",
          value: volToTeamOneData.volunteer.education,
        },

        {
          label: "特长",
          value: volToTeamOneData.volunteer.specialty,
        },
      ];
      contentVisible.value = true;
    };
    const changeContentVisible = (value) => {
      contentVisible.value = value;
    };
    const handleQuery = async () => {
      const status = form.status;
      const res = await getMyProjectData({ role, uid, status });
      const myProData = res.data;
      state.tableData = myProData.map((item) => {
        return {
          id: item.id,
          projectName: item.projectName,
          serviceArea: item.serviceArea,
          serviceStartDate: item.serviceStartDate,
          serviceEndDate: item.serviceEndDate,
          serviceTarget: item.serviceTarget,
          status: statusMap.get(item.status),
          centerName: item.centerName,
          projectLocation: item.projectLocation,
          leaderEmail: item.leaderEmail,
          leaderName: item.leaderName,
          leaderTelephone: item.leaderTelephone,
          teamId: item.teamId,
          teamName: item.teamName,
        };
      });
    };
    const resetQuery = () => {
      form.pname = "";
      form.date = "";
      form.status="aggreed"
    };
    return {
      ...toRefs(state),
      form,
      contentVisible,
      options,
      handleQuery,
      resetQuery,
      changeContentVisible,
      handleContent,
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

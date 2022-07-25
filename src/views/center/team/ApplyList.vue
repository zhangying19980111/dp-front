<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <!-- <el-col :span="7">
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
        </el-col> -->
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
    <MyProjectTable
      tableName="项目申请记录"
      :isShow="false"
      :tableData="tableData"
    >
      <template #operate="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.id)"
          >详情</el-button
        >
      </template>
    </MyProjectTable>
  </div>
  <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="项目详情"
  />
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import MyProjectTable from "@/components/table/MyProjectTable.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getApplyData, getApplyOneData } from "@/api/check/index";
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
      status: "unverified",
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
        value: "agreed",
      },
      {
        label: "未通过",
        value: "disagreed",
      },
    ];
    const getData = async (status) => {
      const res = await getApplyData({ role, uid, status});
      const myProData = res.data;
      state.tableData = myProData.map((item) => {
        return {
          id: item.id,
          projectName: item.projectName?item.projectName:'暂无',
          serviceArea: item.serviceArea?item.serviceArea:'暂无',
          serviceStartDate: item.serviceStartDate?item.serviceStartDate:'暂无',
          serviceEndDate: item.serviceEndDate?item.serviceEndDate:'暂无',
          serviceTarget: item.serviceTarget?item.serviceTarget:'暂无',
          status: statusMap.get(item.status),
          centerName: item.centerName?item.centerName:'暂无',
          projectLocation: item.projectLocation?item.projectLocation:'暂无',
          leaderEmail: item.leaderEmail?item.leaderEmail:'暂无',
          leaderName: item.leaderName?item.leaderName:'暂无',
          leaderTelephone: item.leaderTelephone?item.leaderTelephone:'暂无',
          teamId: item.teamId,
          teamName: item.teamName?item.teamName:'暂无',
        };
      });
    };
    onMounted(() => {
      getData("unverified");
    });
    const handleContent = async (id) => {
      const res = await getApplyOneData({ id });
      const volToTeamOneData = res.data;
      state.dialogData = [
        {
          label: "项目名称",
          value: volToTeamOneData.projectName,
        },
        {
          label: "服务领域",
          value: volToTeamOneData.serviceArea,
        },
        {
          label: "服务对象",
          value: volToTeamOneData.serviceTarget,
        },
        {
          label: "服务地点",
          value: volToTeamOneData.projectLocation,
        },
        {
          label: "起止日期",
          value: `${volToTeamOneData.serviceStartDate} 至 ${volToTeamOneData.serviceEndDate}`,
        },
        {
          label: "负责人",
          value: volToTeamOneData.leaderName,
        },
        {
          label: "负责人电话",
          value: volToTeamOneData.leaderTelephone,
        },
        {
          label: "负责人邮箱",
          value: volToTeamOneData.leaderEmail,
        },
      ];
      contentVisible.value = true;
    };
    const changeContentVisible = (value) => {
      contentVisible.value = value;
    };
    const handleQuery = async () => {
      const status = form.status;
      getData(status);
    };
    const resetQuery = () => {
      form.pname = "";
      form.date = "";
      form.status = "unverified";
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

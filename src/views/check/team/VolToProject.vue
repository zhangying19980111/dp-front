<template>
  <div>
    <vol-form />
    <vol-table tableName="志愿者入项审核" :tableData="tableData">
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
        <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.id)"
          >详情</el-button
        >
      </template>
    </vol-table>
  </div>
  <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="志愿者信息"
  />
</template>

<script>
import VolForm from "@/components/selectFrom/src/VolSelectForm.vue";
import VolTable from "@/components/table/VolToProjectTable.vue";
import MyDialog from "@/components/dialog/MyDialog.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getVolToProData, putVolToProStatus, getVolToProOneData  } from "@/api/check/index";
export default {
  components: {
    VolForm,
    VolTable,
    MyDialog,
  },
  setup() {
    const uid = sessionStorage.getItem("uid");
    const role = sessionStorage.getItem("role");
    const contentVisible = ref(false);
    const form = reactive({
      vname: "",
      vtel: "",
      pname: "",
    });
    const state = reactive({
      tableData: [],
      dialogData: [],
    });
    const getData = async () => {
      const res = await getVolToProData({ role, uid, status: "unverified" });
      const volToProData = res.data;
      state.tableData = volToProData.map((item) => {
        return {
          id: item.id,
          status: statusMap.get(item.status),
          volunteer: {
            id: item.volunteer.id,
            uid: item.uid,
            name: item.volunteer.name,
            education: item.volunteer.education,
            email: item.volunteer.email,
            sex: item.volunteer.sex,
            specialty: item.volunteer.specialty,
            telephone: item.volunteer.telephone,
          },
          project: {
            id: item.project.id,
            leaderName: item.project.leaderName,
            leaderEmail: item.project.leaderEmail,
            leaderTelephonem: item.project.leaderTelephonem,
            projectLocation: item.project.projectLocation,
            projectName: item.project.projectName,
            serviceArea: item.project.serviceArea,
            serviceEndDate: item.project.serviceEndDate,
            serviceStartDate: item.project.serviceStartDate,
            serviceTarget: item.project.serviceTarget,
            status: item.project.status,
          },
        };
      });
    };
    onMounted(() => {
      getData();
    });
    const handleAction = async (uid, pid, action) => {
      try {
        await putVolToProStatus({ role, uid, pid, action });
        ElMessage({
          showClose: true,
          message: "修改成功",
          type: "success",
        });
        getData();
      } catch (e) {}
    };
    const handleContent = async (id) => {
      const res = await getVolToProOneData({role, id});
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
    return {
      form,
      contentVisible,
      ...toRefs(state),
      handleAction,
      handleContent,
      changeContentVisible,
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

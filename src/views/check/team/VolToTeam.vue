<template>
  <div>
    <vol-form
      @selectEvent="handleSelectEvent"
      @resetEvent="handleResetEvent"
      :form="form"
    />
    <vol-table tableName="志愿者入队审核" :tableData="tableData">
      <template #operate="scope">
        <el-button
          link
          type="success"
          size="small"
          v-show="scope.row.status === '待审核'"
          @click="handleAction(scope.row.id, 'agree')"
          >通过</el-button
        >
        <el-button
          link
          type="danger"
          size="small"
          v-show="scope.row.status === '待审核'"
          @click="handleAction(scope.row.id, 'disagree')"
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
import VolTable from "@/components/table/VolToTeamTable.vue";
import VolForm from "@/components/selectFrom/src/VolSelectForm.vue";
import MyDialog from "@/components/dialog/MyDialog.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import {
  getVolToTeamData,
  putVolToTeamStatus,
  getVolToTeamOneData,
} from "@/api/check/index";
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
      status: "unverified",
    });
    const state = reactive({
      tableData: [],
      dialogData: [],
    });
    const getData = async (status) => {
      const res = await getVolToTeamData({ uid, status});
      const volToTeamData = res.data;
      state.tableData = volToTeamData.map((item) => {
        return {
          id: item.id,
          status: statusMap.get(item.status),
          volunteer: {
            id: item.volunteer.id,
            name: item.volunteer.name,
            education: item.volunteer.education,
            email: item.volunteer.email,
            sex: item.volunteer.sex,
            specialty: item.volunteer.specialty,
            telephone: item.volunteer.telephone,
          },
        };
      });
    };
    onMounted(() => {
      getData("unverified" );
    });
    const handleAction = async (id, action) => {
      try {
        await putVolToTeamStatus({ id, action });
        ElMessage({
          showClose: true,
          message: "修改成功",
          type: "success",
        });
        getData(form.status);
      } catch (e) {}
    };
    const handleContent = async (id) => {
      const res = await getVolToTeamOneData({ id });
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
    const handleSelectEvent = () => {
      getData(form.status);
    };
    const handleResetEvent = () => {
      form.vname = "";
      form.vtel = "";
      form.status = "unverified";
    };
    return {
      form,
      ...toRefs(state),
      contentVisible,
      handleAction,
      handleContent,
      changeContentVisible,
      handleSelectEvent,
      handleResetEvent
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
}
</style>

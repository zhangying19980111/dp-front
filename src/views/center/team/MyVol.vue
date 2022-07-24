<template>
  <div>
    <vol-form />
    <VolTable tableName="我的成员" :isShow="false" :tableData="tableData">
      <template #operate="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.id)"
          >详情</el-button
        >
      </template></VolTable
    >
  </div>
  <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="志愿者信息"
  />
</template>

<script>
import VolTable from "@/components/table/MyVolTable.vue";
import VolForm from "@/components/selectFrom/src/VolSelectForm.vue";
import MyDialog from "@/components/dialog/MyDialog.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import { getMyVolData, getVolToTeamOneData } from "@/api/check/index";
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
    const state = reactive({
      tableData: [],
      dialogData: [],
    });
    const getData = async () => {
      const res = await getMyVolData({ uid, status: "agreed" });
      const myVolData = res.data;
      state.tableData = myVolData.map((item) => {
        return {
          id: item.id,
          volunteer: {
            id: item.volunteer.id,
            uid: item.uid,
            name: item.volunteer.name,
            education: item.volunteer.education,
            email: item.volunteer.email,
            sex: item.volunteer.sex,
            specialty: item.volunteer.specialty,
            telephone: item.volunteer.telephone,
          }
        };
      });
    };
    onMounted(() => {
      getData();
    });
    const handleContent = async (id) => {
      const res = await getVolToTeamOneData({id});
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
      contentVisible,
      ...toRefs(state),
      handleContent,
      changeContentVisible,
    };
  },
};
</script>

<style lang="less" scoped></style>

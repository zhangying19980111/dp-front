<template>
  <div>
    <vol-form />
    <vol-table tableName="志愿者入队审核" :tableData="tableData">
      <template #operate="scope">
        <el-button
          link
          type="success"
          size="small"
          @click="handleAction(scope.row.id, 'agree')"
          >通过</el-button
        >
        <el-button
          link
          type="danger"
          size="small"
          @click="handleAction(scope.row.id, 'disagree')"
          >拒绝</el-button
        >
        <el-button link type="primary" size="small" @click="handleContent(scope.row.id)"
          >详情</el-button
        >
      </template>
    </vol-table>
  </div>
  <my-dialog :contentVisible="contentVisible" @closeDialog="changeContentVisible"/>
</template>

<script>
import VolTable from "@/components/table/VolToTeamTable.vue";
import VolForm from "@/components/selectFrom/src/VolSelectForm.vue";
import MyDialog from '@/components/dialog/MyDialog.vue';
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getVolToTeamData, putVolToTeamStatus, getVolToTeamOneData } from "@/api/check/index";
export default {
  components: {
    VolForm,
    VolTable,
    MyDialog
  },
  setup() {
    const uid = sessionStorage.getItem("uid");
    const role = sessionStorage.getItem("role");
    const state = reactive({
      tableData: [],
    });
    const getData = async () => {
      const res = await getVolToTeamData({ uid, status: "unverified" });
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
      getData();
    });
    const handleAction = async (id, action) => {
      try {
        await putVolToTeamStatus({ id, action });
        ElMessage({
          showClose: true,
          message: "修改成功",
          type: "success",
        });
        getData();
      } catch (e) {}
    };
    const contentVisible = ref(false)
    const handleContent = async (id) => {
      const res = await getVolToTeamOneData({id})
      const volToTeamOneData = res.data
      volToTeamOneData
      console.log(volToTeamOneData)
      // contentVisible.value = true
    }
    const changeContentVisible = (value) => {
      contentVisible.value = value
    }
    return {
      ...toRefs(state),
      contentVisible,
      handleAction,
      handleContent,
      changeContentVisible
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

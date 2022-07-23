<template>
  <div>
    <vol-form />
    <vol-table tableName="志愿者入项审核" :tableData="tableData" />
  </div>
</template>

<script>
import VolForm from "@/components/selectFrom/src/VolSelectForm.vue";
import VolTable from "@/components/table/VolTable.vue";
import { reactive, onMounted, ref, toRefs } from "vue";
import {statusMap} from '@/utils/statusMap'
import { getVolToProData } from "@/api/check/index";
export default {
  components: {
    VolForm,
    VolTable,
  },
  setup() {
    const role = sessionStorage.getItem("role");
    const uid = sessionStorage.getItem("uid");
    const state  = reactive({
      tableData:[]
    })
    const getData = async () => {
      const res = await getVolToProData({ role, uid, status: "unverified" });
      const volToProData = res.data;
      console.log(volToProData)
      state.tableData = volToProData.map((item) => {
          return {
            status:statusMap.get(item.status),
            // status: item.status,
            volunteer: {
              id: item.volunteer.id,
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
    }
    onMounted(() => {
      getData();
    });
    const form = reactive({
      vname: "",
      vtel: "",
      pname: "",
    });
    return {
      form,
       ...toRefs(state),
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

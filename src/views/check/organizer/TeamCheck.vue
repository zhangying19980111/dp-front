<template>
  <div>
    <el-form :model="form" label-width="80px" class="select-form">
      <el-row>
        <!-- <el-col :span="8">
          <el-form-item label="队伍名称" prop="tname" class="select-form-item">
            <el-input v-model="form.tname" placeholder="请输入..." />
          </el-form-item>
        </el-col> -->
        <el-col :span="8">
          <el-form-item label="队伍状态" prop="status" class="select-form-item">
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
    <zy-table
      :tableConfig="teamCheck_tableConfig"
      tableName="队伍审核"
      :tableData="tableData"
    >
      <template #operate="scope">
        <el-button
          link
          type="success"
          size="small"
          @click="handleAction(scope.row.team.id, 'agree')"
          v-show="scope.row.team.status === '待审核'"
          >通过
        </el-button>
        <el-button
          link
          type="danger"
          size="small"
          @click="handleAction(scope.row.team.id, 'disagree')"
          v-show="scope.row.team.status === '待审核'"
          >拒绝
        </el-button>
        <el-button
          link
          type="primary"
          size="small"
          @click="handleContent(scope.row.team.id)"
          >详情
        </el-button>
      </template>
    </zy-table>
  </div>
  <my-dialog
    :contentVisible="contentVisible"
    @closeDialog="changeContentVisible"
    :dialogData="dialogData"
    title="队伍信息"
  />
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import { teamCheck_tableConfig } from "./t_config";
import { reactive, onMounted, ref, toRefs } from "vue";
import { statusMap } from "@/utils/statusMap";
import { getTeamData, verifyTeam, getTeamOneData } from "@/api/check/index";

export default {
  components: {
    ZyTable,
  },
  tableData: {
    type: Array,
  },
  setup() {
    const uid = sessionStorage.getItem("uid");
    const contentVisible = ref(false);
    const form = reactive({
      tname: "",
      status: "unverified",
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
    const handleQuery = async () => {
      getData(form.status);
    };
    const resetQuery = () => {
      form.status = "unverified";
    };
    const state = reactive({
      tableData: [],
      dialogData: [],
    });
    const getData = async (status) => {
      const res = await getTeamData({ status });
      const teamData = res.data;
      state.tableData = teamData.map((item) => {
        return {
          team: {
            id: item.id,
            leaderName: item.address?item.address:'暂无',
            leaderEmail: item.area?item.area:'暂无',
            contact: item.contact?item.contact:'暂无',
            contactTelephone: item.contactTelephone?item.contactTelephone:'暂无',
            leader: item.leader?item.leader:'暂无',
            leaderTelephone: item.leaderTelephone?item.leaderTelephone:'暂无',
            name: item.name?item.name:'暂无',
            organizer: item.organizer?item.organizer:'暂无',
            serveField: item.serveField?item.serveField:'暂无',
            status: statusMap.get(item.status),
          },
        };
      });
    };
    onMounted(() => {
      getData("unverified");
    });
    const handleAction = async (id, action) => {
      try {
        await verifyTeam({ id, action });
        ElMessage({
          showClose: true,
          message: "修改成功",
          type: "success",
        });
        getData(form.status);
      } catch (e) {
      }
    };
    const handleContent = async (id) => {
      const res = await getTeamOneData({ id });
      const teamOneData = res.data;
      state.dialogData = [
        {
          label: "队伍名称",
          value: teamOneData.name,
        },
        {
          label: "服务领域",
          value: teamOneData.serveField,
        },
        {
          label: "主管单位",
          value: teamOneData.organizer,
        },
        {
          label: "联系人",
          value: teamOneData.contact,
        },
        {
          label: "联系人手机号",
          value: teamOneData.contactTelephone,
        },
        {
          label: "负责人",
          value: teamOneData.leader,
        },
        {
          label: "负责人手机号",
          value: teamOneData.leaderTelephone,
        },
        {
          label: "队伍区域",
          value: teamOneData.area,
        },
        {
          label: "详细地址",
          value: teamOneData.address,
        },
      ];
      contentVisible.value = true;
    };
    const changeContentVisible = (value) => {
      contentVisible.value = value;
    };
    return {
      form,
      ...toRefs(state),
      options,
      teamCheck_tableConfig,
      handleQuery,
      resetQuery,
      handleAction,
      handleContent,
      contentVisible,
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

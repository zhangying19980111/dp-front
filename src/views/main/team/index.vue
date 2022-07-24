<template>
  <div class="content">
    <!-- <SelectForm dateName="团体注册日期" entryName="团体名称" /> -->
    <el-card style="padding-bottom: 30px;">
      <template v-for="item in teamData" :key="item">
        <InfoCard
          :date="item.date"
          :name="item.name"
          :imgSrc="TeamLogo"
          @getInfo="toInfo(item.id)"
          style="float: left; margin-left: 5%; margin-top: 10px"
        />
      </template>
    </el-card>
  </div>
</template>

<script>
import InfoCard from "@/components/infoCard/src/InfoCard.vue";
import SelectForm from "@/components/selectFrom/src/SelectForm.vue";
import TeamLogo from "@/assets/img/team_logo.png";
import { ref, reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getAllTeams, getOneTeams } from "@/api/team/index";
import formatUicString from "@/utils/data-format";
export default {
  components: {
    InfoCard,
    SelectForm,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      teamData: [],
    });
    const getData = async (status) => {
      const res = await getAllTeams({ status });
      const teams = res.data;
      state.teamData = teams.map((item) => {
        return {
          id: item.id,
          name: item.name || "暂无",
          date: formatUicString(item.createTime),
          address: item.address,
          area: item.area,
          contact: item.contact,
          contactEmail: item.contactEmail,
          contactTelephone: item.contactTelephone,
          headcount: item.headcount,
          leader: item.leader,
          leaderTelephone: item.leaderTelephone,
          organizer: item.organizer,
          serveField: item.serveField,
          status: item.status,
          teamStatus: item.teamStatus,
          uid: item.uid,
        };
      });
    };
    onMounted(() => {
      getData( "agreed");
    });
    const toInfo = async (id) => {
      const res = await getOneTeams({ id });
      const team = res.data;
      const contentLabel = [
        "队伍名称",
        "区域",
        "详细地址",
        "队伍人数",
        "服务领域",
      ];
      const contentValue = [
        team.name || '暂无',
        team.area || '暂无',
        team.address || '暂无',
        team.headcount || '暂无',
        team.serveField || '暂无',
      ];
      const linkLabel = ["联系人", "电话", "Email"];
      const linkValue = [
        team.contact || '暂无',
        team.contactTelephone || '暂无',
        team.contactEmail || '暂无',
      ];
      router.push({
        name: "team.info",
        query: { contentLabel, contentValue, linkLabel, linkValue },
      });
    };
    return {
      TeamLogo,
      ...toRefs(state),
      toInfo,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 90%;
  margin: auto;
  margin-top: 20px;
}
</style>

<template>
  <div class="content">
    <!-- <SelectForm dateName="项目发布日期" entryName="项目名称"/> -->
    <el-card style="padding-bottom: 30px">
      <template v-for="item in proData" :key="item">
        <InfoCard
          :date="item.date"
          :name="item.name"
          :imgSrc="ProjectLogo"
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
import ProjectLogo from "@/assets/img/project_logo.png";
import { reactive, onMounted, toRefs } from "vue";
import { useRouter } from "vue-router";
import { getAllProjects, getOneProject } from "@/api/project/index";
import formatUicString from "@/utils/data-format";
export default {
  components: {
    InfoCard,
    SelectForm,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      proData: [],
    });
    const getData = async () => {
      const res = await getAllProjects();
      const projects = res.data;
      state.proData = projects.map((item) => {
        return {
          id: item.id,
          name: item.projectName || "暂无",
          date: item.serviceStartDate || "暂无",
        };
      });
    };
    onMounted(() => {
      getData();
    });
    const toInfo = async (id) => {
      const res = await getOneProject({ id });
      const pro = res.data;
      const contentLabel = [
        "项目名称",
        "服务领域",
        "服务对象",
        "服务地点",
        "发布团队",
        "起止时间",
      ];
      const contentValue = [
        pro.projectName || "暂无",
        pro.serviceArea || "暂无",
        pro.serviceTarget || "暂无",
        pro.projectLocation || "暂无",
        pro.teamName || "暂无",
        `${pro.serviceStartDate} 至 ${pro.serviceEndDate}` || "暂无",
      ];
      const linkLabel = ["负责人", "电话", "Email"];
      const linkValue = [
        pro.leaderName || "暂无",
        pro.leaderTelephone || "暂无",
        pro.leaderEmail || "暂无",
      ];
      router.push({
        name: "project.info",
        query: { contentLabel, contentValue, linkLabel, linkValue },
      });
    };
    return {
      ...toRefs(state),
      ProjectLogo,
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

<template>
  <div class="content">
    <SelectForm dateName="项目发布日期" entryName="项目名称"/>
    <el-card style="padding-bottom: 30px;">
      <template v-for="item in array" key="item">
        <InfoCard
          date="2022.07.09"
          name="项目名称"
          :imgSrc="ProjectLogo"
          @getInfo="toInfo"
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
import { ref } from "vue";
import {  useRouter } from 'vue-router'
export default {
  components: {
    InfoCard,
    SelectForm,
  },
  setup() {
    const router = useRouter()
    const array = ref([1, 2, 3, 4, 5, 6]);
    const toInfo = (id) => {
      router.push('/project/info')
    };
    return {
      array,
      ProjectLogo,
      toInfo
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

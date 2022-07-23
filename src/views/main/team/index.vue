<template>
  <div class="content">
    <SelectForm dateName="团体注册日期" entryName="团体名称"/>
    <el-card>
      <template v-for="item in array" key="item">
        <InfoCard date="2022.07.10" name="团队名称" :imgSrc="TeamLogo" @getInfo="toInfo"
          style="float: left; margin-left: 5%; margin-top: 10px" />
      </template>
    </el-card>
  </div>
</template>

<script>
import InfoCard from "@/components/infoCard/src/InfoCard.vue";
import SelectForm from "@/components/selectFrom/src/SelectForm.vue"
import TeamLogo from '@/assets/img/team_logo.png'
import { ref } from "vue";
import { useRouter } from 'vue-router'
export default {
  components: {
    InfoCard,
    SelectForm
  },
  setup() {
    const router = useRouter()
    const array = ref([1, 2, 3, 4, 5, 6]);
    const toInfo = (id) => {
      router.push('/team/info')
    }
    return {
      array,
      TeamLogo,
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

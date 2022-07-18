<template>
  <div class="content">
    <SelectForm/>
    <el-card>
      <template v-for="item in array" key="item">
        <InfoCard date="2022.07.10" name="团队名称" :imgSrc="TeamLogo"
          style="float: left; margin-left: 5%; margin-top: 10px"
        />
      </template>
    </el-card>
  </div>
</template>

<script>
import InfoCard from "@/components/infoCard/src/InfoCard.vue";
import SelectForm from "@/components/selectFrom/src/SelectForm.vue"
import TeamLogo from '@/assets/img/team_logo.png'
import { ref } from "vue";
export default {
  components: {
    InfoCard,
    SelectForm
  },
  setup() {
    const array = ref([1, 2, 3, 4, 5, 6]);
    return {
      array,
      TeamLogo
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

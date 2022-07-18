<template>
  <div class="content">
    <SelectForm/>
    <el-card>
      <template v-for="item in array" key="item">
        <ProjectInfoCard
          style="float: left; margin-left: 5%; margin-top: 10px"
        />
      </template>
    </el-card>
  </div>
</template>

<script>
import ProjectInfoCard from "./ProjectInfoCard/ProjectInfoCard.vue";
import SelectForm from "@/components/selectFrom/src/SelectForm.vue"
import { ref } from "vue";
export default {
  components: {
    ProjectInfoCard,
    SelectForm
  },
  setup() {
    const array = ref([1, 2, 3, 4, 5, 6]);
    return {
      array,
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

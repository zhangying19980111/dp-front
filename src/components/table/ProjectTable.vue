<template>
  <div>
     <zy-table :tableConfig="ProjectCheck_tableConfig" :tableName="tableName" :isShow="isShow" />
  </div>
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import { ProjectCheck_tableConfig } from "./p_config";

export default {
  components: {
    ZyTable,
  },
  props:{
    tableName:{
      type:String,
      default:'项目审核'
    },
    isShow:{
      type:Boolean,
      default:true
    }
  },
  setup() {
    return {
      ProjectCheck_tableConfig,
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

<template>
  <div>
    <zy-table :tableConfig="VolToTeam_tableConfig" :tableName="tableName" />
  </div>
</template>
<script>
import ZyTable from "@/components/table/Table.vue";
import { VolToTeam_tableConfig } from "./v_config";

export default {
  components: {
    ZyTable,
  },
  props: {
    tableName: {
      type: String,
      default: '成员审核'
    }
  },
  setup() {
    return {
      VolToTeam_tableConfig,
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

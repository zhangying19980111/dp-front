<template>

  <div class="content">
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="item in tableConfig" :prop="item.prop" :label="item.label" />
        <el-table-column fixed="right" label="操作" width="200">
          <template #default>
            <el-button link type="primary" size="small">通过</el-button>
            <el-button link type="primary" size="small">补充材料</el-button>
            <el-button link type="primary" size="small">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    tableConfig: {
   
    },
    tableData: {
      // type: () => [],
      default: [
        {
          id: '0',
          volunteerId: '1',
          nickname: '8',
          name: '2',
          sex: '3',
          birthday: '4',
          phone: '5',
          education: '6',
          processional: '7',
          // password:'',
        }
      ]
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
</style>
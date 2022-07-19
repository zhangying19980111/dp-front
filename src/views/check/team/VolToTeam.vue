<template>
  <div>
    <zy-table :tableConfig="tableConfig"/>
  </div>
</template>

<script>
import ZyTable from '@/components/table/table.vue'
import {tableConfig} from './t_config'
export default {
  components:{
    ZyTable
  },
  setup () {
    

    return {
      tableConfig
    }
  }
}
</script>

<style lang="less" scoped>

</style>
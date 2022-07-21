<template>
  <div>
    <vol-form/>
    <VolTable tableName="我的成员"/>  
  </div>
</template>

<script>
import VolTable from "@/components/table/VolTable.vue";
import VolForm from '@/components/selectFrom/src/VolSelectForm.vue'
export default {
  components:{
    VolForm,
    VolTable
  },
  setup () {
    

    return {
      
    }
  }
}
</script>

<style lang="less" scoped>

</style>
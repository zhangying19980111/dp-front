<template>
    <div>
        <Content :imgSrc="TeamLogo" :contentLabel="contentLabel"  :contentValue="contentValue"/>
    </div>
</template>

<script>
import Content from '@/components/content/src/Content.vue'
import TeamLogo from "@/assets/img/team_logo.png";
import {ref} from 'vue'
export default {
    components:{
        Content,

    },
    setup () {
        const contentLabel = ref(["队伍名称", "详细地址","联系人", "联系人电话"])
        const contentValue = ref([])
        return {
            TeamLogo,
            contentLabel,
            contentValue
        }
    }
}
</script>

<style lang="less" scoped>

</style>
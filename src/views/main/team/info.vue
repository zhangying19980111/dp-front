<template>
    <div>
        <Content :imgSrc="TeamLogo" :contentLabel="contentLabel"  :contentValue="contentValue" :linkLabel="linkLabel"
        :linkValue="linkValue"/>
    </div>
</template>

<script>
import Content from '@/components/content/src/Content.vue'
import TeamLogo from "@/assets/img/team_logo.png";
import {ref} from 'vue'
import { useRoute } from 'vue-router';
export default {
    components:{
        Content,
    },
    setup () {
        const route = useRoute()
        const contentLabel = route.query.contentLabel
        const contentValue = route.query.contentValue
         const linkLabel = route.query.linkLabel
        const linkValue = route.query.linkValue
        return {
            TeamLogo,
            contentLabel,
            contentValue,
            linkLabel,
            linkValue
        }
    }
}
</script>

<style lang="less" scoped>

</style>
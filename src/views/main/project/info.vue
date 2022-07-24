<template>
  <div>
    <Content
      :imgSrc="ProjectLogo"
      :contentLabel="contentLabel"
      :contentValue="contentValue"
      :linkLabel="linkLabel"
      :linkValue="linkValue"
    />
  </div>
</template>

<script>
import Content from "@/components/content/src/Content.vue";
import ProjectLogo from "@/assets/img/project_logo.png";
import { useRoute } from "vue-router";
export default {
  components: {
    Content,
  },
  setup() {
    const route = useRoute();
    const contentLabel = route.query.contentLabel;
    const contentValue = route.query.contentValue;
    const linkLabel = route.query.linkLabel;
    const linkValue = route.query.linkValue;
    return {
      ProjectLogo,
      contentLabel,
      contentValue,
      linkLabel,
      linkValue,
    };
  },
};
</script>

<style lang="less" scoped></style>

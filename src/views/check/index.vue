<template>
  <div>
    <team-tab v-if="role === 'master'" />
    <center-tab v-if="role === 'center'" />
  </div>
</template>

<script>
import TeamTab from "@/components/tab/TeamTab.vue";
import CenterTab from "@/components/tab/CenterTab.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  components: {
    TeamTab,
    CenterTab,
  },
  setup() {
    const store = useStore();
    const role = computed(() => store.state.login.role);
    return {
      role,
    };
  },
};
</script>

<style lang="less" scoped></style>

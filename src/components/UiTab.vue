<template>
  <slot v-if="selectedTabState.selectedTabKey == tabKey" />
</template>

<script>
import { inject } from "vue";

export default {
  props: ["title", "tab-key"],
  setup(props) {
    const selectedTabState = inject("selectedTabState");
    return { ...props, selectedTabState };
  },
};
</script>


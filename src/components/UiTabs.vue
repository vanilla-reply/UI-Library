<template>
  <div class="ui-tabs">
    <div
      v-for="tab in tabs"
      :key="tab.key"
      :class="[
        'ui-tab',
        {
          'ui-tab--selected': tab.key === selectedTabState.selectedTabKey,
        },
      ]"
      @click="selectedTabState.selectedTabKey = tab.key"
    >
      {{ tab.title }}
    </div>
    <div class="ui-tab-content">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, provide, reactive } from "vue";

export default {
  setup(props, { slots }) {
    const tabs = ref([]);
    const selectedTabState = reactive({ selectedTabKey: null });
    provide("selectedTabState", selectedTabState);
    onMounted(function () {
      tabs.value = slots.default().map((i) => {
        if (i.props && i.props["tab-key"]) {
          return {
            key: i.props["tab-key"],
            title: i.props.title,
          };
        }
      });
      selectedTabState.selectedTabKey = tabs.value[0] && tabs.value[0].key;
    });
    return { tabs, selectedTabState };
  },
};
</script>

<style>
.ui-tabs {
  @apply font-sans;
}
.ui-tab {
  @apply relative;
  @apply inline-block p-4;
  @apply border-0 border-b-2 border-solid border-neutral-300;
  @apply cursor-pointer;

  &--selected {
    @apply font-bold;
    @apply border-neutral-500;
  }
}
.ui-tab-content {
  @apply px-4 py-6;
}
</style>

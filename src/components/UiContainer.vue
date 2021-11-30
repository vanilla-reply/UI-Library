<template>
  <div
    class="ui-container"
    :class="{ 'ui-container--full': fullscreen, 'ui-container--compact': noSpacing }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiContainer",
  data() {
    return {};
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false,
    },
    noSpacing: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="pcss">
.ui-container {
  @apply mx-auto;
  @apply max-w-7xl;
  @apply mt-8 mb-16;

  &--full {
    @apply max-w-full;
  }
  &--compact {
    @apply mt-0 mb-0;
  }
}
</style>

<template>
  <div
    :class="{ 'max-w-7xl': !fullscreen, 'mt-8 mb-16': !noSpacing }"
    class="mx-auto"
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

<style lang="scss" scoped></style>

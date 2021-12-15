<template>
  <component :is="tag">
    <span v-if="name">{{ name }}</span>
  </component>
</template>

<script>
/**
 * This should feature an image or logo
 * Prio: Low
 */
export default {
  name: "UiBrand",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
    name: {
      type: [String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="pcss"></style>

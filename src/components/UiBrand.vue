<template>
  <component :is="tag">
    <span v-if="name">{{ name }}</span>
  </component>
</template>

<script>
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

<template>
  <button class="border p-4">{{ label }}</button>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    label: {
      type: String,
      default: "Geiler Button",
    },
  },
};
</script>

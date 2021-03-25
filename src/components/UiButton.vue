<template>
  <button class="p-4 text-pink-500 border bg-primary bg-primary-500">
    {{ label }}
  </button>
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

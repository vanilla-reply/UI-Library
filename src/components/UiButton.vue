<template>
  <button class="border p-4">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Geiler Button",
    },
  },
};
</script>

<template>
  <nav
    class="ui-navbar"
    :class="{
      [variantClass]: variantClass,
    }"
  >
    <!-- Logo -->
    <!-- Navigation -->
    <!-- Navigation Toggle -->
    <!-- SEarch Input -->
  </nav>
</template>

<script>
export default {
  name: "UiNavbar",
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    variantClass() {
      return "ui-navbar--" + this.variant;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-navbar {
  @apply relative;
}
</style>

<template>
  <nav
    class="ui-navbar"
    :class="{
      [variantClass]: variantClass,
      [sizeClass]: sizeClass,
    }"
  >
    <slot />
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
    size: {
      type: String,
      default: "sm",
    },
  },
  computed: {
    variantClass() {
      return "ui-navbar--" + this.variant;
    },
    sizeClass() {
      return "ui-navbar--" + this.size;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-navbar {
  @apply relative;

  &--primary {
    @apply bg-primary-500;
    color: white;
  }

  &--secondary {
    @apply bg-secondary-500;
    color: white;
  }

  &--sm {
    @apply px-2 py-2;
  }

  &--md {
    @apply px-2 py-4;
  }

  &--lg {
    @apply px-2 py-8;
  }

  &--xl {
    @apply px-2 py-8;
  }

  &--xxl {
    @apply px-4 py-8;
  }
}
</style>

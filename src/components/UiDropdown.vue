<template>
  <div class="ui-dropdown">
    <ui-button @click.self="handleDropdown()" :size="size">Dropdown</ui-button>
    <transition name="fade">
      <div
        v-if="dropdownVisible"
        class="ui-dropdown__item-wrapper"
        :class="{ [orientationClass]: orientationClass }"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import UiButton from "./UiButton.vue";
export default {
  name: "UiDropdown",
  components: { UiButton },
  props: {
    size: {
      type: String,
      default: "sm",
    },
    orientation: {
      type: String,
      default: "south",
    },
  },
  data() {
    return {
      dropdownVisible: false,
    };
  },
  computed: {
    orientationClass() {
      return "ui-dropdown__item-wrapper--" + this.orientation;
    },
  },
  methods: {
    handleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<!-- <style lang="scss" scoped> -->
<!-- .ui-dropdown { -->
<!--   @apply relative inline-block; -->
<!--   &__item-wrapper { -->
<!--     @apply absolute inline-block; -->
<!--     @apply border border-solid; -->
<!--     @apply p-2 rounded; -->
<!--     @apply bg-white; -->

<!--     border-color: #333333; -->

<!--     &--south { -->
<!--       min-width: 200%; -->

<!--       left: 0; -->
<!--       top: calc(100% + 8px); -->

<!--       &::before { -->
<!--         content: ""; -->
<!--         z-index: 10; -->
<!--         @apply absolute; -->
<!--         top: -9px; -->
<!--         @apply w-0 h-0; -->
<!--         border-left: 10px solid transparent; -->
<!--         border-right: 10px solid transparent; -->

<!--         border-bottom: 10px solid white; -->
<!--       } -->
<!--       &::after { -->
<!--         content: ""; -->
<!--         z-index: 9; -->
<!--         @apply absolute; -->
<!--         top: -10px; -->
<!--         @apply w-0 h-0; -->
<!--         border-left: 10px solid transparent; -->
<!--         border-right: 10px solid transparent; -->

<!--         border-bottom: 10px solid #333333; -->
<!--       } -->
<!--     } -->

<!--     &--east { -->
<!--       min-width: 200%; -->
<!--       left: 106%; -->
<!--       top: 0; -->

<!--       &::before { -->
<!--         content: ""; -->
<!--         z-index: 10; -->
<!--         top: 7px; -->
<!--         left: -10px; -->
<!--         @apply absolute; -->
<!--         @apply w-0 h-0; -->
<!--         border-top: 10px solid transparent; -->
<!--         border-bottom: 10px solid transparent; -->

<!--         border-right: 10px solid white; -->
<!--       } -->
<!--       &::after { -->
<!--         content: ""; -->
<!--         z-index: 9; -->
<!--         top: 7px; -->
<!--         left: -11px; -->
<!--         @apply absolute; -->
<!--         @apply w-0 h-0; -->
<!--         border-top: 10px solid transparent; -->
<!--         border-bottom: 10px solid transparent; -->

<!--         border-right: 10px solid #333333; -->
<!--       } -->
<!--     } -->
<!--     &--west { -->
<!--       min-width: 200%; -->
<!--       right: auto; -->
<!--       top: 0; -->
<!--     } -->
<!--   } -->
<!-- } -->

<!-- .arrow-up { -->
<!--   width: 0; -->
<!--   height: 0; -->
<!--   border-left: 5px solid transparent; -->
<!--   border-right: 5px solid transparent; -->

<!--   border-bottom: 5px solid black; -->
<!-- } -->

<!-- .arrow-down { -->
<!--   width: 0; -->
<!--   height: 0; -->
<!--   border-left: 20px solid transparent; -->
<!--   border-right: 20px solid transparent; -->

<!--   border-top: 20px solid #f00; -->
<!-- } -->

<!-- .arrow-right { -->
<!--   width: 0; -->
<!--   height: 0; -->
<!--   border-top: 60px solid transparent; -->
<!--   border-bottom: 60px solid transparent; -->

<!--   border-left: 60px solid green; -->
<!-- } -->

<!-- .arrow-left { -->
<!--   width: 0; -->
<!--   height: 0; -->
<!--   border-top: 10px solid transparent; -->
<!--   border-bottom: 10px solid transparent; -->

<!--   border-right: 10px solid blue; -->
<!-- } -->
<!-- </style> -->

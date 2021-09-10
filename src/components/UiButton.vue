<template>
  <component
    :is="buttonType"
    class="block btn md:w-auto md:inline-block"
    :class="{
      [buttonClass]: buttonClass,
      [buttonSize]: buttonSize,
      [buttonFontSize]: buttonFontSize,
      'sm:w-full md:w-full lg:w-full fullwidth': fullWidth,
    }"
    :title="title"
    v-bind="buttonProps"
    @click.stop="callback($event)"
  >
    <slot />
  </component>
</template>

<script>
/**
 * Buttonelement: `a-button`
 * Add `to` for a `router-link`, add `href` for a link, use none of them for a button. Button can also emit a value with `@click`.
 */

export default {
  name: "UiButton",
  props: {
    variant: {
      type: [String, Boolean],
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: [String, Boolean],
      default: false, // sm, md, lg, md = default
    },
    href: {
      type: [String, Boolean],
      default: false,
    },
    to: {
      type: [String, Object, Boolean],
      default: false,
    },
    tag: {
      type: [String, Boolean],
      default: "button",
    },
    title: {
      type: [String, Boolean],
      default: false,
    },
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  computed: {
    buttonProps() {
      const props = {};
      if (this.to) {
        props.tag = this.tag;
        props.role = "button";
      }
      if (this.href) {
        props.is = "a";
        props.href = this.href;
      }
      if (this.disabled) props.disabled = "disabled";

      return props;
    },
    buttonType() {
      return this.to ? "nuxt-link" : "button";
    },
    buttonClass() {
      if (this.variant) {
        return `btn--${this.variant}`;
      } else {
        return ``;
      }
    },
    buttonSize() {
      if (this.size) {
        return `btn--${this.size}`;
      } else {
        return ``;
      }
    },
    buttonFontSize() {
      switch (this.fontSize) {
        case "sm":
          return "text-copy-small";
        case "md":
          return "text-copy-normal";
        case "lg":
          return "text-copy-large";
        default:
          return "";
      }
    },
  },
  methods: {
    callback(evt) {
      /**
       * Emitted when the button is clicked.
       * @event click
       * @type {Event}
       */

      // @Note the delay is neccessary to avoid a doubleclick
      if (this.isDisabled) return;
      this.isDisabled = true;

      setTimeout(() => {
        this.isDisabled = false;
        this.$emit("click", evt);
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  @apply relative text-white py-2 px-8;
  border-radius: 5px;

  &.fullwidth {
    @apply px-0;
  }

  svg {
    @apply inline-block mr-0;
    vertical-align: baseline;
  }

  + .btn {
    @media screen and (min-width: 768px) {
      @apply ml-2;
    }
  }
}

// variants
.btn--primary {
  @apply bg-primary-500;
}

.btn--secondary {
  @apply bg-secondary-500;
}

// sizes
.btn--sm {
  @apply py-1 px-2;
}

.btn[disabled] {
  @apply cursor-not-allowed;
  @apply bg-gray-500;
}
</style>

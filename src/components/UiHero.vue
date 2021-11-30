<template>
  <div class="ui-hero">
    <div class="ui-hero__inner">
      <component :is="headlineElement" class="ui-hero__headline">
        {{ headline }}
      </component>
      <component :is="subheadlineElement" class="ui-hero__subheadline">
        {{ subheadline }}
      </component>
      <p>{{ text }}</p>
      <div v-if="ctas.length" class="ui-hero__cta-bar">
        <ui-button
          v-for="(item, index) in ctas"
          :key="index"
          :variant="item.variant"
          :size="item.arianize"
          :href="item.href"
          :title="item.title"
          :text="item.text"
        >
          {{ item.text }}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "./UiButton.vue";
export default {
  components: { UiButton },
  name: "UiHero",
  props: {
    headline: {
      type: String,
      default: "Headline",
    },
    headlineElement: {
      type: String,
      default: "h2",
    },
    subheadline: {
      type: String,
      default: "Introduction",
    },
    subheadlineElement: {
      type: String,
      default: "h3",
    },
    text: {
      type: String,
      default: "Lorem Ipsum dolor sit amet.",
    },
    ctas: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="pcss">
.ui-hero {
  @apply font-sans;
  @apply border border-solid border-neutral-300;
  @apply px-8 pt-4 pb-8;

  &__headline {}
  &__subheadline {}
  &__body {}
  &__cta {}
}
</style>

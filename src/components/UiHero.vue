<template>
  <ui-container>
    <div class="grid grid-cols-3">
      <div class="col-span-2">
          <h2>{{ headline }}</h2>
          <h3>{{ introduction }}</h3>
          <p>{{ text }}</p>
        </div>
      <div></div>
    </div>
  </ui-container>
</template>

import Container from "./UiContainer";

<script>
import UiContainer from './UiContainer.vue';
export default {
  components: { UiContainer },
  name: "UiHero",
  props: {
    headline: {
      type: String,
      default: "Headline",
    },
    introduction: {
      type: String,
      default: "Introduction",
    },
    text: {
      type: String,
      default: "Lorem Ipsum dolor sit amet.",
    },
  },
};
</script>
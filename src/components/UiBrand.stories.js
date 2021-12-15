import UiBrand from "./UiBrand.vue";

export default {
  title: "Core/Brand",
  component: UiBrand,
};

export const Template = (args) => ({
  components: { UiBrand },
  setup() {
    return { args };
  },
  template: `<ui-brand :tag="h2" name="Demo"/>`,
});

export const Default = Template.bind({});
Default.args = {};

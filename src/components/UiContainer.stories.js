import UiContainer from "./UiContainer.vue";

export default {
  title: "Component/Container",
  component: UiContainer,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiContainer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <ui-container v-bind="args" >
    <div style="padding:10px; border:1px solid black; text-align:center;">Demo Content</div>
  </ui-container>
  <div style="text-align:center; border-top:1px solid black">Demo: Next Element</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  fullscreen: false,
  noSpacing: false,
};

export const Full = Template.bind({});
Full.args = {
  fullscreen: true,
  noSpacing: false,
};

export const Compact = Template.bind({});
Compact.args = {
  fullscreen: false,
  noSpacing: true,
};

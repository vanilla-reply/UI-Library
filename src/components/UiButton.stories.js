import UiButton from "./UiButton.vue";

export default {
  title: "Core/Button",
  component: UiButton,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ui-button v-bind="args">lol rofls</ui-button>',
});

export const Button = Template.bind({});
Button.args = {
  primary: true,
  label: "Button",
};

// import UiButton from "./UiButton.vue";
// import { UiButton } from '../../dist/my-lib.esm.js'
// import UiButton from '../../dist/UiButton.js'
import UiButton from './UiButton.vue'


export default {
  title: "Core/UiButton",
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
  template: '<ui-button v-bind="args">Button Text</ui-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "sm",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

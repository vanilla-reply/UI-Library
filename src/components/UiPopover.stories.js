// import UiButton from "./UiButton.vue";
// import { UiButton } from '../../dist/my-lib.esm.js'
// import UiButton from '../../dist/UiButton.js'
import UiPopover from './UiPopover.vue'


export default {
  title: "Component/Popover",
  component: UiPopover,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiPopover },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<button v-></button>`,
});

export const Default = Template.bind({});
Default.args = {};


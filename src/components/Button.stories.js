import MyButton from "./Button.vue";

export default {
  title: "Core/Button",
  component: MyButton,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Testbutton = Template.bind({});
Testbutton.args = {
  primary: true,
  label: "Button",
};

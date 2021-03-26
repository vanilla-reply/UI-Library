import UiNavbar from "./UiNavbar.vue";

export default {
  title: "Core/Navbar",
  component: UiNavbar,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiNavbar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <ui-navbar v-bind="args">Logo</ui-navbar>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  fullscreen: false,
  noSpacing: false,
};

export const Secondary = Template.bind({});
Primary.args = {
  variant: "secondary",
  fullscreen: false,
  noSpacing: false,
};

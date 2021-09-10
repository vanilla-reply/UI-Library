import UiNavbar from "./UiNavbar.vue";
import UiBrand from "./UiBrand.vue";

export default {
  title: "Core/Navbar",
  component: UiNavbar,
};

export const Template = (args) => ({
  components: { UiNavbar, UiBrand },
  setup() {
    return { args };
  },
  template: `<ui-navbar v-bind="args">
    <ui-brand :tag="h2" name="Demo"/>
  </ui-navbar>`,
});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  size: "md",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  size: "lg",
};

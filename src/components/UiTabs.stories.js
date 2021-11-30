// import UiButton from "./UiButton.vue";
// import { UiButton } from '../../dist/my-lib.esm.js'
// import UiButton from '../../dist/UiButton.js'
import UiTabs from './UiTabs.vue'
import UiTab from './UiTab.vue'


export default {
  title: "Component/Tabs",
  component: UiTabs,
  subcomponents: { UiTab }
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { UiTabs, UiTab },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<ui-tabs v-bind="args">
    <ui-tab title="Tab 1" tab-key="tab-1">Tab Content 1</ui-tab>
    <ui-tab title="Tab 2" tab-key="tab-2">Tab Content 2</ui-tab>
    <ui-tab title="Tab 3" tab-key="tab-3">Tab Content 3</ui-tab>
  </ui-tabs>`,
});

export const Default = Template.bind({});
Default.args = {};


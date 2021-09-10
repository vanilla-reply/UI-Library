import UiDropdown from "./UiDropdown.vue";
import UiDropdownItem from "./UiDropdownItem.vue";

export default {
  title: "Core/Dropdown",
  component: UiDropdown,
};

export const Template = (args) => ({
  components: { UiDropdown, UiDropdownItem },
  setup() {
    return { args };
  },
  template: `<ui-dropdown v-bind="args">
    <ui-dropdown-item href="#">Item Href</ui-dropdown-item>
    <ui-dropdown-item to="#">Item To</ui-dropdown-item>
    <ui-dropdown-item>Item</ui-dropdown-item>
    <ui-dropdown-item>Item Langer Titel Lorem Isp</ui-dropdown-item>
  </ui-dropdown>`,
});

export const OrientationEast = Template.bind({});
OrientationEast.args = {
  orientation: "east",
};

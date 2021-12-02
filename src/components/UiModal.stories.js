import UiModal from "./UiModal.vue";

export default {
  title: "Core/Modal",
  component: UiModal,
}

const Template = (args) => ({
    components: { UiModal },
    setup() {
      return { args };
    },
    template: '<ui-modal></ui-modal>',
  });

  export const Modal = Template.bind({});
  Modal.args = {
  }

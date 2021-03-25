import { shallowMount } from "@vue/test-utils";
import UiButton from "@/components/UiButton.vue";

describe("UiButton.vue", () => {
  it("renders props.label when passed", () => {
    const label = "Button label";
    const wrapper = shallowMount(UiButton, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

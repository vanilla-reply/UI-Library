import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("renders props.label when passed", () => {
    const label = "Button label";
    const wrapper = shallowMount(Button, {
      props: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});

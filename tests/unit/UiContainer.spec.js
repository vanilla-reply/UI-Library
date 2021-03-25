import { shallowMount } from "@vue/test-utils";
import UiContainer from "@/components/UiContainer.vue";

describe("UiContainer.vue", () => {
  it("renders not fullscreen when prop fullscreen is false", () => {
    const wrapper = shallowMount(UiContainer);
    expect(wrapper.classes()).toContain("max-w-7xl");
  });

  it("renders fullscreen when prop fullscreen is true", () => {
    const fullscreen = true;
    const wrapper = shallowMount(UiContainer, {
      props: { fullscreen },
    });
    expect(wrapper.classes("max-w-7xl")).toBe(false);
  });

  it("renders with spacing when prop noSpacing is not given", () => {
    const wrapper = shallowMount(UiContainer);
    expect(wrapper.classes()).toContain("mt-8");
    expect(wrapper.classes()).toContain("mb-16");
  });
  it("renders with spacing when prop noSpacing is true", () => {
    const noSpacing = true;
    const wrapper = shallowMount(UiContainer, {
      props: { noSpacing },
    });
    expect(wrapper.classes("mt-8 mb-16")).toBe(false);
  });
});

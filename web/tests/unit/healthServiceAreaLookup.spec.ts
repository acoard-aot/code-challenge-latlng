import { shallowMount } from "@vue/test-utils";
import HealthServiceAreaLookup from "@/components/HealthServiceAreaLookup.vue";

describe("HealthServiceAreaLookup.vue", () => {
  it("component is truthy", () => {
    const wrapper = shallowMount(HealthServiceAreaLookup);
    expect(wrapper).toBeTruthy();
  });
});

import { shallowMount } from "@vue/test-utils";
import HealthServiceAreaLookup from "@/components/HealthServiceAreaLookup.vue";

describe("HealthServiceAreaLookup.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(HealthServiceAreaLookup);
    expect(wrapper).toBeTruthy();
  });
});

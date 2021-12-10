import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import HealthServiceAreaLookup from "@/components/HealthServiceAreaLookup.vue";
import Vue from "vue";
import Vuetify from "vuetify";


const localVue = createLocalVue()

const factory = () => mount(HealthServiceAreaLookup, {
  localVue,
  vuetify: new Vuetify(),
});

describe("HealthServiceAreaLookup.vue", () => {
  it("latitude is required", async () => {
    const wrapper = factory();
    let inputWrapper = wrapper.find('[data-testid=latitude]');
    inputWrapper.setValue('');
    // waits for vue to validate the new value
    await Vue.nextTick();
    await Vue.nextTick();
    let buttonWrapper = wrapper.find('button');
    expect(buttonWrapper.attributes("disabled")).toBe("disabled");
  });

  it("longitude is required", async () => {
    const wrapper = factory();
    let inputWrapper = wrapper.find('[data-testid=longitude]');
    inputWrapper.setValue('');
    // waits for vue to validate the new value
    await Vue.nextTick();
    await Vue.nextTick();
    let buttonWrapper = wrapper.find('button');
    expect(buttonWrapper.attributes("disabled")).toBe("disabled");
  });

  it("error message is displayed", async () => {
    const wrapper = factory();
    wrapper.vm.$data.errorMessage = 'error';
    await Vue.nextTick();
    await Vue.nextTick();
    let errorWrapper = wrapper.find('[data-testid="errorMessage"]')
    let resultWrapper = wrapper.find('[data-testid="successMessage"]')

    expect(errorWrapper.isVisible()).toBe(true);
    expect(resultWrapper.isVisible()).toBe(false);
  });

  it("result message is displayed", async () => {
    const wrapper = factory();
    wrapper.vm.$data.areaName = 'area';
    await Vue.nextTick();
    await Vue.nextTick();
    let errorWrapper = wrapper.find('[data-testid="errorMessage"]')
    let resultWrapper = wrapper.find('[data-testid="successMessage"]')

    expect(resultWrapper.isVisible()).toBe(true);
    expect(errorWrapper.isVisible()).toBe(false);
  });
});

import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import CounterStore from './CounterStore.vue';
import { useCounterStore } from '~/store/counter';

type TestContext = {
  wrapper: ReturnType<typeof mount>;
  counterStore: ReturnType<typeof useCounterStore>;
};

const init = (): TestContext => {
  const wrapper = mount(CounterStore, {
    global: {
      plugins: [createTestingPinia()],
    },
  });
  const counterStore = useCounterStore();

  return { wrapper, counterStore };
};

describe('CounterStore', () => {
  beforeEach<TestContext>((context) => {
    const result = init();
    context.wrapper = result.wrapper;
    context.counterStore = result.counterStore;
  });

  test<TestContext>('mount', ({ wrapper }) => {
    expect(wrapper.find('h1').text()).toMatch('Counter');
    expect(wrapper.find('p').text()).toMatch('0');
  });

  test<TestContext>('click "+" button', async ({ wrapper, counterStore }) => {
    await wrapper
      .find('button[data-element="increament-button"]')
      .trigger('click');
    expect(counterStore.increament).toHaveBeenCalledTimes(1);
  });

  test<TestContext>('click "-" button', async ({ wrapper, counterStore }) => {
    await wrapper
      .find('button[data-element="decreament-button"]')
      .trigger('click');
    expect(counterStore.decreament).toHaveBeenCalledTimes(1);
  });
});

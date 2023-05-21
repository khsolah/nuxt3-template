import { mount } from '@vue/test-utils';
import Counter from './Counter.vue';

describe('Counter', () => {
  test('mount', () => {
    const wrapper = mount(Counter);

    expect(wrapper.text()).toMatch('Counter');
  });

  test('click "++" button', async () => {
    const wrapper = mount(Counter);
    await wrapper.find('button').trigger('click');

    expect(wrapper.find('p').text()).toBe('1');
  });
});

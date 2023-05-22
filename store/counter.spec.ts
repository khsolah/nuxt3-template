import { createPinia, setActivePinia } from 'pinia';
import { useCounterStore } from './counter';

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('increaments', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.increament();
    expect(counterStore.count).toBe(1);
  });

  test('decreaments', () => {
    const counterStore = useCounterStore();
    expect(counterStore.count).toBe(0);
    counterStore.decreament();
    expect(counterStore.count).toBe(-1);
  });
});

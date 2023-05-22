<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from '~/store/counter';

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const { increament, decreament } = counterStore;
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button data-element="increament-button" @click="increament">+</button>
    <button data-element="decreament-button" @click="decreament">-</button>
  </div>
</template>

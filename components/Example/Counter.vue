<script setup lang="ts">
const count = ref(0);
const increament = () => ++count.value;
</script>

<template>
  <div>
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increament">++</button>
  </div>
</template>

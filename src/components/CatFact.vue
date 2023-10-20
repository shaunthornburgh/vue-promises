<template>
  <div>
    <div class="mb-4">
      <p v-if="loading">Loading...</p>
      <p v-if="error">{{ error }}</p>
      <p v-if="fact">{{ fact }}</p>
    </div>
    <button
      @click="fetchFact"
      class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >Get Another Fact</button>
  </div>
</template>

<script setup>
import useCatFact from '@/composables/useCatFact';
const { loading, error, fact, fetchFact } = useCatFact();

// Fetch the initial fact
fetchFact();
</script>
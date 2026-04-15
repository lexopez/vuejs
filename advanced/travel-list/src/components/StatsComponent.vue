<script setup>
import { toRefs, computed } from "vue";

const props = defineProps({
  items: Array,
});

const { items } = toRefs(props);
const numItems = computed(() => items.value.length);
const numPacked = computed(() => items.value.filter((item) => item.packed).length);
const percentage = computed(() =>
  numItems.value === 0 ? 0 : Math.round((numPacked.value / numItems.value) * 100),
);
</script>

<template>
  <div class="stats">
    <em v-if="percentage === 100">"You got everything! Ready to go ✈️"</em>
    <em v-else
      >💼 You have {{ numItems }} items on your list, and you already packed {{ numPacked }} ({{
        percentage
      }}%)</em
    >
  </div>
</template>

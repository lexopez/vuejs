<script setup>
import { useQuiz } from "@/composables/useQuiz";
import { computed, onMounted, onUnmounted } from "vue";

const { state, tick } = useQuiz();
// Computed properties automatically update when secondsRemaining changes
const mins = computed(() => Math.floor(state.secondsRemaining / 60));
const seconds = computed(() => state.secondsRemaining % 60);

// Helper to format numbers with a leading zero
const formatTime = (time) => String(time).padStart(2, "0");

let id;

onMounted(() => {
  id = setInterval(() => {
    tick();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(id);
  console.log("timer stopped");
});
</script>
<template>
  <div class="timer">{{ formatTime(mins) }}:{{ formatTime(seconds) }}</div>
</template>

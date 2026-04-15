<script setup>
import { useQuiz } from "@/composables/useQuiz";
import { computed } from "vue";

const { state, maxPossiblePoints, restart } = useQuiz();
const percentage = computed(() => (state.points / maxPossiblePoints.value) * 100);

let emoji;
if (percentage.value === 100) emoji = "🥇";
if (percentage.value >= 80 && percentage.value < 100) emoji = "🎉";
if (percentage.value >= 50 && percentage.value < 80) emoji = "🙃";
if (percentage.value >= 0 && percentage.value < 50) emoji = "🤨";
if (percentage.value === 0) emoji = "🤦‍♂️";
</script>

<template>
  <p class="result">
    <span>{{ emoji }}</span> You scored <strong>{{ state.points }}</strong> out of
    {{ maxPossiblePoints }} ({{ Math.ceil(percentage) }}%)
  </p>
  <p class="highscore">(Highscore: {{ state.highscore }} points)</p>
  <button class="btn btn-ui" @click="restart">Restart quiz</button>
</template>

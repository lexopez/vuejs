<script setup>
import { useQuiz } from "@/composables/useQuiz";

const { state, numQuestions, maxPossiblePoints } = useQuiz();
</script>

<template>
  <header class="progress">
    <progress :max="numQuestions" :value="state.index + Number(state.answer !== null)" />

    <p>
      Question <strong>{{ state.index + 1 }}</strong> / {{ numQuestions }}
    </p>

    <p>
      <strong>{{ state.points }}</strong> / {{ maxPossiblePoints }}
    </p>
  </header>
</template>

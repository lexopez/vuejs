<script setup>
import { useQuiz } from "@/composables/useQuiz";

const { numQuestions, start } = useQuiz();
</script>

<template>
  <div class="start">
    <h2>Welcome to The Vue Quiz!</h2>
    <h3>{{ numQuestions }} questions to test your Vue mastery</h3>
    <button class="btn btn-ui" @click="start">Let's start</button>
  </div>
</template>

<script setup>
import { useQuiz } from "@/composables/useQuiz";
import { computed } from "vue";

const { state, newAnswer } = useQuiz();
const question = computed(() => state.questions.at(state.index));
const hasAnswered = computed(() => state.answer !== null);
</script>

<template>
  <h4>{{ question.question }}</h4>
  <div class="options">
    <template v-for="(el, index) in question.options" :key="index">
      <button
        :class="`btn btn-option ${index === state.answer ? 'answer' : ''} ${hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''}`"
        :disabled="hasAnswered"
        @click="() => newAnswer(index)"
      >
        {{ el }}
      </button>
    </template>
  </div>
</template>

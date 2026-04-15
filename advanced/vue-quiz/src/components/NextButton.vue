<script setup>
import { useQuiz } from "@/composables/useQuiz";
import { computed } from "vue";
import SharedButton from "./SharedButton.vue";

const { state, numQuestions, nextQuestion, finish } = useQuiz();
const isNotFinished = computed(() => state.index < numQuestions.value - 1);

const handleClick = () => {
  if (isNotFinished.value) {
    // console.log(state.index);
    // console.log(numQuestions.value - 1);
    nextQuestion();
  } else {
    // console.log("finish");
    finish();
  }
};
</script>

<template>
  <SharedButton @buttonClicked="handleClick">
    {{ state.index < numQuestions - 1 ? "Next" : "Finish" }}
  </SharedButton>
</template>

watch( () => state.answer, (val) => console.log(val), );

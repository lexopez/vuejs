<script setup>
import ErrorIndicator from "./components/ErrorIndicator.vue";
import FinishScreen from "./components/FinishScreen.vue";
import FooterQuiz from "./components/FooterQuiz.vue";
import HeaderQuiz from "./components/HeaderQuiz.vue";
import LoadingIndicator from "./components/LoadingIndicator.vue";
import MainContent from "./components/MainContent.vue";
import NextButton from "./components/NextButton.vue";
import ProgressBar from "./components/ProgressBar.vue";
import StartScreen from "./components/StartScreen.vue";
import TimerQuiz from "./components/TimerQuiz.vue";
import VueQuestions from "./components/VueQuestions.vue";
import { useProvideQuiz } from "./composables/useQuiz";

const { state } = useProvideQuiz();
</script>

<template>
  <div class="app">
    <HeaderQuiz />

    <MainContent>
      <LoadingIndicator v-if="state.status === 'loading'" />
      <ErrorIndicator v-if="state.status === 'error'" />
      <StartScreen v-if="state.status === 'ready'" />
      <template v-if="state.status === 'active'">
        <ProgressBar />
        <VueQuestions />
        <FooterQuiz>
          <TimerQuiz />
          <NextButton v-if="state.answer !== null" />
        </FooterQuiz>
      </template>
      <FinishScreen v-if="state.status === 'finished'" />
    </MainContent>
  </div>
</template>

<style scoped></style>

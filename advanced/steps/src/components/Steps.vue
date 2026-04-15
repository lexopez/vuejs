<script setup>
import { ref } from "vue";
import StepMessage from "./StepMessage.vue";
import Button from "./Button.vue";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const step = ref(1);
const isOpen = ref(true);

const handlePrevious = () => {
  if (step.value > 1) step.value = step.value - 1;
};

const handleNext = () => {
  if (step.value < 3) step.value = step.value + 1;
};

const handleToggle = () => {
  isOpen.value = !isOpen.value;
};

const handleAlert = (message) => {
  alert(message);
};
</script>

<template>
  <div>
    <button class="close" @click="handleToggle">&times;</button>

    <div v-if="isOpen" class="steps">
      <div class="numbers">
        <div :class="`${step >= 1 ? 'active' : ''}`">1</div>
        <div :class="`${step >= 2 ? 'active' : ''}`">2</div>
        <div :class="`${step >= 3 ? 'active' : ''}`">3</div>
      </div>

      <StepMessage :step="step">
        {{ messages[step - 1] }}
        <div class="buttons">
          <!-- <Button
            bg-color="#e7e7e7"
            text-color="#333"
            event-name="faq"
            @faq="handleAlert(`Learn how to ${messages[step - 1]}`)"
          >
            Learn how
          </Button> -->
          <Button
            bg-color="#e7e7e7"
            text-color="#333"
            @trigger="handleAlert(`Learn how to ${messages[step - 1]}`)"
          >
            Learn how
          </Button>
        </div>
      </StepMessage>

      <div class="buttons">
        <Button bg-color="#7950f2" text-color="#fff" @trigger="handlePrevious">
          <span>👈</span> Previous
        </Button>
        <Button bg-color="#7950f2" text-color="#fff" @trigger="handleNext">
          <span>👉</span> Next
        </Button>
      </div>
    </div>
  </div>
</template>

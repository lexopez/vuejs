<script setup>
defineProps({
  bgColor: String,
  textColor: String,
});

const emit = defineEmits(["trigger"]);

// const handleEmit = () => {
//   emit("trigger");
// };
</script>

<template>
  <button
    @click="$emit('trigger')"
    :style="{ backgroundColor: bgColor, color: textColor }"
  >
    <slot></slot>
  </button>
</template>

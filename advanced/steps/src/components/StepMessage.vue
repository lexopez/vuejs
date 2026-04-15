<script setup>
defineProps({
  step: Number,
});
</script>

<template>
  <div class="message">
    <h3>Step {{ step }}</h3>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(true);
</script>

<template>
  <div class="box">
    <button class="btn-toggle" @click="isOpen = !isOpen">{{ isOpen ? "-" : "+" }}</button>
    <slot v-if="isOpen"></slot>
  </div>
</template>

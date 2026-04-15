<script setup>
defineProps({ message: String });
</script>

<template>
  <p class="error"><span>⛔</span> {{ message }}</p>
</template>

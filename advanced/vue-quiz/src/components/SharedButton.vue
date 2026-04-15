<script setup>
defineEmits(["buttonClicked"]);
</script>

<template>
  <button class="btn btn-ui" @click="$emit('buttonClicked')">
    <slot></slot>
  </button>
</template>

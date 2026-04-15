<script setup>
import { useKey } from "@/composables/useKey";
import { ref } from "vue";

const query = defineModel();
defineProps({ movies: Array });

const searchBox = ref("");
useKey("Enter", () => searchBox.value.focus());
</script>

<template>
  <nav class="nav-bar">
    <div class="logo">
      <span class="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>

    <input
      type="text"
      ref="searchBox"
      @keyup.enter="handleFocus"
      v-model="query"
      placeholder="Search movies..."
      class="search"
    />

    <p class="num-results">
      Found <strong>{{ movies.length }}</strong> results
    </p>
  </nav>
</template>

<style scoped></style>

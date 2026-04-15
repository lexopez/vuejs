<script setup>
import { average } from "@/utils/watchedMovieAverage";
import { computed } from "vue";

const props = defineProps({ watched: Array });

const avgImdbRating = computed(() => average(props.watched.map((movie) => movie.imdbRating)));
const avgUserRating = computed(() => average(props.watched.map((movie) => movie.userRating)));
const avgRuntime = computed(() => average(props.watched.map((movie) => movie.runtime)));
</script>

<template>
  <div class="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{{ watched.length }} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{{ avgImdbRating.toFixed(2) }}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{{ avgUserRating.toFixed(2) }}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{{ avgRuntime }} min</span>
      </p>
    </div>
  </div>
</template>

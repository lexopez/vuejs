<script setup>
import { inject } from "vue";

defineProps({ movies: Array });

const { updateSelectedId } = inject("selectingId");
</script>

<template>
  <div>
    <ul class="list list-movies">
      <li
        v-for="(movie, index) in movies"
        @click="() => updateSelectedId(movie.imdbID)"
        :key="index"
      >
        <img :src="movie.Poster" :alt="movie.Title" />
        <h3>{{ movie.Title }}</h3>
        <div>
          <p>
            <span>🗓</span>
            <span>{{ movie.Year }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

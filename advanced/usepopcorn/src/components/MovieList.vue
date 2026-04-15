<script setup>
import { useMovies } from "@/composables/useMovies";
import DataLoader from "./DataLoader.vue";
import ErrorMessage from "./ErrorMessage.vue";
import { onMounted, watchEffect } from "vue";
import MovieItem from "./MovieItem.vue";

const film = defineModel("movies");
const props = defineProps({ query: String });

const { loading, error, movies } = useMovies(() => props.query);

watchEffect(() => {
  film.value = movies.value;
});
</script>

<template>
  <DataLoader v-if="loading" />
  <ErrorMessage v-else-if="error" :message="error" />
  <MovieItem v-else :movies="movies" />
</template>

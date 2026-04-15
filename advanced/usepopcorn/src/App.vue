<script setup>
import { ref, watch } from "vue";
import NavBar from "./components/NavBar.vue";
import MainBox from "./components/MainBox.vue";
import BoxBucket from "./components/BoxBucket.vue";
import MovieList from "./components/MovieList.vue";
import { useSelectingId } from "./composables/useSelectingId";
import MovieDetails from "./components/MovieDetails.vue";
import WatchedSummary from "./components/WatchedSummary.vue";
import WatchedMoviesList from "./components/WatchedMoviesList.vue";
import { useLocalStorageState } from "./composables/useLocalStorageState";

const query = ref("");
const movies = ref([]);
const selectedId = useSelectingId();
const watched = useLocalStorageState([], "watched");

// watch(watched, (v) => console.log(v), { immediate: true });
</script>

<template>
  <NavBar :movies="movies" v-model="query" />
  <MainBox>
    <BoxBucket>
      <MovieList v-model:movies="movies" :query="query" />
    </BoxBucket>

    <BoxBucket>
      <MovieDetails v-if="selectedId" v-model:watched="watched" v-model:selectedId="selectedId" />
      <WatchedSummary v-if="!selectedId" :watched="watched" />
      <WatchedMoviesList v-if="!selectedId" v-model="watched" />
    </BoxBucket>
  </MainBox>
</template>

<style scoped></style>

<script setup>
import { computed, onBeforeMount, onUnmounted, reactive, ref, toRefs, watch } from "vue";
import DataLoader from "./DataLoader.vue";
import StarRating from "./StarRating.vue";
import { useKey } from "@/composables/useKey";

// Assuming KEY is defined somewhere, e.g., an environment variable
const KEY = "f84fc31d";

const selectedId = defineModel("selectedId");
const watchedMovie = defineModel("watched");

const movie = reactive({
  Title: "",
  Year: "",
  Poster: "",
  Runtime: "",
  imdbRating: "",
  Plot: "",
  Released: "",
  Actors: "",
  Director: "",
  Genre: "",
}); // Changed to object since OMDB returns a single movie object
const loading = ref(false);
const error = ref("");
const rating = ref(0);
const countRef = ref(0);

watch(rating, () => {
  if (rating.value) {
    countRef.value++;
  }
});
onBeforeMount(() => (countRef.value = 0)); //reset countRef if

const isWatched = computed(() =>
  watchedMovie.value.map((movie) => movie.imdbID).includes(selectedId.value),
);
const watchedUserRating = computed(
  () => watchedMovie.value.find((movie) => movie.imdbID === selectedId.value)?.userRating,
);

watch(watchedMovie, (movies) => console.log(movies));

const {
  Title: title,
  Year: year,
  Poster: poster,
  Runtime: runtime,
  imdbRating,
  Plot: plot,
  Released: released,
  Actors: actors,
  Director: director,
  Genre: genre,
} = toRefs(movie);

const handleAdd = () => {
  const newWatchedMovie = {
    imdbID: selectedId.value,
    title: title.value,
    year: year.value,
    poster: poster.value,
    imdbRating: Number(imdbRating.value),
    runtime: Number(runtime.value.split(" ").at(0)),
    userRating: rating.value,
    countRatingDecisions: countRef.value,
  };
  watchedMovie.value.push(newWatchedMovie);
  selectedId.value = null;
};

// 1. Added 'async' to the callback
watch(
  selectedId,
  async (id) => {
    if (!id) return; // Prevent fetching if ID is null/empty

    try {
      loading.value = true; // 2. Use .value to update refs
      error.value = "";

      const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${id}`);

      if (!res.ok) throw new Error("Failed to fetch movie");

      const data = await res.json(); // 3. Await the .json() promise
      // movie.value = data;
      Object.assign(movie, data);
    } catch (err) {
      error.value = err.message;
      console.error(err.message);
    } finally {
      loading.value = false;
    }
  },
  { immediate: true },
); // Optional: run immediately if selectedId has an initial value

watch(title, (title) => {
  if (!title) return;
  document.title = `Movie | ${title}`;
});

onUnmounted(() => (document.title = "usePopcorn"));
useKey("Escape", () => (selectedId.value = null));
</script>

<template>
  <div class="details">
    <DataLoader v-if="loading" />
    <template v-else>
      <header>
        <button class="btn-back" @click="selectedId = null">&larr;</button>
        <img :src="poster" :alt="`Poster of ${movie} movie`" />
        <div class="details-overview">
          <h2>{{ title }}</h2>
          <p>{{ released }} &bull; {{ runtime }}</p>
          <p>{{ genre }}</p>
          <p>
            <span>⭐</span>
            {{ imdbRating }} IMDB Rating
          </p>
        </div>
      </header>

      <section>
        <div class="rating">
          <template v-if="!isWatched">
            <StarRating :max-rating="10" :size="24" v-model="rating" />
            <button v-if="rating" @click="handleAdd" class="btn-add">+ Add to list</button>
          </template>
          <template v-else>
            <p>You rated with move {{ watchedUserRating }} <span>⭐</span></p>
          </template>
        </div>
        <p>
          <em>{{ plot }}</em>
        </p>
        <p>Starring {{ actors }}</p>
        <p>Directed by {{ director }}</p>
      </section>
    </template>
  </div>
</template>

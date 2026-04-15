<script setup>
const movies = defineModel();

const handleDeleteMovie = (id) => {
  movies.value = movies.value.filter((movie) => movie.imdbID !== id);
  console.log(movies.value);
};
</script>

<template>
  <ul class="list">
    <li v-for="(movie, index) in movies" :key="index">
      <img :src="movie.poster" :alt="`${movie.title} poster`" />
      <h3>{{ movie.title }}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{{ movie.imdbRating }}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{{ movie.userRating }}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{{ movie.runtime }} min</span>
        </p>

        <button @click="handleDeleteMovie(movie.imdbID)" class="btn-delete">X</button>
      </div>
    </li>
  </ul>
</template>

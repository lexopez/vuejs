<script setup>
import store from "@/store";
</script>
<template>
  <section>
    <ul>
      <li v-for="(post, index) in store.getters.filteredPosts" :key="index">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </section>
</template>

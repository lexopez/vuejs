<script setup>
import store from "@/store";
import { computed } from "vue";

const query = computed({
  get: () => store.state.searchQuery,
  set: (value) => store.commit("SET_SEARCH_QUERY", value),
});
const posts = computed(() => store.getters.postCount);
</script>
<template>
  <header>
    <h1><span>⚛️</span>The Atomic Blog</h1>
    <div>
      <p>🚀 {{ posts }} atomic posts found</p>
      <input type="text" v-model="query" />
      <button @click="store.commit('CLEAR_POSTS')">Clear posts</button>
    </div>
  </header>
</template>

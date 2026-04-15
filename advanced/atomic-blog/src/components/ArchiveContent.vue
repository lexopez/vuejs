<script setup>
import store from "@/store";
import { createRandomPost } from "@/utils/createPost";
import { ref } from "vue";
const posts = Array.from({ length: 50 }, () => createRandomPost());
const archivePosts = ref(posts);
const showArchive = ref(false);
</script>
<template>
  <aside>
    <h2>Post archive</h2>
    <button @click="showArchive = !showArchive">
      {{ showArchive ? "Hide archive posts" : "Show archive posts" }}
    </button>
    <ul v-if="showArchive">
      <li v-for="(post, index) in archivePosts" :key="index">
        <p>
          <strong>{{ post.title }}</strong> {{ post.body }}
        </p>
        <button @click="store.commit('ADD_POST', post)">Add as new post</button>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import store from "@/store";
import { ref } from "vue";

const title = ref("");
const body = ref("");

const handleSubmit = () => {
  const newPost = {
    title: title.value,
    body: body.value,
  };
  store.commit("ADD_POST", newPost);
  title.value = "";
  body.value = "";
};
</script>
<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="title" />
    <textarea v-model="body" />
    <button>Add post</button>
  </form>
</template>

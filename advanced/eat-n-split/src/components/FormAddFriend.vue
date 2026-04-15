<script setup>
import { ref } from "vue";

const friends = defineModel();

const name = ref("");
const image = ref("https://i.pravatar.cc/48");
const showAddFriend = ref(false);

const handleSubmit = () => {
  if (!name.value || !image.value) return;

  const id = crypto.randomUUID();
  const newFriend = {
    id,
    name: name.value,
    image: `${image.value}?=${id}`,
    balance: 0,
  };
  friends.value.push(newFriend);
  name.value = "";
  image.value = "https://i.pravatar.cc/48";
};
</script>

<template>
  <form v-if="showAddFriend" @submit.prevent="handleSubmit" class="form-add-friend">
    <label>Friend name</label>
    <input type="text" v-model="name" />

    <label>Image URL</label>
    <input type="text" v-model="image" />

    <button class="button">Add</button>
  </form>
  <button class="button" @click="showAddFriend = !showAddFriend">
    {{ showAddFriend ? "Close" : "Add Friend" }}
  </button>
</template>

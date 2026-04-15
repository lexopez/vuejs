<script setup>
import { defineAsyncComponent, ref } from "vue";
import FriendsList from "./components/FriendsList.vue";
import FormAddFriend from "./components/FormAddFriend.vue";
import FormSplitBill from "./components/FormSplitBill.vue";
// const FormAddFriend = defineAsyncComponent(() => import("./components/FormAddFriend.vue"));

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const friends = ref(initialFriends);
const selectedFriend = ref(null);
</script>

<template>
  <div class="app">
    <div class="sidebar">
      <FriendsList :friends="friends" v-model="selectedFriend" />
      <FormAddFriend v-model="friends" />
    </div>
    <FormSplitBill v-model:selectedFriend="selectedFriend" v-model:friends="friends" />
  </div>
</template>

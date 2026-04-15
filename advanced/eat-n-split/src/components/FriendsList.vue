<script setup>
defineProps({
  friends: Array,
});

const selectedFriend = defineModel();

const handleSelect = (friend) => {
  selectedFriend.value = selectedFriend?.value?.id === friend.id ? null : friend;
};
</script>

<template>
  <ul>
    <li
      v-for="friend in friends"
      :class="{ selected: friend.id === selectedFriend?.id }"
      :key="friend.id"
    >
      <img :src="friend.image" :alt="friend.name" />
      <h3>{{ friend.name }}</h3>

      <p v-if="friend.balance < 0" class="red">
        You owe {{ friend.name }} {{ Math.abs(friend.balance) }}€
      </p>

      <p v-if="friend.balance > 0" class="green">
        {{ friend.name }} owes you {{ Math.abs(friend.balance) }}€
      </p>

      <p v-if="friend.balance === 0">You and {{ friend.name }} are even</p>

      <button class="button" @click="handleSelect(friend)">
        {{ friend.id === selectedFriend?.id ? "Close" : "Select" }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const model = defineModel();

const description = ref("");
const quantity = ref(1);

const numArr = Array.from({ length: 20 }, (_, i) => i + 1);

function handleSubmit() {
  if (!description.value) return;

  const newItem = {
    description: description.value,
    quantity: quantity.value,
    packed: false,
    id: Date.now(),
  };

  model.value.push(newItem);
  description.value = "";
  quantity.value = 1;
}
</script>

<template>
  <form class="add-form" @submit.prevent="handleSubmit">
    <h3>What do you need for your trip?</h3>
    <select v-model="quantity">
      <option v-for="num in numArr" :key="num">
        {{ num }}
      </option>
    </select>
    <input type="text" placeholder="Item..." v-model="description" />
    <button>Add</button>
  </form>
</template>

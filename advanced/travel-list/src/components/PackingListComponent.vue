<script setup>
import { ref, computed } from "vue";

const model = defineModel();

const sortBy = ref("input");

function handleDeleteItem(id) {
  model.value = model.value.filter((item) => item.id !== id);
}

function handleToggleItem(id) {
  model.value = model.value.map((item) =>
    item.id === id ? { ...item, packed: !item.packed } : item,
  );
}

function handleClearList() {
  const confirm = window.confirm("Are you sure you want to delete all items?");
  if (confirm) model.value = [];
}

const sortedItems = computed(() => {
  console.log("ran cuz items changes or sorted");
  let sorted = [...model.value];

  if (sortBy.value === "description") {
    sorted.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy.value === "packed") {
    sorted.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return sorted;
});
</script>

<template>
  <div class="list">
    <ul>
      <li v-for="item in sortedItems" :key="item.id">
        <input type="checkbox" @change="handleToggleItem(item.id)" />
        <span
          :style="{
            textDecoration: item.packed ? 'line-through' : '',
          }"
        >
          {{ item.quantity }} {{ item.description }}
        </span>
        <button @click="handleDeleteItem(item.id)">❌</button>
      </li>
    </ul>

    <div class="actions">
      <select v-model="sortBy">
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button @click="handleClearList">Clear List</button>
    </div>
  </div>
</template>

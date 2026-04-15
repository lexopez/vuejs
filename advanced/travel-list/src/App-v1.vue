<script setup>
import { ref } from "vue";
import LogoComponent from "./components/LogoComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import PackingListComponent from "./components/PackingListComponent.vue";
import StatsComponent from "./components/StatsComponent.vue";

const items = ref([]);

function handleAddItems(item) {
  items.value.push(item);
}

function handleDeleteItem(id) {
  items.value = items.value.filter((item) => item.id !== id);
}

function handleToggleItem(id) {
  items.value = items.value.map((item) =>
    item.id === id ? { ...item, packed: !item.packed } : item,
  );
}

function handleClearList() {
  const confirm = window.confirm("Are you sure you want to delete all items?");
  if (confirm) items.value = [];
}
</script>

<template>
  <div class="app">
    <LogoComponent />
    <FormComponent @add-items="handleAddItems" />
    <PackingListComponent
      :items="items"
      @delete-item="handleDeleteItem"
      @toggle-item="handleToggleItem"
      @clear-items="handleClearList"
    />
    <StatsComponent :items="items" />
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from "vue";

const props = defineProps({
  items: Array,
});

defineEmits(["deleteItem", "toggleItem", "clearItems"]);

const sortBy = ref("input");
const { items } = toRefs(props);

const sortedItems = computed(() => {
  console.log("ran cuz items changes or sorted");
  let sorted = [...items.value];

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
        <input type="checkbox" @change="$emit('toggleItem', item.id)" />
        <span
          :style="{
            textDecoration: item.packed ? 'line-through' : '',
          }"
        >
          {{ item.quantity }} {{ item.description }}
        </span>
        <button @click="$emit('deleteItem', item.id)">❌</button>
      </li>
    </ul>

    <div class="actions">
      <select v-model="sortBy">
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button @click="$emit('clearItems')">Clear List</button>
    </div>
  </div>
</template>

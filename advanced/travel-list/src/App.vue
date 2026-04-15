<script setup>
import { ref } from "vue";
import LogoComponent from "./components/LogoComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import PackingListComponent from "./components/PackingListComponent.vue";
import StatsComponent from "./components/StatsComponent.vue";

const items = ref([]);
</script>

<template>
  <div class="app">
    <LogoComponent />
    <FormComponent v-model="items" />
    <PackingListComponent v-model="items" />
    <StatsComponent :items="items" />
  </div>
</template>

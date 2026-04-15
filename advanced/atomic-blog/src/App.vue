<script setup>
import { ref, watch } from "vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import ArchiveContent from "./components/ArchiveContent.vue";
import MainContent from "./components/MainContent.vue";

const isFakeDark = ref(false);

watch(isFakeDark, () => {
  document.documentElement.classList.toggle("fake-dark-mode");
});
</script>

<template>
  <section>
    <button @click="isFakeDark = !isFakeDark" class="btn-fake-dark-mode">
      {{ isFakeDark ? "☀️" : "🌙" }}
    </button>

    <AppHeader />
    <MainContent />
    <ArchiveContent />
    <AppFooter />
  </section>
</template>

<style scoped></style>

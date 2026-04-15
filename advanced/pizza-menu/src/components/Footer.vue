<script setup>
const hour = new Date().getHours();
const openHour = 9;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;
</script>

<template>
  <footer class="footer">
    <div class="order" v-if="isOpen">
      <p>
        We're open from {{ openHour }}:00 to {{ closeHour }}:00. Come visit us
        or order online.
      </p>
      <button class="btn">Order</button>
    </div>
    <p v-if="!isOpen">
      We're happy to welcome you between {{ openHour }}:00 and
      {{ closeHour }}:00
    </p>
  </footer>
</template>

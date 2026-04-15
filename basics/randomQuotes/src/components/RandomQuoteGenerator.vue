<script setup>
import { onMounted, ref } from "vue";

const quotes = ref([
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
]);

const currentQuote = ref({ text: "", author: "" });

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  console.log("Random:", Math.random()); // Debugging log
  currentQuote.value = quotes.value[randomIndex];
};

onMounted(getRandomQuote);
</script>

<template>
  <div class="quote-generator">
    <div class="app-title">Random Quote Generator</div>

    <blockquote class="quote-container">
      <p>{{ currentQuote.text }}</p>
      <cite>{{ currentQuote.author }}</cite>
    </blockquote>

    <button class="quote-button" @click="getRandomQuote">Get Random Quote</button>
  </div>
</template>

<style scoped>
.quote-generator {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.quote-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

cite {
  font-style: normal;
  color: #777;
}

.quote-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.quote-button:hover {
  background-color: #2980b9;
}
</style>

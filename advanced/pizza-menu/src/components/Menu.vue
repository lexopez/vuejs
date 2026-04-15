<script setup>
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const pizzas = pizzaData;
const numPizzas = pizzas.length;
</script>

<template>
  <main class="menu">
    <h2>Our menu</h2>
    <p v-if="numPizzas">
      Authentic Italian cuisine. 6 creative dishes to choose from. All from our
      stone oven, all organic, all delicious.
    </p>
    <ul class="pizzas">
      <li
        v-for="(pizza, index) in pizzas"
        :key="pizza.name"
        :class="`pizza ${pizza.soldOut ? 'sold-out' : ''}`"
      >
        <img :src="pizza.photoName" :alt="index" />
        <div>
          <h3>{{ pizza.name }}</h3>
          <p>{{ pizza.ingredients }}</p>
          <span>{{ pizza.soldOut ? "SOLD OUT" : pizza.price }}</span>
        </div>
      </li>
    </ul>
  </main>
</template>

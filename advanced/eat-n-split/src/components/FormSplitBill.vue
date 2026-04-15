<script setup>
import { computed, ref, toRefs } from "vue";

const props = defineProps({
  selectedFriend: Object,
  friends: Array,
});
const emit = defineEmits(["update:selectedFriend", "update:friends"]);

const { selectedFriend, friends } = toRefs(props);

const bill = ref("");
const paidByUser = ref("");
const paidByFriend = computed(() => (bill.value ? bill.value - paidByUser.value : ""));
const whoIsPaying = ref("user");

const handleSplitBill = () => {
  if (!bill.value || !paidByUser.value) return;

  const value = Number(whoIsPaying.value === "user" ? paidByFriend.value : -paidByUser.value);

  const friend = friends.value.find((f) => f.id === selectedFriend.value.id);
  if (friend) {
    friend.balance += value;
  }

  emit("update:friends", friends.value);
  emit("update:selectedFriend", null);

  bill.value = "";
  paidByUser.value = "";
};
</script>

<template>
  <form v-if="selectedFriend" @submit.prevent="handleSplitBill" class="form-split-bill">
    <h2>Split a bill with {{ selectedFriend.name }}</h2>

    <label>Bill value</label>
    <input type="text" :value="bill" @input="bill = $event.target.value" />

    <label>Your expense</label>
    <input type="text" :value="paidByUser" @input="paidByUser = $event.target.value" />

    <label>{{ selectedFriend.name }}'s expense</label>
    <input type="text" disabled :value="paidByFriend" />

    <label>Who is paying the bill</label>
    <select :value="whoIsPaying" @input="whoIsPaying = $event.target.value">
      <option value="user">You</option>
      <option value="friend">{{ selectedFriend.name }}</option>
    </select>
    <button class="button">Split Bill</button>
  </form>
</template>

<script setup>
const props = defineProps(["onDelete"]);
const emit = defineEmits(["close"]);

const onConfirm = () => {
  props.onDelete(); // Execute the actual delete logic
  emit("close"); // Close the toast
};
</script>

<template>
  <div>
    <p><strong>Are you sure?</strong> This action is permanent.</p>
    <div style="display: flex; gap: 10px; margin-top: 10px">
      <button @click="$emit('close')" class="btn-cancel">Cancel</button>
      <button @click="onConfirm" class="btn-delete">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.btn-delete {
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-cancel {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

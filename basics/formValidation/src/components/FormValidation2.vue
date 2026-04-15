<script setup>
import { reactive, ref } from "vue";

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const isNameError = ref(false);
const isEmailError = ref(false);
const isPasswordError = ref(false);

const submitForm = () => {
  if (formData.name.trim() === "") {
    console.log("Name is required");
    formData.name = "";
    isNameError.value = true;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.email.trim() === "") {
    console.log("Please enter a valid email address");
    formData.email = "";
    isEmailError.value = true;
  }

  if (formData.password.length < 8 || formData.password.trim() === "") {
    isPasswordError.value = true;
    console.log("Password must be at least 8 characters");
    formData.password = "";
  }

  if (isNameError.value || isEmailError.value || isPasswordError.value) {
    return;
  }

  console.log("Form submitted successfully:", formData);
  formData.name = "";
  formData.email = "";
  formData.password = "";
  isNameError.value = false;
  isEmailError.value = false;
  isPasswordError.value = false;
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm" class="custom-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" />
        <span v-if="isNameError" class="error">Name is required</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="formData.email" />
        <span v-if="isEmailError" class="error">Please enter a valid email address</span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="text" id="password" v-model="formData.password" />
        <span v-if="isPasswordError" class="error">Password must be at least 8 characters</span>
      </div>

      <button type="submit" :disabled="isNameError || isEmailError || isPasswordError">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped>
.custom-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
}

.submit-button {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>

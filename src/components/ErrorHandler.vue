<script setup lang="ts">
import { useStore } from "@/Store/Store";
const { failedToFetch } = useStore();

const closeError = () => {
  failedToFetch.value = false;
};
</script>

<template>
  <div class="error-card" v-if="failedToFetch === true">
    <h1 class="error-text">failed to fetch, check spelling and try again</h1>
    <button class="close-button" @click="closeError">x</button>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.error-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #ccc;
  font-family: "Poppins", sans-serif;
  margin-top: 50px;
}

.error-text {
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-top: 10px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f5f5f5;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  cursor: pointer;
}

.close-button:hover {
  color: #007aff;
}
</style>

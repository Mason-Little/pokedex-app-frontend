<template>
  <div class="search-div">
    <input type="text" class="search-input" v-model="searchValue" />
    <button class="search-button" @click="searchHandler">search</button>
  </div>
</template>

<script setup>
import { useStore } from "/src/Store/Store";

const { searchValue, searchButtonPressedValue } = useStore();

const searchHandler = () => {
  searchButtonPressedValue.value = searchValue.value;
};
</script>
<style scoped>
.search-div {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #f2f2f2;
  padding: 10px;
}

.search-input::placeholder {
  color: black;
}

.search-input {
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 18px;
  flex: 1;
}

.search-input:focus {
  outline: none;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
}

.search-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 25px;
}

.search-button:hover {
  background-color: #3e8e41;
}
</style>

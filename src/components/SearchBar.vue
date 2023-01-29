<template>
  <div class="search-div">
    <input type="text" class="search-input" v-model="SearchValue" />
    <button class="search-button" @click="searchHandler">search</button>
  </div>
</template>

<script setup>
import { useStore } from "/src/Store/Store";

const { SearchValue } = useStore();

const searchHandler = () => {
  console.log(SearchValue.value);
};
</script>
<style scoped>
.search-div {
  display: flex;
  align-items: center;
  width: 80%; /* adjust as desired */
  margin: 0 auto; /* centers horizontally */
  border-radius: 25px; /* adds rounded edges */
  background-color: #f2f2f2; /* sets background color */
  padding: 10px; /* adds padding */
}

.search-input::placeholder {
  color: black; /* sets placeholder text color */
}

.search-input {
  background-color: transparent; /* removes background color */
  border: none; /* removes border */
  padding: 10px; /* adds padding */
  font-size: 18px; /* sets font size */
  flex: 1; /* allows input to take up remaining space */
}

.search-input:focus {
  outline: none; /* removes the black border */
  background-color: #f2f2f2; /* sets background color */
  border: 1px solid #f2f2f2; /* sets border color */
}

.search-button {
  background-color: #4caf50; /* sets background color */
  color: white; /* sets text color */
  padding: 10px 20px; /* adds padding */
  border: none; /* removes border */
  cursor: pointer; /* changes cursor on hover */
  font-size: 18px; /* sets font size */
  border-radius: 25px; /* adds rounded edges */
}

.search-button:hover {
  background-color: #3e8e41; /* changes background color on hover */
}
</style>

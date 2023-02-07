<template>
  <div class="search-div">
    <input
      :value="state.searchTerm"
      type="text"
      class="search-input"
      @input="setSearchTerm($event.target.value)"
      @keyup.enter="setSearchedPokemon"
    />
    <button class="search-button" @click="setSearchedPokemon">search</button>
  </div>
</template>

<script setup>
import { useSearchBarStore } from "@/store/searchHandlerStore";

const { state, setSearchTerm, setSearchedPokemon } = useSearchBarStore();
console.log(state.searchedPokemon);

setSearchedPokemon();
console.log(state.searchedPokemon);
console.log(state.searchTerm);
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

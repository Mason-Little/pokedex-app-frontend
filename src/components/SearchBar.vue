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
<style scoped></style>

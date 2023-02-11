<template>
  <div class="search-div">
    <input
      :value="state.searchTerm"
      type="text"
      class="search-input"
      @input="setSearchTerm($event.target.value)"
      @keyup.enter="setSearchedPokemon"
    />
    <ul>
      <li
        v-for="option in filteredOptions"
        :key="option"
        @click="autoCompleteActivated(option)"
      >
        {{ option }}
      </li>
    </ul>
    <button class="search-button" @click="setSearchedPokemon">search</button>
  </div>
</template>

<script setup>
import { useSearchBarStore } from "@/store/searchHandlerStore";
import { computed } from "vue";

const { state, setSearchTerm, setSearchedPokemon, setClickedPokemon } =
  useSearchBarStore();
console.log(state.searchedPokemon);
const searchOptions = ["charmander", "charizard", "bulbasaur", "snorlax"];
const filteredOptions = computed(() => {
  if (!state.searchTerm) {
    return [];
  }
  // logic to filter the searchOptions
  return searchOptions
    .filter((options) => options.indexOf(state.searchTerm) !== -1)
    .sort((a, b) => a.indexOf(state.searchTerm) - b.indexOf(state.searchTerm))
    .slice(0, 5);
});

const autoCompleteActivated = (clicked) => {
  setClickedPokemon(clicked);
};
//this.searchOptions.filter(option => option.indexOf(this.searchTerm) !== -1);

setSearchedPokemon();
console.log(state.searchedPokemon);
console.log(state.searchTerm);
</script>
<style scoped>
ul {
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
  z-index: 1;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

li:hover {
  background-color: #f2f2f2;
}
</style>

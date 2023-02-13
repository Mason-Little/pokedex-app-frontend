<template>
  <div class="search-div">
    <input
      :value="state.searchTerm"
      type="text"
      class="search-input"
      @input="setSearchTerm($event.target.value)"
      @keyup.enter="setSearchedPokemon"
    />
    <ul class="search-options" v-if="filteredOptions">
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
import { computed, onMounted, ref } from "vue";

const searchOptions = ref([]);

const { state, setSearchTerm, setSearchedPokemon, setClickedPokemon } =
  useSearchBarStore();

async function fetchAllPokemon() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(url);
    const data = await response.json();
    return data.results.map((pokemon) => pokemon.name);
  } catch (error) {
    return [];
  }
}

const filteredOptions = computed(() => {
  if (!state.searchTerm) {
    return false;
  }

  return searchOptions.value.filter((option) => {
    return option.startsWith(state.searchTerm);
  });
});

const autoCompleteActivated = (clicked) => {
  setClickedPokemon(clicked);
};

onMounted(async () => {
  searchOptions.value = await fetchAllPokemon();
});

setSearchedPokemon();
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.search-div {
  display: flex;
  align-items: center;
  width: 80%;
  border-radius: 25px;
  background-color: #f2f2f2;
  padding: 10px;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
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
}

.search-button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.search-button:hover {
  background-color: #3e8e41;
}

li {
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

li:hover {
  background-color: #f2f2f2;
}

.search-options {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  position: absolute;
  width: 100%;
  list-style: none;
  padding: 0;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  z-index: 1;
  max-height: 200px;
  overflow-y: scroll;
  border: 1px solid #ffffff;
  top: 40px;
  left: 0;
  right: 0;
}

.search-options::-webkit-scrollbar {
  width: 8px;
}

.search-options::-webkit-scrollbar-thumb {
  background-color: #4caf50;
  border-radius: 10px;
}

.search-options::-webkit-scrollbar-track {
  background-color: #f2f2f2;
  border-radius: 10px;
}
</style>

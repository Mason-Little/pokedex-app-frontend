<script setup>
import { useStore } from "@/store/store";
import { useSearchBarStore } from "@/store/searchHandlerStore";

const { historyHandlerState } = useStore();
const { setClickedPokemon } = useSearchBarStore();

const historyActivated = (clicked) => {
  console.log(clicked);
  setClickedPokemon(clicked);
};
</script>

<template>
  <div
    class="history-list-container"
    :class="{ 'is-active': historyHandlerState.historyShowing }"
  >
    <ul>
      <li
        v-for="singlePokemon in historyHandlerState.historyNames"
        :key="singlePokemon"
      >
        <button @click="historyActivated(singlePokemon)">
          {{ singlePokemon }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

<script setup>
import { useStore } from "@/store/store";
import { useSearchBarStore } from "@/store/searchHandlerStore";

const { historyHandlerState } = useStore();
const { setClickedPokemon } = useSearchBarStore();

const historyActivated = (clicked) => {
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

<style scoped>
.history-list-container {
  position: absolute;
  display: flex;
  top: 110px;
  right: 25px;
  z-index: 1;
  overflow-y: auto;
  border-radius: 25px;
  background-color: #f2f2f2;
  transform: translateX(200%);
  transition: transform 0.3s ease-out;
}

.history-list-container.is-active {
  transform: translateX(0);
}

.history-list-container ul {
  list-style-type: none;
  padding: 0;
}

.history-list-container button {
  font-size: larger;
  background-color: #f2f2f2;
  border: none;
  padding: 12px 16px;
  border-radius: 25px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  margin: 10px 10px;
}

.history-list-container button:hover {
  background-color: #4caf50;
  color: #fff;
}
</style>

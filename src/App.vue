<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import ErrorHandler from "@/components/ErrorHandler.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import HistoryBlock from "@/components/HistoryBlock.vue";

import { useStore } from "@/store/store";
const { historyHandlerState } = useStore();

const showHistory = () => {
  historyHandlerState.historyShowing = !historyHandlerState.historyShowing;
  console.log(historyHandlerState.historyShowing);
};
</script>

<template>
  <div>
    <div class="container">
      <SearchBar />
      <button class="history" @click="showHistory">
        {{
          historyHandlerState.historyShowing ? "Hide History" : "Show History"
        }}
      </button>
    </div>
    <ErrorHandler />
    <div class="flex-container">
      <InfoBlock />
      <history-block />
    </div>
  </div>
</template>

<style scoped></style>

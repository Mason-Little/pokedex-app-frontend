<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import ErrorHandler from "@/components/ErrorHandler.vue";
import InfoBlock from "@/components/InfoBlock.vue";
import HistoryBlock from "@/components/HistoryBlock.vue";
import { useFetch } from "@vueuse/core";

import { useStore } from "@/store/store";
const { historyHandlerState } = useStore();

const showHistory = () => {
  historyHandlerState.historyShowing = !historyHandlerState.historyShowing;
  console.log(historyHandlerState.historyShowing);
};

const getHistoryFromDB = async () => {
  if (localStorage.length > 1) {
    const uuid = localStorage.getItem("id") ?? "";
    const formData = new FormData();
    formData.append("uuid", uuid);
    const url = "http://127.0.0.1:5000/return_history";
    const { data } = await useFetch(url).post(formData).json();
    console.log(data.value[0].history);
    const databaseHistory = data.value[0].history;
    console.log(typeof databaseHistory);
    databaseHistory.forEach((something) => {
      if (!historyHandlerState.historyNames.includes(something)) {
        historyHandlerState.historyNames.push(something);
      }
    });
  } else {
    const url = "http://127.0.0.1:5000/add_user_info";
    const { data } = await useFetch(url).get();
    console.log(data.value);
    localStorage.setItem("id", data.value);
  }
};

getHistoryFromDB();
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

<script setup lang="ts">
import SearchBar from "@/components/SearchBar.vue";
import { useStore } from "@/Store/Store";

const { SearchValue } = useStore();
</script>

<template>
  <div class="testing">
    <SearchBar />
    <h1>{{ SearchValue }}</h1>
  </div>
</template>

<style scoped>
.testing {
  color: black;
}
</style>

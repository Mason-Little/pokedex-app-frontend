<template>
  <input type="text" class="searchinput" v-model="SearchValue" />
  <button class="searchbutton" @click="SearchHandler">search</button>
</template>

<script setup>
import { useStore } from "/src/Store/Store";

const { SearchValue } = useStore();

const SearchHandler = () => {
  console.log(SearchValue.value);
};
</script>
<style scoped></style>

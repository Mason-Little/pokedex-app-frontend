import { ref } from "vue";

const SearchValue = ref("");

const store = {
  SearchValue,
};

export const useStore = () => store;

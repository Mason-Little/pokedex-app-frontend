import { ref } from "vue";

const searchValue = ref("");

const store = {
  SearchValue: searchValue,
};

export const useStore = () => store;

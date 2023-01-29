import { ref } from "vue";

const store = {
  searchValue: ref(""),
};

export const useStore = () => store;

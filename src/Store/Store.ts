import { ref } from "vue";

const store = {
  searchValue: ref(""),
  searchButtonPressedValue: ref(""),
};

export const useStore = () => store;

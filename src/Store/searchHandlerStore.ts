import { reactive, readonly } from "vue";

const createDefaultSearchBarState = () => ({
  searchTerm: "bulbasaur",
  searchedPokemon: "",
});
const state = reactive(createDefaultSearchBarState());

const setSearchTerm = (value: string) => {
  state.searchTerm = value;
};

const setSearchedPokemon = () => {
  state.searchedPokemon = state.searchTerm;
  state.searchTerm = "";
};

const setHistoryPokemon = (value: any) => {
  console.log(value);
  state.searchedPokemon = value;
};

const store = {
  state: readonly(state),
  setSearchTerm,
  setSearchedPokemon,
  setHistoryPokemon,
};

export const useSearchBarStore = () => store;

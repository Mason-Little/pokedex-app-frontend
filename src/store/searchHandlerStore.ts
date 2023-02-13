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

const setClickedPokemon = (value: string) => {
  state.searchedPokemon = value;
  state.searchTerm = "";
};

const store = {
  state: readonly(state),
  setSearchTerm,
  setSearchedPokemon,
  setClickedPokemon,
};

export const useSearchBarStore = () => store;

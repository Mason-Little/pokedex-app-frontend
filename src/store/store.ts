import { ref, reactive } from "vue";

const createDefaultPokemonData = () => ({
  pokemonName: "bulbasaur",
  allMoves: [],
  allAbilities: [],
  pokemonJsonData: {},
});

const pokemonData = reactive(createDefaultPokemonData());

const createDefaultHistoryHandlerState = () => ({
  historyShowing: false,
  historyNames: [],
});

const historyHandlerState = reactive(createDefaultHistoryHandlerState());

const store = {
  pokemonData,
  historyHandlerState,
  failedToFetch: ref(false),
  pokemonImageUrl: ref(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  ),
};

export const useStore = () => store;

import { ref } from "vue";

const store = {
  searchValue: ref(""),
  searchedPokemon: ref("bulbasaur"),
  pokemonName: ref("bulbasaur"),
  pokemonImageUrl: ref(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  ),
  firstFourMoves: ref(["Razor Wind", "Swords Dance", "Cut", "Bind"]),
};

export const useStore = () => store;

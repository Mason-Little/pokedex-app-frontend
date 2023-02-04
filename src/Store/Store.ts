import { ref, reactive } from "vue";

const resetStore = () => {
  store.iconHandlerState.pokemonTypes = [];
  store.iconHandlerState.strongAgainst = [];
  store.iconHandlerState.weakAgainst = [];
  store.iconHandlerState.resistantTo = [];
  store.iconHandlerState.vulnerableTo = [];
  store.pokemonData.allMoves = [];
  store.pokemonData.allAbilities = [];
};

const createDefaultSearchBarState = () => ({
  searchValue: "",
  searchedPokemon: "bulbasaur",
});
const searchBarState = reactive(createDefaultSearchBarState());

const createDefaultIconHandlerState = () => ({
  pokemonTypes: [],
  strongAgainst: [],
  weakAgainst: [],
  resistantTo: [],
  vulnerableTo: [],
});
const iconHandlerState = reactive(createDefaultIconHandlerState());

const createDefaultPokemonData = () => ({
  pokemonName: "bulbasaur",
  allMoves: [],
  allAbilities: [],
  pokemonJsonData: {},
});

const pokemonData = reactive(createDefaultPokemonData());

const store = {
  searchBarState,
  iconHandlerState,
  pokemonData,
  failedToFetch: ref(false),
  pokemonImageUrl: ref(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
  ),
  pokemonTactics: reactive({
    normal: {
      strongAgainst: [],
      weakAgainst: ["rock", "ghost", "steel"],
      resistantTo: ["ghost"],
      vulnerableTo: ["fighting"],
    },
    fighting: {
      strongAgainst: ["normal", "rock", "steel", "ice", "dark"],
      weakAgainst: ["flying", "poison", "bug", "ghost", "fairy"],
      resistantTo: ["rock", "bug", "dark"],
      vulnerableTo: ["flying", "psychic", "fairy"],
    },
    flying: {
      strongAgainst: ["fighting", "bug", "grass"],
      weakAgainst: ["rock", "steel", "electric"],
      resistantTo: ["fighting", "bug", "grass", "ground"],
      vulnerableTo: ["rock", "ice", "electric"],
    },
    poison: {
      strongAgainst: ["grass", "fairy"],
      weakAgainst: ["poison", "ground", "rock", "ghost", "steel"],
      resistantTo: ["fighting", "poison", "grass", "fairy"],
      vulnerableTo: ["ground", "psychic"],
    },
    ground: {
      strongAgainst: ["poison", "rock", "steel", "fire", "electric"],
      weakAgainst: ["flying", "bug", "grass"],
      resistantTo: ["poison", "rock", "electric"],
      vulnerableTo: ["water", "grass", "ice"],
    },
    rock: {
      strongAgainst: ["flying", "bug", "fire", "ice"],
      weakAgainst: ["fighting", "ground", "steel"],
      resistantTo: ["normal", "flying", "poison", "fire"],
      vulnerableTo: ["fighting", "ground", "steel", "water", "grass"],
    },
    bug: {
      strongAgainst: ["grass", "psychic", "dark"],
      weakAgainst: [
        "fighting",
        "flying",
        "poison",
        "ghost",
        "steel",
        "fire",
        "fairy",
      ],
      resistantTo: ["fighting", "ground", "grass"],
      vulnerableTo: ["flying", "rock", "fire"],
    },
    ghost: {
      strongAgainst: ["ghost", "psychic"],
      weakAgainst: ["dark", "normal"],
      resistantTo: ["poison", "bug", "normal", "fighting"],
      vulnerableTo: ["ghost", "dark"],
    },
    steel: {
      strongAgainst: ["rock", "ice", "fairy"],
      weakAgainst: ["steel", "fire", "water", "electric"],
      resistantTo: [
        "normal",
        "flying",
        "rock",
        "bug",
        "steel",
        "grass",
        "psychic",
        "ice",
        "dragon",
        "fairy",
      ],
      vulnerableTo: ["fighting", "ground", "fire"],
    },
    fire: {
      strongAgainst: ["bug", "steel", "grass", "ice"],
      weakAgainst: ["rock", "fire", "water", "dragon"],
      resistantTo: ["bug", "steel", "fire", "grass", "ice"],
      vulnerableTo: ["ground", "rock", "water"],
    },
    water: {
      strongAgainst: ["ground", "rock", "fire"],
      weakAgainst: ["water", "grass", "dragon"],
      resistantTo: ["steel", "fire", "water", "ice"],
      vulnerableTo: ["grass", "electric"],
    },
    grass: {
      strongAgainst: ["ground", "rock", "water"],
      weakAgainst: [
        "flying",
        "poison",
        "bug",
        "steel",
        "fire",
        "grass",
        "dragon",
      ],
      resistantTo: ["ground", "water", "grass", "electric"],
      vulnerableTo: ["flying", "poison", "bug", "fire", "ice"],
    },
    electric: {
      strongAgainst: ["flying", "water"],
      weakAgainst: ["grass", "electric", "dragon", "ground"],
      resistantTo: ["flying", "steel", "electric"],
      vulnerableTo: ["ground"],
    },
    psychic: {
      strongAgainst: ["fighting", "poison"],
      weakAgainst: ["steel", "psychic", "dark"],
      resistantTo: ["fighting", "psychic"],
      vulnerableTo: ["bug", "ghost", "dark"],
    },
    ice: {
      strongAgainst: ["flying", "ground", "grass", "dragon"],
      weakAgainst: ["steel", "fire", "water", "ice"],
      resistantTo: ["ice"],
      vulnerableTo: ["fighting", "rock", "steel", "fire"],
    },
    dragon: {
      strongAgainst: ["dragon"],
      weakAgainst: ["steel", "fairy"],
      resistantTo: ["fire", "water", "grass", "electric"],
      vulnerableTo: ["ice", "dragon", "fairy"],
    },
    dark: {
      strongAgainst: ["ghost", "psychic"],
      weakAgainst: ["fighting", "dark", "fairy"],
      resistantTo: ["ghost", "dark"],
      vulnerableTo: ["fighting", "bug", "fairy"],
    },
    fairy: {
      strongAgainst: ["fighting", "dragon", "dark"],
      weakAgainst: ["steel", "fire", "poison", "dragon"],
      resistantTo: ["fighting", "bug", "dark"],
      vulnerableTo: ["poison", "steel"],
    },
  }),
  resetStore,
};

export const useStore = () => store;

<template>
  <div class="pokemon-card mt50">
    <img class="pokemon-image" :src="pokemonImageUrl" alt="Pokemon Image" />
    <h2 class="pokemon-name">{{ pokemonName }}</h2>
    <ul>
      <li>
        <div class="icon bug"><img src="" alt=""></div>
        <div class="icon dark"><img src="" alt=""></div>
      </li>
      <li>
        <div class="moves-container">
          <strong>Moves:</strong>{{ firstFourMoves[0] }},
          {{ firstFourMoves[1] }}, {{ firstFourMoves[2] }},
          {{ firstFourMoves[3] }}
          <button>Show All</button>
        </div>
      </li>
      <li><strong>Strong Against:</strong> img, Type 2, Type 3</li>
      <li><strong>Weak Against:</strong> Type 1, Type 2, Type 3</li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "/src/Store/Store";

const { searchedPokemon, pokemonName, pokemonImageUrl, firstFourMoves } =
  useStore();

async function fetchPokemon() {
  const URL = `https://pokeapi.co/api/v2/pokemon/${searchedPokemon.value}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  pokemonName.value = data.name;
  console.log(pokemonName.value);
  pokemonImageUrl.value = data.sprites.other.dream_world.front_default;
  firstFourMoves.value = firstFourMoves.value.map((_, i) => {
    let move = data.moves[i].move.name;
    move = move.split("-");
    move = move.map((word) => word[0].toUpperCase() + word.slice(1));
    move = move.join(" ");
    return move;
  });
  let length = Object.keys(data.types).length;
  console.log(length);
}

fetchPokemon();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.pokemon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  font-family: "Poppins", sans-serif;
}

.pokemon-name {
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 10px;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
}

.mt50 {
  margin-top: 50px;
}

.moves-container {
  display: flex;
  align-items: center;
}

.icon {
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: inline-block;
  margin: 0 10px;
}

.icon img {
  height: 60%;
  width: 60%;
  margin: 20%
}

.bug {
  background: #92BC2C;
  box-shadow: 0 0 20px #92BC2C;
}

.dark {
  background: #595761;
  box-shadow: 0 0 20px #595761;
}
</style>

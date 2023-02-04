<template>
  <div class="info-card mt50">
    <img class="pokemon-image" :src="pokemonImageUrl" alt="Pokemon Image" />
    <h2 class="pokemon-text">{{ pokemonData.pokemonName }}</h2>
    <ul>
      <li>
        <div class="icon-container">
          <div
            v-for="pokemonType in iconHandlerState.pokemonTypes"
            :key="pokemonType"
            class="icon"
            :class="pokemonType"
          >
            <img :src="fileTypes[pokemonType]" alt="" />
          </div>
        </div>
      </li>
      <li>
        <div class="moves-container">
          <strong>Moves:</strong>&nbsp;
          <div
            v-for="move in visibleMoves"
            :key="move"
            class="move"
            v-html="move"
          ></div>
          <button @click="toggleMoves" v-if="pokemonData.allMoves.length > 4">
            {{
              movesToggle
                ? `Show all ${pokemonData.allMoves.length - 4}`
                : "Show Four"
            }}
          </button>
        </div>
      </li>
      <li>
        <div class="ability-container">
          <strong>Ability's:</strong>&nbsp;
          <div
            v-for="abilityArray in visibleAbilities"
            :key="abilityArray"
            v-html="abilityArray"
          ></div>
          <button
            @click="toggleAbilities"
            v-if="pokemonData.allAbilities.length > 4"
          >
            {{
              abilitiesToggle
                ? `Show all ${pokemonData.allAbilities.length - 4}`
                : "Show Four"
            }}
          </button>
        </div>
      </li>
      <li>
        <strong>Strong Against:</strong>&nbsp;
        <div class="strong-container">
          <div
            v-for="strongAgainst in iconHandlerState.strongAgainst"
            :key="strongAgainst"
            class="icon"
            :class="strongAgainst"
          >
            <img :src="fileTypes[strongAgainst]" alt="" />
          </div>
        </div>
      </li>
      <li>
        <strong>Weak Against:</strong>&nbsp;
        <div class="weak-container">
          <div
            v-for="weakAgainst in iconHandlerState.weakAgainst"
            :key="weakAgainst"
            class="icon"
            :class="weakAgainst"
          >
            <img :src="fileTypes[weakAgainst]" alt="" />
          </div>
        </div>
      </li>

      <li>
        <strong>Resistant Against:</strong>&nbsp;
        <div class="resistant-container">
          <div
            v-for="resistantAgainst in iconHandlerState.resistantTo"
            :key="resistantAgainst"
            class="icon"
            :class="resistantAgainst"
          >
            <img :src="fileTypes[resistantAgainst]" alt="" />
          </div>
        </div>
      </li>
      <li>
        <strong> Vulnerable Against: </strong>
        <div class="vulnerable-container">
          <div
            v-for="vulnerableAgainst in iconHandlerState.vulnerableTo"
            :key="vulnerableAgainst"
            class="icon"
            :class="vulnerableAgainst"
          >
            <img :src="fileTypes[vulnerableAgainst]" alt="" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "/src/Store/Store";
import fileTypes from "/src/types";
import { computed, ref, watch } from "vue";

const {
  pokemonImageUrl,
  pokemonTactics,
  searchBarState,
  iconHandlerState,
  pokemonData,
  failedToFetch,
} = useStore();

const movesToggle = ref(true);
const abilitiesToggle = ref(true);

const firstFourMoves = computed(() => pokemonData.allMoves.slice(0, 4));
const firstFourAbilities = computed(() => pokemonData.allAbilities.slice(0, 4));

const visibleMoves = computed(() => {
  if (movesToggle.value) {
    return firstFourMoves.value;
  } else {
    return pokemonData.allMoves;
  }
});

const visibleAbilities = computed(() => {
  if (abilitiesToggle.value) {
    return firstFourAbilities.value;
  } else {
    return pokemonData.allAbilities;
  }
});

const toggleMoves = () => {
  movesToggle.value = !movesToggle.value;
};

const toggleAbilities = () => {
  abilitiesToggle.value = !movesToggle.value;
};

async function fetchPokemon() {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${searchBarState.searchedPokemon}`;
    const response = await fetch(URL);
    pokemonData.pokemonJsonData = await response.json();
    console.log(pokemonData.pokemonJsonData);
    failedToFetch.value = false;
  } catch (error) {
    failedToFetch.value = true;
  }

  pokemonData.pokemonName = pokemonData.pokemonJsonData.name;
  pokemonData.pokemonName =
    pokemonData.pokemonName[0].toUpperCase() + pokemonData.pokemonName.slice(1);

  pokemonImageUrl.value =
    pokemonData.pokemonJsonData.sprites.other.dream_world.front_default;

  const { types } = pokemonData.pokemonJsonData;
  types.forEach((type) => {
    iconHandlerState.pokemonTypes.push(type.type.name);
  });

  const prettierLoads = (data) => {
    let dataMod = data.split("-");
    dataMod = dataMod.map(
      (dataMod) => dataMod[0].toUpperCase() + dataMod.slice(1)
    );
    dataMod = dataMod.join(" ");
    dataMod = dataMod + ", ";
    return dataMod;
  };

  const { moves } = pokemonData.pokemonJsonData;
  moves.forEach((move) => {
    let moveMod = move.move.name;
    moveMod = prettierLoads(moveMod);
    pokemonData.allMoves.push(moveMod);
  });

  const { abilities } = pokemonData.pokemonJsonData;
  abilities.forEach((ability) => {
    let abilityMod = ability.ability.name;
    abilityMod = prettierLoads(abilityMod);
    pokemonData.allAbilities.push(abilityMod);
  });

  iconHandlerState.pokemonTypes.forEach((pokemonType) => {
    const { strongAgainst } = pokemonTactics[pokemonType];
    const { weakAgainst } = pokemonTactics[pokemonType];
    const { resistantTo } = pokemonTactics[pokemonType];
    const { vulnerableTo } = pokemonTactics[pokemonType];

    console.log(iconHandlerState.strongAgainst);

    strongAgainst.forEach((strongAgainst) => {
      if (!iconHandlerState.strongAgainst.includes(strongAgainst)) {
        iconHandlerState.strongAgainst.push(strongAgainst);
      }
    });
    weakAgainst.forEach((weakAgainst) => {
      if (!iconHandlerState.weakAgainst.includes(weakAgainst)) {
        iconHandlerState.weakAgainst.push(weakAgainst);
      }
    });
    resistantTo.forEach((resistantTo) => {
      if (!iconHandlerState.resistantTo.includes(resistantTo)) {
        iconHandlerState.resistantTo.push(resistantTo);
      }
    });
    vulnerableTo.forEach((vulnerableTo) => {
      if (!iconHandlerState.vulnerableTo.includes(vulnerableTo)) {
        iconHandlerState.vulnerableTo.push(vulnerableTo);
      }
    });
  });
}

fetchPokemon();

watch(
  () => searchBarState.searchedPokemon,
  () => {
    fetchPokemon();
  }
);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  font-family: "Poppins", sans-serif;
}

.pokemon-text {
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 10px;
}

.pokemon-image {
  width: 300px;
  height: 300px;
  object-fit: fill;
  margin: 0 auto;
}

ul {
  list-style: none;
  margin: 10px;
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
}

li {
  margin: 10px;
}

.mt50 {
  margin-top: 50px;
}

.moves-container,
.ability-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.move,
.ability-container div {
  display: inline-block;
  margin-right: 10px;
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
  margin: 20%;
}

.bug {
  background: #92bc2c;
  box-shadow: 0 0 20px #92bc2c;
}

.dark {
  background: #595761;
  box-shadow: 0 0 20px #595761;
}

.dragon {
  background: #0c69c8;
  box-shadow: 0 0 20px #0c69c8;
}

.electric {
  background: #f2d94e;
  box-shadow: 0 0 20px #f2d94e;
}

.fire {
  background: #fba54c;
  box-shadow: 0 0 20px #fba54c;
}

.fairy {
  background: #ee90e6;
  box-shadow: 0 0 20px #ee90e6;
}

.fighting {
  background: #d3425f;
  box-shadow: 0 0 20px #d3425f;
}

.flying {
  background: #a1bbec;
  box-shadow: 0 0 20px #a1bbec;
}

.ghost {
  background: #5f6dbc;
  box-shadow: 0 0 20px #5f6dbc;
}

.grass {
  background: #5fbd58;
  box-shadow: 0 0 20px #5fbd58;
}

.ground {
  background: #da7c4d;
  box-shadow: 0 0 20px #da7c4d;
}

.ice {
  background: #75d0c1;
  box-shadow: 0 0 20px #75d0c1;
}

.normal {
  background: #a0a29f;
  box-shadow: 0 0 20px #a0a29f;
}

.poison {
  background: #b763cf;
  box-shadow: 0 0 20px #b763cf;
}

.psychic {
  background: #fa8581;
  box-shadow: 0 0 20px #fa8581;
}

.rock {
  background: #c9bb8a;
  box-shadow: 0 0 20px #c9bb8a;
}

.steel {
  background: #5695a3;
  box-shadow: 0 0 20px #5695a3;
}

.water {
  background: #539ddf;
  box-shadow: 0 0 20px #539ddf;
}
</style>

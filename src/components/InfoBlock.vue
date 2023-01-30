<template>
  <div class="pokemon-card margin-top">
    <img class="pokemon-image" src="" alt="Pokemon Image" />
    <h2 class="pokemon-name">Place Holder</h2>
    <ul>
      <li><strong>Type:</strong> Pokemon Type</li>
      <li><strong>Moves:</strong> Move 1, Move 2, Move 3, Move 4</li>
      <li><strong>Strong Against:</strong> Type 1, Type 2, Type 3</li>
      <li><strong>Weak Against:</strong> Type 1, Type 2, Type 3</li>
    </ul>
  </div>
</template>

<script setup></script>

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
  font-family: "Poppins", sans-serif; /* Adding font-family */
}

.pokemon-name {
  font-size: 2.5rem; /* Increasing font-size */
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 10px;
}

img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0 auto; /* center align the image */
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.2rem; /* Increasing font-size */
}

.margin-top {
  margin-top: 50px;
}
</style>

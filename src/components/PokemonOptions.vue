<template lang="">
  <div class="options-container">
    <ul>
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="checkAnswer(pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

const { pokemonArr: pokemons, checkAnswer } = usePokemons();
</script>

<style lang="css" scope>
/* Pokemon Options */
ul {
  list-style-type: none;
  margin-top: 30px;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>

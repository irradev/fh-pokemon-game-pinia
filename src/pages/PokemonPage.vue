<template lang="">
  <h1 v-if="!pokemon">Espere por favor...</h1>

  <div v-else>
    <h1>¿Quién es este pokémon?</h1>

    <PokemonPicture />
    <PokemonOptions />

    <div v-if="showAnswer">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';

const {
  pokemon,
  showAnswer,
  message,

  newGame,
  mixPokemonArray,
} = usePokemons();

mixPokemonArray();
</script>

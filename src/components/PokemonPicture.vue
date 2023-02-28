<template>
  <div class="pokemon-container">
    <img :src="imgSrc" class="hidden-pokemon" alt="pokemon" />
    <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon" />
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

const { showPokemon, imgSrc } = usePokemons();
</script>

<style lang="css" scope>
/* Pokemon Picture */
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

img {
  height: 200px;
  position: absolute;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>

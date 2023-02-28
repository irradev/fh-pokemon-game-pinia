import { defineComponent } from 'vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import { usePokemons } from '../composables/usePokemons';

export default defineComponent({
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  setup: () => {

    const {
      pokemon,
      pokemonArr,
      showPokemon,
      showAnswer,
      message,

      checkAnswer,
      newGame,
      mixPokemonArray,
    } = usePokemons();

    mixPokemonArray();

    return {
      pokemon,
      pokemonArr,
      showPokemon,
      showAnswer,
      message,

      checkAnswer,
      newGame,
    };
  },
});

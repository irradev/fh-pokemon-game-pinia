import { ref, defineComponent } from 'vue';

import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonOptions from '../helpers/getPokemonOptions';
import { Pokemon } from '../interfaces/pokemon';

export default defineComponent({
  name: 'PokemonPage',
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  setup: () => {
    const pokemonArr = ref<Pokemon[]>([]);
    const pokemon = ref<Pokemon>();
    const showPokemon = ref<boolean>(false);
    const showAnswer = ref<boolean>(false);
    const message = ref<string>('');

    const mixPokemonArray = async () => {
      pokemonArr.value = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      pokemon.value = pokemonArr.value[randomInt];
    };

    const checkAnswer = (selectedId: number) => {
      if (!pokemon.value) return;

      if (selectedId === pokemon.value.id) {
        showPokemon.value = true;
        message.value = `Correcto, es ${pokemon.value.name}`;
      } else {
        message.value = `Oops... era ${pokemon.value.name}`;
      }
      showAnswer.value = true;
    };

    const newGame = () => {
      showPokemon.value = false;
      showAnswer.value = false;
      message.value = '';
      pokemon.value = undefined;
      mixPokemonArray();
    };

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

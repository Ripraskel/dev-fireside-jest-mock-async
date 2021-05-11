import { getPokemon } from './pokemonApi';
import { getRandomInt } from './util';

const getRandomPokemon = async () => {
    // There are a total of 898 pokemon - so max is 898
    const randomNumber = getRandomInt(898);

    const pokemon = await getPokemon(randomNumber)

    return pokemon;
}

export default getRandomPokemon;
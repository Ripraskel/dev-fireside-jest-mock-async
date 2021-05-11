import getRandomPokemon from './pokemon';

getRandomPokemon()
    .then((pokemon) => console.log({pokemon}))
    .catch((err) => console.log(err))
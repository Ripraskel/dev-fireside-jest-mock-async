import getRandomPokemon from '../src/pokemon';

jest.mock('../src/util');
import { getRandomInt } from '../src/util';

jest.mock('../src/pokemonApi')
import { getPokemon } from '../src/pokemonApi';

const dummyData = { 
    data: {
        id: 25,
        name: "pikachu",
        height: 4,
        weight: 60,
    }
};

const pikachu = {
    id: 25,
    name: "pikachu",
    height: "0.4 m",
    weight: "6 kg",
};

describe("Test getRandomPokemon()", () =>  {
    test("Check code works with Pokemon API as expected", async () => {

        getRandomInt.mockImplementation(() => pikachu.id);

        getPokemon.mockImplementation(() => {
            return pikachu;
        });

        const pokemon = await getRandomPokemon();
        
        expect.assertions(4);
        expect(getRandomInt).toBeCalledTimes(1);
        expect(getPokemon).toBeCalledTimes(1);
        expect(getPokemon).toBeCalledWith(pikachu.id);
        expect(pokemon).toEqual(pikachu);
    })
})
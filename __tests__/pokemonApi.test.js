import axios from 'axios';
import { getPokemon } from '../src/pokemonApi';

jest.mock('axios');

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

describe("Test getPokemon()", () =>  {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });

    test("Mock API call to return Pikachu", async () => {
        
        axios.get.mockImplementationOnce(() => Promise.resolve(dummyData));

        const pokemon = await getPokemon(dummyData.data.id);
        
        expect.assertions(2);
        expect(axios.get).toBeCalledTimes(1);
        expect(pokemon).toEqual(pikachu);
    });
})
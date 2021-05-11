import axios from 'axios';

/**
 * 
 * @param {*} pokemon - name or id
 * 
 * @returns Pokemon
 */
export const getPokemon = async (requestedPokemon) => {

    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${requestedPokemon}`);

    try {
        const pokemon = {
            id: data.id,
            name: data.name,
            height: `${data.height/10} m`,
            weight: `${data.weight/10} kg`,
        }
    
        return pokemon;
    } catch (err) {
        throw new Error(`Couldn't retrieve pokemon with id or name of ${requestedPokemon}`)
    }

};

import { pokemonDetails } from "../types/pokemonDetails";

export const removePokemon = (pokemon: pokemonDetails) => {
    return {
        type: 'REMOVE_POKEMON',
        payload: pokemon
    }
};

export const addPokemon = (pokemon: pokemonDetails) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
};
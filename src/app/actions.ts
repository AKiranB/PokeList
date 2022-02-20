
export const removePokemon = (pokemon: string) => {
    return {
        type: 'REMOVE_POKEMON',
        payload: pokemon
    }
};

export const addPokemon = (pokemon: string) => {
    return {
        type: 'ADD_POKEMON',
        payload: pokemon
    }
};
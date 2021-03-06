import favoritesState from "../types/favoritesState";
import { AnyAction } from "@reduxjs/toolkit";

const initialState: favoritesState = {
    pokemon: []
};

export const pokemonReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case "ADD_POKEMON":
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload]
            }
        case "REMOVE_POKEMON":
            return {
                pokemon: [
                    ...state.pokemon.filter((pokemon) => pokemon.name !== action.payload)
                ]
            }
        default:
            return {
                ...state
            }
    }
}
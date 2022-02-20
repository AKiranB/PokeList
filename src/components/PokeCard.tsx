
import { useEffect, useState, useCallback } from "react";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";
import { useDispatch } from "react-redux";
import FavouriteButton from "./FavouriteButton";
import { useAppSelector } from "../app/hooks";


const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {

    const [pokemonName, setPokemonName] = useState<string>();
    const [isFavorited, setIsFavorited] = useState<boolean>();
    const favoritedPokemon = useAppSelector((state: any) => state.pokemon.pokemon)
    // replace favorite button below by adding logic to favorite button component

    useEffect(() => {
        if (favoritedPokemon.includes(pokemonName)) {
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }
    }, [favoritedPokemon, isFavorited, pokemonName]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (name) {
            setPokemonName(`${name.slice(0, 1).toUpperCase()}${name.slice(1, name.length)}`)
        }
    }, [name]);

    console.log('pokecard')

    return (
        <>
            <div className="p-10 rounded m-10 bg-gradient-to-r from-cyan-500 to-blue-500">
                <a href={`/PokeList/${name}`}>
                    <p className="text-center">
                        {pokemonName}
                    </p>
                    <img className="w-40" src={image} alt='a pokemon'>
                    </img>
                </a>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => dispatch({ type: 'ADD_POKEMON', payload: pokemonName }))}>Favourite Pokemon</button>
                <FavouriteButton isFavorited={isFavorited} />
            </div>
        </>

    )

};


export default PokeCard
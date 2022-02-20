
import { useEffect, useState, useCallback } from "react";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";
import { useDispatch } from "react-redux";
import FavouriteButton from "./FavouriteButton";
import { useAppSelector } from "../app/hooks";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";


const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {

    const [pokemonName, setPokemonName] = useState<string>();
    const [isFavorited, setIsFavorited] = useState<boolean>();
    const favoritedPokemon = useAppSelector((state: any) => state.pokemon.pokemon)

    useEffect(() => {
        if (favoritedPokemon.includes(pokemonName)) {
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }
    }, [favoritedPokemon, isFavorited, pokemonName]);

    useEffect(() => {
        if (name) {
            setPokemonName(capitalizeFirstLetter(name))
        }
    }, [name]);


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

                <FavouriteButton pokemonName={pokemonName} isFavorited={isFavorited} />
            </div>
        </>

    )

};


export default PokeCard

import { useEffect, useState } from "react";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";
import { useAppSelector } from "../app/hooks";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import FavouriteButton from "./FavouriteButton";
import { Link } from "react-router-dom";

const PokeCard = ({ ...pokemon }: pokemonGeneralInfo) => {

    const [pokemonName, setPokemonName] = useState<string>();
    const [isFavorited, setIsFavorited] = useState<boolean>();
    const favoritedPokemon = useAppSelector((state: any) => state.pokemon.pokemon)

    const { name, image } = pokemon

    useEffect(() => {
        if (favoritedPokemon.some((pokemon: pokemonGeneralInfo) => pokemon['name'] === name)) {
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }
    }, [favoritedPokemon, isFavorited, name]);

    useEffect(() => {
        if (name) {
            setPokemonName(capitalizeFirstLetter(name))
        }
    }, [name]);

    return (
        <>
            <div className="p-10 rounded m-10 bg-gradient-to-r from-cyan-500 to-blue-500">
                <Link to={`/PokeList/${name}`}>
                    <p className="text-center">
                        {pokemonName}
                    </p>
                    <img className="w-40" src={image} alt='a pokemon'>
                    </img>
                </Link>

                <FavouriteButton isFavorited={isFavorited} pokemon={pokemon} />
            </div>
        </>

    )

};

export default PokeCard;
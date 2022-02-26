import { useEffect, useState } from "react";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";
import { useAppSelector } from "../app/hooks";
import FavouriteButton from "./FavouriteButton";
import { Link } from "react-router-dom";
import Heading from "./Heading";


const PokeCard = ({ ...pokemon }: pokemonGeneralInfo) => {

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

    return (
        <>
            <div className="p-10 w-65 flex items-center justify-center flex-col rounded m-16 bg-gradient-to-r from-cyan-500 to-blue-500">
                <Link to={`/PokeList/${name}`}>
                    <div className="text-center">
                        <Heading name={name} />
                    </div>
                    <img className="w-40" src={image} alt='a pokemon'>
                    </img>
                </Link>
                <FavouriteButton isFavorited={isFavorited} pokemon={pokemon} />
            </div>
        </>
    )
};

export default PokeCard;
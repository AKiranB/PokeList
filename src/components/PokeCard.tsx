
import { useEffect, useRef, useState } from "react";
import { pokemonGeneralInfo } from "../types/pokemonGeneral";

const PokeCard = ({ url, name, image }: pokemonGeneralInfo) => {

    const [pokemonName, setPokemonName] = useState<string>()

    useEffect(() => {
        if (name) {
            console.log('pokeCard name capitalize')
            setPokemonName(`${name.slice(0, 1).toUpperCase()}${name.slice(1, name.length)}`)
        }
    }, [name])

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
            </div>
        </>

    )

};


export default PokeCard
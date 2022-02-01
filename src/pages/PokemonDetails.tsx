import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET_POKEMON from '../operations/queries/getPokemonDetails';

type abilities = {
    ability: {
        name: string,
        url: string
    }
};

type pokemonDetails = {
    __typename: string,
    name: string,
    height: number
    weight: number
    sprites: {
        __typename: string,
        back_shiny: string,
        front_default: string,
        back_default: string,
        front_shiny: string

    }
    stats: object[]
    abilities: abilities[]

};

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState<pokemonDetails>();

    let params = useParams();
    let name = params.name;

    const { loading, data } = useQuery(GET_POKEMON, { variables: { name } });

    useEffect(() => {
        if (data) {
            setPokemon((() => data.pokemon))
        };

    }, [data]);

    let pokemonName;

    if (pokemon!.name) {
        pokemonName = `${pokemon!.name.slice(0, 1).toUpperCase()}${pokemon!.name.slice(1, pokemon!.name.length)}`
    };

    return (
        <div className="flex justify-center">
            <div className="p-10 rounded w-80 m-10 bg-gradient-to-r from-cyan-500 to-blue-500 border border-black">
                {loading && <p>loading</p>}
                {pokemon != null &&
                    <>
                        <div className='text-center '>
                            < h1 className='text-2xl mb-5'> {pokemonName}</h1 >
                        </div >
                        <div className="flex border">
                            <div className="flex-col">
                                <p>Height: {pokemon.height} Feet</p>
                                <p>Weight: {pokemon.weight} lbs</p>
                            </div>
                            <div>
                                <p>Abilities:<br></br>
                                    {pokemon.abilities[0].ability.name}, {pokemon.abilities[1] && pokemon.abilities[1].ability.name} </p>
                            </div>
                        </div>
                        <div className="flex justify-center w-64 flex-wrap">
                            <img className="w-32" alt="front sprite" src={pokemon.sprites.front_shiny}></img>
                            <img className="w-32" alt="front sprite" src={pokemon.sprites.front_default}></img>
                            <img className="w-32" alt="back sprite" src={pokemon.sprites.back_shiny}></img>
                            <img className="w-32" alt="back sprite" src={pokemon.sprites.back_default}></img>
                        </div>
                    </>
                }
            </div >
        </div >
    )
};

export default PokemonDetails;

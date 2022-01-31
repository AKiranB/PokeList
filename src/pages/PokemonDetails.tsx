import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET_POKEMON from '../operations/queries/getPokemonDetails';

type pokemonDetails = {
    __typename: String,
    name: String,
    height: Number
    sprites: {
        __typename: string,
        back_shiny: string,
        front_default: string
    },
    stats: Object[]
    abilities: Object[]
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


    return (
        <div>
            <h1>pokemon</h1>
            {loading && <p>loading</p>}
            {pokemon != null &&
                <>
                    <div className="p-10">
                        <h1>{pokemon.name}</h1>
                        <p>{pokemon.height}</p>
                        <img src={pokemon.sprites.back_shiny}></img>
                    </div>
                </>
            }
        </div>
    )
};

export default PokemonDetails;

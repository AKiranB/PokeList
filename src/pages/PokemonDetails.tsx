import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET_POKEMON from '../operations/queries/getPokemonDetails';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import { pokemonDetails } from '../types/pokemonDetails'

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState<pokemonDetails>();
    let pokemonName
    let params = useParams();
    let name = params.name;
    const { loading, data } = useQuery(GET_POKEMON, { variables: { name } });

    useEffect(() => {
        if (data) {
            let abilityDescriptions = { abilityOneDescription: '', abilityTwoDescription: '' }
            getDescription(data.pokemon.abilities[0].ability.url)
                .then(res => {
                    abilityDescriptions.abilityOneDescription = res.effect_entries[0].effect
                    setPokemon({ ...data.pokemon, ...abilityDescriptions })
                })
                .catch(error => {
                    console.log(error)
                });
        };
    }, [data]);

    const getDescription = async (url: string) => {
        const data = await fetch(url)
        return data.json()
    };

    if (pokemon) {
        console.log('pokemon if')
        pokemonName = capitalizeFirstLetter(pokemon.name);
    };

    return (
        <div className="flex justify-center">
            <div className="p-10 rounded w-80 m-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-yellow-500">
                {loading && <p>loading</p>}
                {pokemon &&
                    <>
                        <div className='text-center '>
                            <h1 className='text-2xl mb-5'> {pokemonName}</h1 >
                        </div>
                        <div className="flex  flex-col">
                            <div className="flex space-x-4">
                                <span className="text-l px-2 py-0.5 rounded font-bold bg-green-600 text-white ">
                                    <p>Height: {pokemon.height} Feet</p>
                                    <p>Weight: {pokemon.weight} Lbs</p>
                                </span>
                            </div>
                            <div>
                                <p>Abilities: {pokemon.abilityOneDescription} { }</p>
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

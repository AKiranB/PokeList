import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GET_POKEMON from '../operations/queries/getPokemonDetails';
import { abilities, pokemonDetails } from '../types/pokemonDetails'
import { useAppSelector } from "../app/hooks";
import Heading from '../components/Heading';
import getDescription from "../utils/getDescription";

const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState<pokemonDetails>();
    const [, setIsFavorited] = useState<boolean>();

    let params = useParams();
    let name = params.name;

    const { loading, data } = useQuery(GET_POKEMON, { variables: { name } });
    const favoritedPokemon = useAppSelector((state: any) => state.pokemon.pokemon);

    type abilityInformationType = {
        name: string,
        description: string
    };

    useEffect(() => {
        if (data) {
            let abilityInformation: abilityInformationType[] = []

            data.pokemon.abilities.forEach((pokemon: abilities, index: number) => {
                getDescription(pokemon.ability.url)
                    .then(res => {
                        abilityInformation.push({ name: res.name, description: res.effect_entries[1].effect })
                        setPokemon(() => ({ ...data.pokemon, abilityInformation }))
                    })
                    .catch(error => {
                        console.log(error)
                    });
            });
        };
    }, [data]);

    useEffect(() => {
        if (favoritedPokemon.includes(name)) {
            console.log(name)
            setIsFavorited(true)
        } else {
            setIsFavorited(false)
        }
    }, [favoritedPokemon, name]);

    return (
        <div className="p-10 rounded flex flex-col items-center m-16 w-auto m-10 bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-yellow-500">
            {loading && <p>loading</p>}
            {pokemon &&
                <>
                    <div className='text-center '>
                        <Heading name={pokemon.name} />
                    </div>

                    <div className="flex space-x-4 mb-10">
                        <span className="text-l px-2 py-0.5 rounded font-bold bg-green-600 text-white ">
                            <p>Height: {pokemon.height} Feet</p>
                        </span>
                        <span className="text-l px-2 py-0.5 rounded font-bold bg-green-600 text-white ">
                            <p>Weight: {pokemon.weight} Lbs</p>
                        </span>
                    </div>
                    Abilities
                    <div className="text-left">
                        <br>
                        </br>
                        {/* <div className="w-96">
                         
                        </div>
                        <div className="w-96">
                    
                        </div>
                        <div className="w-96">

                        </div> */}
                        {pokemon.abilityInformation.map((ability: abilityInformationType) => {
                            return (
                                <div className="w-96 mb-5">
                                    {ability.name}: {ability.description}
                                </div>
                            )

                        })}
                    </div>

                    <div className="flex justify-center mt-10 w-72 flex-wrap">
                        <img className="w-32" alt="front sprite" src={pokemon.sprites.front_shiny}></img>
                        <img className="w-32" alt="front sprite" src={pokemon.sprites.front_default}></img>
                        <img className="w-32" alt="back sprite" src={pokemon.sprites.back_shiny}></img>
                        <img className="w-32" alt="back sprite" src={pokemon.sprites.back_default}></img>

                    </div>


                    {/* todo, figure out how to pass the correct shaped object from th data belw into the button */}
                    {/* <FavouriteButton pokemon={pokemon} isFavorited={isFavorited} /> */}
                </>
            }
        </div >

    )
};

export default PokemonDetails;


import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GET_POKEMON = gql`
query pokemons($name:String!){
    pokemon(name:$name){
      sprites{
           front_default
        back_shiny
      }
      name
          height
      stats{
        stat{
          name
        }
      }
      abilities{
        ability{
          name
        }
      }
    }
  }`

type pokemonDetails = {
    name: string,
    height: number
}

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState<pokemonDetails>()
    let params = useParams();
    let name = params.name;
    const { loading, data } = useQuery(GET_POKEMON, { variables: { name } })

    useEffect(() => {
        setPokemon({ ...data })
    }, [data]);


    return (
        <p>hello</p>
    )

}
export default PokemonDetails;

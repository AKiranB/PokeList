import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';
import { useEffect, useState } from 'react';

function PokemonList() {
  const [limit, setLimit] = useState(10);
  const [pokemonList, setPokemonList] = useState();
  const { loading, data, refetch } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  return (
    <>
      <button onClick={(() => {
        //this needs to be checked out below
        setLimit(limit + 10)
        console.log(limit)

      })} >Load more</button>
      {loading && <p>loading</p>}
      <TiledContainer>
        {data != null && data.pokemons.results.map((pokemon: pokemonGeneralInfo, i: number) => {
          return <PokeCard
            key={i}
            {...pokemon}
          />
        }
        )}
      </TiledContainer>
    </>
  )

}

export default PokemonList;

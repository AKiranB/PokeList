import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';
import { useState } from 'react';

function PokemonList() {
  const [limit, setLimit] = useState(10);
  const { loading, data, refetch } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  return (
    <>
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
      <div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => {
          setLimit(limit + 10)
          refetch({ limit })
        })} >Load more</button>
      </div>
    </>
  )

}

export default PokemonList;

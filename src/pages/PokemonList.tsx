import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';
import { useEffect, useState } from 'react';
import search from '../utils/search';

function PokemonList({ searchString }: any) {

  const [limit, setLimit] = useState(12);
  const { loading, data, refetch } = useQuery(GET_ALL_POKEMON, { variables: { limit } });
  const [filteredPokemon, setFilteredPokemon] = useState<pokemonGeneralInfo[] | undefined>();

  useEffect(() => {

    if (data) {
      let filtered = search(data.pokemons.results, searchString);
      setFilteredPokemon(filtered);

    };
  }, [data, searchString])

  return (
    <>
      {loading && <p>loading</p>}
      <TiledContainer>
        {filteredPokemon != null && filteredPokemon.map((pokemon: pokemonGeneralInfo, i: number) => {
          return <PokeCard
            key={i}
            {...pokemon}
          />
        }
        )}
      </TiledContainer>
      <div>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={(() => {
          setLimit(limit + 8)
          refetch({ limit })
        })} >Load more</button>
      </div>
    </>
  )

}

export default PokemonList;

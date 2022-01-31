import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';

function PokemonList({ props }: any) {

  const limit = 100
  const { loading, error, data } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  return (
    <>
      {loading && <p>loading</p>}
      <div className='flex flex-wrap rounded'>
        {data != null && data.pokemons.results.map((pokemon: pokemonGeneralInfo, i: number) => (
          <PokeCard
            {...props}
            {...pokemon}
          />
        )
        )}
      </div>

    </>
  )

}

export default PokemonList;

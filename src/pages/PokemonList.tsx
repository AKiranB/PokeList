import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';

function PokemonList({ props }: any) {

  const limit = 100
  const { loading, data } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  return (
    <>
      {loading && <p>loading</p>}
      <TiledContainer>
        {data != null && data.pokemons.results.map((pokemon: pokemonGeneralInfo, i: number) => (
          <PokeCard
            key={i}
            {...pokemon}
          />
        )
        )}
      </TiledContainer>
    </>
  )

}

export default PokemonList;

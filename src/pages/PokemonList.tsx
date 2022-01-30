import { gql, useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';

const GET_ALL_POKEMON = gql`
query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    results {
      url
      name
      image
    }
  }
}`

function PokemonList() {

  const limit = 100
  const { loading, error, data } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  return (
    <>
      {loading && <p>loading</p>}

      {data != null && data.pokemons.results.map((pokemon: pokemonGeneralInfo, i: number) => (
        <>
          <PokeCard
            {...pokemon}
          />

        </>
      )
      )}

    </>
  )

}

export default PokemonList;

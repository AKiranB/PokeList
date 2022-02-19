import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';




function PokemonList({ props }: any) {
  let limit = 50
  const { loading, data, refetch } = useQuery(GET_ALL_POKEMON, { variables: { limit } });


  return (
    <>

      <button onClick={(() => {
        //this needs to be checked out below
        console.log(limit)
        limit += 100
        refetch({ limit })
      })} >Load more</button>
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

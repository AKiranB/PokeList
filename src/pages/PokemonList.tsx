import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../app/hooks';



function PokemonList({ props }: any) {
  let limit = 5
  const { loading, data, refetch } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  console.log('pokelist')
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

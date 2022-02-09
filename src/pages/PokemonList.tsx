import { useQuery } from '@apollo/client';
import PokeCard from '../components/PokeCard';
import { pokemonGeneralInfo } from '../types/pokemonGeneral';
import GET_ALL_POKEMON from '../operations/queries/getAllPokemon';
import TiledContainer from '../components/layout/TiledContainer';
import { useAppSelector } from "../app/hooks";
import { store } from '..';
import { addPokemon } from '../app/actions';


function PokemonList({ props }: any) {
  const limit = 50
  const { loading, data } = useQuery(GET_ALL_POKEMON, { variables: { limit } });
  const pokemon = useAppSelector((state: any) => state.pokemon)

  return (
    <>
      <button ></button>
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

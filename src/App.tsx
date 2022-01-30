import { useEffect, useState } from 'react';
import './App.css';
import { gql, useQuery } from '@apollo/client';


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

function App() {

  const limit = 100
  const { loading, error, data } = useQuery(GET_ALL_POKEMON, { variables: { limit } });

  type pokemonGeneralInfo = {
    url: string
    name: string
    image: string
  }

  return (
    <>
      {loading && <p>loading</p>}
      <div>
        {data != null && data.pokemons.results.map((pokemon: pokemonGeneralInfo, i: number) => (
          <div key={i}>
            <p>
              {pokemon.name.toUpperCase()}
            </p>
            <img src={pokemon.image} alt='a pokemon'>
            </img>
          </div>
        )
        )}
      </div>
    </>
  )

}

export default App;

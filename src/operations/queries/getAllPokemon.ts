import { gql } from "@apollo/client"

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

export default GET_ALL_POKEMON
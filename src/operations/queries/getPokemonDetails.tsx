import { gql } from "@apollo/client"

const GET_POKEMON = gql`
query pokemons($name:String!){
    pokemon(name:$name){
      sprites{
        front_default
        back_shiny
        back_default
        front_shiny
      }
      name
      height
      weight
      stats{
        stat{
          name
        }
      }
      abilities{
        ability{
          name
        }
      }
    }
  }`

export default GET_POKEMON;
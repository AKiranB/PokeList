
import { gql, useQuery } from '@apollo/client';
import PokeCard from './components/PokeCard';
import { pokemonGeneralInfo } from './types/pokemonGeneral';
import PokemonDetails from './pages/PokemonDetails'
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App(props: any) {


  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList {...props} />}></Route>
          <Route path="/:name" element={<PokemonDetails {...props} />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )

}

export default App;

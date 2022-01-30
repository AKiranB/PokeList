
import { gql, useQuery } from '@apollo/client';
import PokeCard from './components/PokeCard';
import { pokemonGeneralInfo } from './types/pokemonGeneral';
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {


  return (


    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )

}

export default App;

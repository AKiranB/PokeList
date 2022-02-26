
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from './components/layout/Main';
import Nav from './components/Nav';
import FavouritesList from './pages/FavouritesList';
import { useState } from 'react';
const App = () => {

  const [searchString, setSearchString] = useState<string>('')

  return (
    <>
      <BrowserRouter>
        <Nav searchString={searchString} setSearchString={setSearchString} />
        <Main>
          <Routes>
            <Route path="/" element={<PokemonList searchString={searchString} />} />
            <Route path="/PokeList/:name" element={<PokemonDetails />} />
            <Route path='/favourites' element={<FavouritesList />}></Route>
          </Routes>
        </Main>
      </BrowserRouter>

    </>

  )
};

export default App;

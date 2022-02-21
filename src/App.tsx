
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from './components/layout/Main';

const App = () => {
  return (

    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/PokeList/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </Main>

  )
};

export default App;

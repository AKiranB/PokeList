
import PokemonDetails from './pages/PokemonDetails';
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/PokeList/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
};

export default App;


import PokemonDetails from './pages/PokemonDetails'
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Root from './pages/Root';

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/pokemon" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  )

}

export default App;

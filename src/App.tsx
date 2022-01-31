
import PokemonDetails from './pages/PokemonDetails'
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />}></Route>
            <Route path="/:name" element={<PokemonDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>

  )

}

export default App;

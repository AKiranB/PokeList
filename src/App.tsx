
import PokemonDetails from './pages/PokemonDetails'
import PokemonList from './pages/PokemonList';
import {
  BrowserRouter,
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

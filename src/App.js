import './App.css';
import {PokemonProvider} from "./context/pokemons/Provider"; 
import {Routes} from "./routes/index"

function App() {
  return (
    
    <div className="App">
      <PokemonProvider>
        <Routes></Routes>
      </PokemonProvider>
    </div>
  );
}

export default App;

import { PokeProvider } from './context/pokecontext';
import SearchBar from './components/SearchBar'
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <PokeProvider>
      <div className="ui container center aligned">
        <div className="ui segment ">Welcome to the PokeDex 2.0
          <div className="ui divider"></div>
          <SearchBar />
          <div className="ui divider"></div>
          <PokemonCard />
        </div>
      </div>
    </PokeProvider>
  );
}

export default App;

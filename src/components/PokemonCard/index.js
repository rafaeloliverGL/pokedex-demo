import { useContext }  from 'react';
import { PokeContext } from '../../context/pokecontext';

import Loader from '../common/Loader';

function PokemonCard() {
  const { pokemon } = useContext(PokeContext);
  if (!pokemon) {
    return (<Loader />)
  }
  const pokeImage = pokemon.sprites.front_default;
  return (
    <div className="ui centered card">
        <div className="image">
          <img alt="pokemon image" src={pokeImage} />
        </div>
        <div className="content">
          <a className="header">{pokemon.name}</a>
          <div className="meta">
            <span className="date">Number on PokeDex: {pokemon.id}</span>
          </div>
        </div>
    </div>
 );
}

export default PokemonCard;

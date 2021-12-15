import React, { useState, useContext, useEffect }  from 'react';

import { PokeContext } from '../../context/pokecontext';
import fetchPokemon from '../../api/fetchPokemon';


function SearchBar() {

  const [ pokemonName, setPokemonName ] = useState('Pikachu');
  const { setPokemon } = useContext(PokeContext);

  const  choosePokemon = async () => {
    const pokemonChosen = await fetchPokemon(pokemonName.toLowerCase());
    setPokemon(pokemonChosen);
  }

  useEffect(() => {
    choosePokemon()
  }, []);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      choosePokemon()
    }
  }

  const onChange = (e) => {
    setPokemonName(e.target.value)
  }

  return (
    <div className="ui category search">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder="Search for a pokemon" onKeyDown={onKeyDown} onChange={onChange} />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
  </div>
 );
}

export default SearchBar;

import React from 'react'

import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard';

const HomePage = () => {
  return (<div className="ui segment ">Welcome to the PokeDex 2.0
    <div className="ui divider"></div>
    <SearchBar />
    <div className="ui divider"></div>
    <PokemonCard />
  </div>)
}

export default HomePage

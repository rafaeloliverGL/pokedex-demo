import React, { useContext } from 'react'

import { LanguageContext } from '../context/languageContext'
import stringsModule from '../helpers/strings';

import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/PokemonCard';

const HomePage = () => {
  const languageCode = useContext(LanguageContext);

  return (
    <div className="ui segment ">
      <h1 id="welcome-title">
        {stringsModule.getStringByLanguage(languageCode, 'welcome')}
      </h1>
      <div className="ui divider"></div>
      <SearchBar />
      <div className="ui divider"></div>
      <PokemonCard data-test="" />
    </div>
  )
}

export default HomePage

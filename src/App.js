import React, { useReducer } from 'react'
import { PokeProvider } from './context/pokecontext';
import { LanguageProvider } from './context/languageContext';
import HomePage from './components/Home'
import LanguagePicker from './components/LanguagePicker/LanguagePicker';

function reducer(state, action) {
  switch(action.type) {
    case "setLanguage":
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    { language: 'en' }
  )

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

  return (
    <LanguageProvider value={state.language}>
      <PokeProvider>
        <div className="ui container center aligned">
          <LanguagePicker setLanguage={setLanguage} />
          <HomePage />
        </div>
      </PokeProvider>
    </LanguageProvider>
  );
}

export default App;

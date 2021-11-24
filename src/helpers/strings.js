const languageTranslations = {
  en: {
    welcome: 'Welcome to PokeDex version 2.0',
    pokemonNumber: 'Number on PokeDex:'
  },
  esp: {
    welcome: 'Bienvenido a la PokeDex versión 2.0',
    pokemonNumber: 'Número en la PokeDex:'
  }
}

const getStringByLanguage = (code, string, strings=languageTranslations) => {
  if (!strings[code] || !strings[code][string]) {
    console.warn(`Could not get string [${code}] for key [${string}]`)
    return strings.en[string]
  }

  return strings[code][string]
};

export default { getStringByLanguage, }
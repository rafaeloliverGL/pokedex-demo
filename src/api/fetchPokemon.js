const fetchPokemon =  async (pokemon) => {
  const pokemonName = pokemon !== '' ? pokemon : 'pikachu';
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await res.json();
  return data;
}

export default fetchPokemon;
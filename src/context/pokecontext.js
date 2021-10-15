import React, { createContext, useState } from "react";

export const PokeContext = createContext();
export const PokeProvider = ({children}) => {

  const [ pokemon, setPokemon ] = useState();

  return (
    <PokeContext.Provider value={{ pokemon, setPokemon }}>
      { children }
    </ PokeContext.Provider>
  )
}
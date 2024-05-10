"use client"

import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    setSearch: (value: string) => {},
    pokemon: [],
    setPokemon: (value: []) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState([]);

    return(
        <FilterContext.Provider 
            value={{
                search,
                setSearch,
                pokemon,
                setPokemon
            }}>
            {children}
        </FilterContext.Provider>
    )
}
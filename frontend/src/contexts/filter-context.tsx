"use client"

import { IFilterContextProvides } from "@/types/filter-context";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export const FilterContext = createContext<IFilterContextProvides | undefined>(undefined);

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({abilities: [ { name: '', url: ''}]});

    const API_URL = process.env.API_URL || 'http://localhost:4000/api/pokemons/';

    async function fetchData () {
        try {
            if (search.trim() === "") {
                return;
            }
            const response = await axios.get(`${API_URL}${search}`);
            setPokemon(response.data.reponse);
        } catch (error) {
            console.error(error, { action: fetchData })
        }
    }

    useEffect(() => {
        fetchData();
    }, [search]);

    const provider = {
        search,
        setSearch,
        pokemon,
        setPokemon,
        fetchData
    }

    return(
        <FilterContext.Provider 
            value={provider}>
            {children}
        </FilterContext.Provider>
    )
}
"use client"

import { ApiEnvs } from "@/envs/api-env";
import { IFilterContextProvides } from "@/types/filter-context";
import { IPokemon } from "@/types/pokemon-response";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

export const FilterContext = createContext<IFilterContextProvides | undefined>(undefined);

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState<IPokemon | undefined>(undefined);

    function fetchData () {
        try {
            if (search.trim() === "") {
                return;
            }
            (async() => {
                await axios.get(`${ApiEnvs.API_URL}${search}`).then((data) => {
                    setPokemon(data.data.reponse);
                });
            })()
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
"use client";

import { ApiEnvs } from "@/envs/api-env";
import { IFilterContextProvides } from "@/types/filter-context";
import { IPokemon } from "@/types/pokemon-response";
import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const FilterContext = createContext<IFilterContextProvides | undefined>(
  undefined
);

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState<IPokemon | undefined>(undefined);

  function fetchData() {
    try {
      if (search.trim() === "") {
        return;
      }
      (async () => {
        await axios
          .get(`${ApiEnvs.API_URL}${search}`)
          .then((res) => {
            if (res.status === 200) {
              setPokemon(res.data.reponse);
              toast.success("Habilidades encontradas! :)", { autoClose: 2000 });
            }
          })
          .catch((err) => {
            if (err.response.status > 200) {
              toast.error("Nada encontrado! :(", { autoClose: 2000 });
            }
            console.error(err.response.statusText, { action: "fetchData" });
          });
      })();
    } catch (error) {
      console.error(error, { action: "fetchData" });
    }
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  const provider = {
    search,
    setSearch,
    pokemon,
    setPokemon
  };

  return (
    <FilterContext.Provider value={provider}>{children}</FilterContext.Provider>
  );
}

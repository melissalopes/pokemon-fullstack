import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { PokemonResponse } from "@/types/pokemon-response";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (pokemonName: string): AxiosPromise<PokemonResponse> => {
  const url = 'http://localhost:4000/api/pokemons/' + `/${pokemonName}`
  return axios.get(url)
}

export function usePokemon(){
  const { search } = useFilter();

  const { data } = useQuery({
    queryFn: () => fetcher(search),
    queryKey: ['pokemon', search]
  })

  const pokemon =  data?.data.response;
  
  return { data: pokemon };
}
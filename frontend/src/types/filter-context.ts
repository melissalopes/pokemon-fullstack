import { IPokemon } from "./pokemon-response";

export interface IFilterContextProvides {
  search: string | undefined,
  setSearch: React.Dispatch<React.SetStateAction<string>>,

  pokemon: IPokemon | undefined,
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>,

  fetchData: (param?: any, param2?: any) => Promise<void> | undefined;
}
import { IPokemon } from "./pokemon-response";

export interface IFilterContextProvides {
  search: string | undefined,
  setSearch: React.Dispatch<React.SetStateAction<string>>,

  pokemon: IPokemon | undefined,
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon | undefined>>,

  fetchData: (param?: any, param2?: any) => void | undefined;
}
interface IAbilities {
  name: string;
  url: string;
}

export interface IPokemon {
  abilities: Array<IAbilities>;
}

export interface IPokemonResponse {
  response: IPokemon
}

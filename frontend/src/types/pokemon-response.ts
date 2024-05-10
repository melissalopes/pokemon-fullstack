interface Abilities {
  name: string;
  url: string;
}

export interface PokemonResponse {
  response: {
    abilities: Array<Abilities>;
  }
}

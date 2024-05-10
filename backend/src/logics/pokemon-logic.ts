import { logger } from '../utils/logger-util';
import { PokemonLogicDTO } from './dtos/pokemon-logic-dto';
import { PokeService } from '../services/poke-service';

export interface IPokemonLogic {
    get: (pokemonName: string) => Promise<PokemonLogicDTO>;
}

export class PokemonLogic implements IPokemonLogic {
    private pokeService: PokeService;

    constructor() {
        this.pokeService = new PokeService();
    }

    async get(pokemonName: string): Promise<PokemonLogicDTO> {
        try {
            logger.info('Calling PokemonLogic.get');

            const data = await this.pokeService.getPokemonByName(pokemonName);

            const abilities = data.data.abilities;
            abilities.sort((a: any, b: any) =>
                a.ability.name.localeCompare(b.ability.name)
            );

            return { abilities: abilities.map(({ ability }) => ability) };
        } catch (error) {
            logger.error('Error in PokemonLogic.get', error);
            throw error;
        }
    }
}

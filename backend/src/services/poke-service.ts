import axios from 'axios';
import { logger } from '../utils/logger-util';
import { NotFound } from '../utils/response-util';
import { StatusCodes } from 'http-status-codes';

export interface IPokeService {
    getPokemonByName: (pokemonName: string) => Promise<any>;
}

export class PokeService implements IPokeService {
    async getPokemonByName(pokemonName: string): Promise<any> {
        try {
            logger.info('Calling PokeService.getPokemonByName');

            const response = await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .catch((error) => {
                    if (error.response.status === StatusCodes.NOT_FOUND) {
                        throw new NotFound(
                            'Resource not found. Please enter a valid name'
                        );
                    }
                });

            return response;
        } catch (error) {
            logger.error('Error in PokeService.getPokemonByName', error);
            throw error;
        }
    }
}

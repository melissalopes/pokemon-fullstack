import { PokemonLogic } from '../../../src/logics/pokemon-logic';
import { PokeService } from '../../../src/services/poke-service';

describe('Pokemon Logic Tests', () => {
    let logic;

    beforeEach(() => {
        jest.clearAllMocks();
        logic = new PokemonLogic();
    });

    it('Should return the correct success response', async () => {
        const res = await logic.get('ditto');

        const data = [
            { name: 'imposter', url: 'https://pokeapi.co/api/v2/ability/150/' },
            { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
        ];

        PokeService.prototype.getPokemonByName = jest
            .fn()
            .mockImplementation(() => data);

        expect(res['abilities']).toEqual(data);
    });

    it('Should return the correct error response', async () => {
        const res = await logic.get('aegislash');

        PokeService.prototype.getPokemonByName = jest
            .fn()
            .mockImplementation(() => {
                throw new Error();
            });

        expect(res).toEqual('Resource not found. Please enter a valid name');
    });
});

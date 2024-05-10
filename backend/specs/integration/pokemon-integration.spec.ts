import * as supertest from 'supertest';
import app from '../../src/routes/app';
import { StatusCodes } from 'http-status-codes';

const initServer = supertest(app);

describe('Pokemon Integration Tests', () => {
    const mockRes = {
        abilities: [
            {
                name: 'imposter',
                url: 'https://pokeapi.co/api/v2/ability/150/',
            },
            {
                name: 'limber',
                url: 'https://pokeapi.co/api/v2/ability/7/',
            },
        ],
    };

    it('GET /pokemons/:pokemonName', async () => {
        const response = await initServer.get(`/api/pokemons/ditto`);

        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body['response']).toEqual(mockRes);
    });

    it('GET /pokemons/:pokemonName - Pokemon Not found', async () => {
        const response = await initServer.get(`/api/pokemons/aegislash`);

        expect(response.statusCode).toEqual(StatusCodes.NOT_FOUND);
        expect(response.body['message']).toEqual(
            'Resource not found. Please enter a valid name'
        );
    });
});

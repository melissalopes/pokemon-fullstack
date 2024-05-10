import { StatusCodes } from 'http-status-codes';
import { PokemonController } from '../../../src/controllers/pokemon-controller';

jest.mock('../../../src/utils/validate-util');
jest.mock('../../../src/logics/pokemon-logic');

describe('Pokemon Controller Tests', () => {
    let mockResponse;
    let mockRequest;
    let controller;

    beforeEach(() => {
        mockRequest = (body: any, params: any) => {
            return {
                body,
                params,
            };
        };

        mockResponse = () => {
            const res = { statusCode: 0, status: null, json: null };
            res.status = jest.fn().mockImplementationOnce((status: number) => {
                res.statusCode = status;
                return res;
            });
            res.json = jest.fn().mockImplementationOnce((response) => {
                res.json = response;
                return res;
            });
            return res;
        };
        controller = new PokemonController();
    });

    it('Should return the correct response and status code if "PokemonName" is passed', async () => {
        const req = mockRequest({}, { pokemonName: 'ditto' });
        const res = mockResponse();
        await controller.get(req, res);

        expect(res.json).toEqual({ response: undefined });
        expect(res.statusCode).toEqual(StatusCodes.OK);
    });

    it('Should return the correct error if "PokemonName" is not passed', async () => {
        const req = mockRequest();
        const res = mockResponse();
        await controller.get(req, res);

        expect(res.json['message']).toEqual(
            "Cannot read properties of undefined (reading 'pokemonName')"
        );
        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    });
});

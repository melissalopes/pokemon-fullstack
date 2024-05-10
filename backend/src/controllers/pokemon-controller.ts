import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PokemonLogic } from '../logics/pokemon-logic';
import { PokemonSchema } from '../validators/pokemon-schema';
import { ValidationUtils } from '../utils/validate-util';
import { logger } from '../utils/logger-util';

export interface IPokemonController {
    get: (req: Request, res: Response) => Promise<void>;
}

export class PokemonController implements IPokemonController {
    public async get(req: Request, res: Response): Promise<void> {
        const data = req.params;
        try {
            logger.info(
                `Calling PokemonController.get ${JSON.stringify(data)}`
            );

            ValidationUtils.validate(PokemonSchema.GET, data);

            const logic = new PokemonLogic();
            const response = await logic.get(data.pokemonName);

            logger.info(`Abilities found: ${JSON.stringify(response)}`);

            res.status(StatusCodes.OK).json({ response });
        } catch (error) {
            logger.error('Error in PokemonController.get', error);

            res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
}

import * as app from 'express';
import { PokemonController } from '../controllers/pokemon-controller';

const pokemonRouter = app.Router();

const controller = new PokemonController();

pokemonRouter.get(
    '/pokemons/:pokemonName',
    async (req, res) => await controller.get(req, res)
);

export default pokemonRouter;

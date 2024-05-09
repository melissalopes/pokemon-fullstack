import * as Joi from 'joi';

const GetPokemonSchema = Joi.object({
    pokemonName: Joi.string().required(),
}).required();

export const PokemonSchema = {
    GET: GetPokemonSchema,
};

import * as dotenv from 'dotenv';
dotenv.config();

export class ApiEnvs {
  static readonly API_URL = process.env.API_URL || 'http://localhost:4000/api/pokemons/';;
}

import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
const app = express();
import * as cors from 'cors';
import { DatabaseConfig } from '../config/database';
import pokemonRouter from './pokemon-router';

(() => {
    app.use(express.json());

    app.use(
        cors({
            origin: 'http://localhost:4000',
            credentials: true,
            optionSuccessStatus: 200,
        })
    );

    const dataBaseConfig = new DatabaseConfig();
    dataBaseConfig.connect();

    app.use('/api', pokemonRouter)
})();

export default app;

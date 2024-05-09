import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
const app = express();
import cors from 'cors';
import { DatabaseConfig } from '../config/database';

(() => {
  app.use(express.json());

  app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        optionSuccessStatus: 200,
    })
);

  const dataBaseConfig = new DatabaseConfig();
  dataBaseConfig.connect();
})()

export default app;

import app from './routes/app';
import { ServerEnvs } from './config/envs';
import { logger } from './utils/logger-util';

(() => {
    app.listen(ServerEnvs.PORT, () =>
        logger.info(`Server online on port: ${ServerEnvs.PORT}`)
    );
})();

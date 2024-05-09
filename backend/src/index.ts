
import app from './routes/app';
import { ServerEnvs } from './config/envs';

(() => {
  app.listen(ServerEnvs.PORT, () => console.log('Server online'))
})();
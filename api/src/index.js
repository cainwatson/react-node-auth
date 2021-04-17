import server from './server.js';
import config from './config.js';

const boot = async () => {
  try {
    await server.listen(config.PORT);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

boot();

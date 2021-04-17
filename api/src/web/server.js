import fastify from 'fastify';
import config from './config.js';
import addRoutes from './routes.js';

const server = fastify({
  logger: {
    prettyPrint: config.IS_DEVELOPMENT,
  },
});

addRoutes(server);

export default server;

import fastify from 'fastify';
import config from './config.js';
import registerMiddleware from './middleware.js';
import registerRoutes from './routes.js';

const server = fastify({
  logger: {
    prettyPrint: config.IS_DEVELOPMENT,
  },
});

registerMiddleware(server);
registerRoutes(server);

export default server;

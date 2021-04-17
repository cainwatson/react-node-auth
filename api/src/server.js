import fastify from 'fastify';
import config from './config.js';

const server = fastify({
  logger: {
    prettyPrint: config.IS_DEVELOPMENT,
  },
});

server.get('/ping', async (request, reply) => {
  return 'pong';
});

export default server;

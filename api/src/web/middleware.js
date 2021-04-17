import cors from 'fastify-cors';

/**
 * @param {import('fastify').FastifyInstance} server
 */
export default function registerMiddleware(server) {
  server.register(cors, {});
}

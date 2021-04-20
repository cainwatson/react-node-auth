/**
 * @param {import('fastify').FastifyInstance} server
 */
export default function registerPingRoutes(server) {
  server.get('/ping', async (request, reply) => {
    return 'pong!';
  });
}

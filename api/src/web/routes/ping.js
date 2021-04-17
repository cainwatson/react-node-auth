/**
 * @param {import('fastify').FastifyInstance} server
 */
export default function addPingRoutes(server) {
  server.get('/ping', async (request, reply) => {
    return 'pong';
  });
}

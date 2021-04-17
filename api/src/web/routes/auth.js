import accounts from '../../lib/accounts.js';

/**
 * @param {import('fastify').FastifyInstance} server
 */
export default function addAuthRoutes(server) {
  server.post('/auth/signup', async (request, reply) => {
    const { username, password } = request.body;
    const user = await accounts.signUp({ username, password });

    return user;
  });

  server.post('/auth/signin', async (request, reply) => {
    const { username, password } = request.body;
    const user = await accounts.signIn({ username, password });

    return user;
  });
}

import auth from '../../lib/auth.js';

export default function addAuthRoutes(server) {
  server.get('/auth/signup', async (request, reply) => {
    return auth.signUp();
  });

  server.get('/auth/signin', async (request, reply) => {
    return auth.signIn();
  });
}

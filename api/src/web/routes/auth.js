export default function addAuthRoutes(server) {
  server.get('/auth/signup', async (request, reply) => {
    return 'this is signup!';
  });
}

export default function addPingRoutes(server) {
  server.get('/ping', async (request, reply) => {
    return 'pong';
  });
}

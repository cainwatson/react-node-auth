import registerPingRoutes from './routes/ping.js';
import registerAuthRoutes from './routes/auth.js';

export default function registerRoutes(server) {
  server.register(
    async (server, opts) => {
      registerPingRoutes(server);
      registerAuthRoutes(server);
    },
    { prefix: '/api' }
  );
}

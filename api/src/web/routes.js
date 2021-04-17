import registerPingRoutes from './routes/ping.js';
import registerAuthRoutes from './routes/auth.js';

export default function registerRoutes(server) {
  registerPingRoutes(server);
  registerAuthRoutes(server);
}

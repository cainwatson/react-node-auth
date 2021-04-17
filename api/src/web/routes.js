import addPingRoutes from './routes/ping.js';
import addAuthRoutes from './routes/auth.js';

export default function addRoutes(server) {
  addPingRoutes(server);
  addAuthRoutes(server);
}

import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function SignIn() {
  const { isAuthenticated, error, login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      history.replace(location.state?.from ?? '/dashboard');
    }
  }, [history, location, isAuthenticated]);

  const handleLogin = () => login(username, password);

  return (
    <section>
      <h1>Sign In</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          onKeyUp={(event) => event.key === 'Enter' && handleLogin()}
        />
      </div>
      <button onClick={handleLogin}>Sign In</button>
      {error && <p>{error.message}</p>}
    </section>
  );
}

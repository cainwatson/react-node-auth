import { useEffect, useState } from 'react';
import { AuthContext } from '../auth';
import { authCache } from './cache';
import * as api from '../../config/clients/api/login';

export const AuthStatus = {
  PENDING: 'PENDING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  LOGIN_REQUIRED: 'LOGIN_REQUIRED',
};

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    status: AuthStatus.PENDING,
    error: null,
    user: null,
  });

  const login = (username, password) => {
    return api
      .login(username, password)
      .then((user) => {
        authCache.save({ username, password });
        setState({ status: AuthStatus.SUCCESS, error: null, user });
      })
      .catch((error) =>
        setState({ status: AuthStatus.ERROR, error: error, user: null })
      );
  };

  const logout = () => {
    authCache.clear();
    setState({ status: AuthStatus.LOGIN_REQUIRED, error: null, user: null });
  };

  const context = { ...state, login, logout };

  useEffect(() => {
    const cachedCredentials = authCache.load();

    if (cachedCredentials) {
      const { username, password } = cachedCredentials;
      login(username, password);
    } else {
      setState({
        status: AuthStatus.LOGIN_REQUIRED,
        error: null,
        user: null,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={context}>
      {state.status === AuthStatus.PENDING ? 'Loading...' : children}
    </AuthContext.Provider>
  );
}

import { useContext } from 'react';
import { AuthContext, AuthStatus } from '../context/auth';

export function useAuth() {
  const state = useContext(AuthContext);
  const isPending = state.status === AuthStatus.PENDING;
  const isError = state.status === AuthStatus.ERROR;
  const isSuccess = state.status === AuthStatus.SUCCESS;
  const isAuthenticated = state.user && isSuccess;

  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}

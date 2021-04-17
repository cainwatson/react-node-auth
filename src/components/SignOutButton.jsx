import React from 'react';
import { useAuth } from '../hooks/useAuth';

export default function SignOutButton() {
  const { logout } = useAuth();

  return <button onClick={logout}>Sign Out</button>;
}

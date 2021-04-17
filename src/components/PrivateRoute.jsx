import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
  const render = (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    }
    return (
      <Redirect
        to={{
          pathname: `/signin`,
          state: { from: props.location },
        }}
      />
    );
  };

  return <Route {...rest} render={render} />;
}

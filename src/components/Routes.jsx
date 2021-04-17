import { Route } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Dashboard from '../screens/Dashboard';

export default function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </>
  );
}

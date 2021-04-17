import { Route } from 'react-router';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Dashboard from '../screens/Dashboard';

export default function Routes() {
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </>
  );
}

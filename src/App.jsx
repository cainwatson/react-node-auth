import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

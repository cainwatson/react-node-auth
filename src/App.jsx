import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

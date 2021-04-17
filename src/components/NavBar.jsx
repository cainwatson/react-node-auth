import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import SignOutButton from './SignOutButton';

export default function NavBar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {isAuthenticated && (
          <li>
            <SignOutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

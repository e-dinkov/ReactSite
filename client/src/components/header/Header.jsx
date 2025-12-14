
import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export function Header() {
  const { isAuthenticated, logoutHandler, user } = useUserContext();

  return (
    <header className="header">
      <h1 className="logo">⌚ WatchHub</h1>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <>
            <span className="welcome">Welcome, {user.email}</span>
            <button onClick={logoutHandler}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

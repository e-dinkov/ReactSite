import { Link } from "react-router";
import { useUserContext } from "../../contexts/UserContext";

export function Header() {
  const { isAuthenticated, logoutHandler, user } = useUserContext();

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="logo">⌚ WatchHub</h1>
      </Link>

      <nav>
        {isAuthenticated ? (
          <>
            <div className="welcome-badge">
              <svg
                className="welcome-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="welcome-text">Welcome, {user.email}</span>
              <span className="welcome-pulse"></span>
            </div>
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

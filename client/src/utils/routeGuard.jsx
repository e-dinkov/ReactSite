import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../contexts/UserContext";

/* Logged-in users ONLY */
export function AuthGuard() {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

/* Guests ONLY (not logged in) */
export function GuestGuard() {
  const { user } = useUserContext();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

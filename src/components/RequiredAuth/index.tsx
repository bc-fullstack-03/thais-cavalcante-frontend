import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface RequiredAuthProps {
  children: ReactNode;
}

function RequiredAuth({ children }: RequiredAuthProps) {
  const location = useLocation();
  const loggedInUser = localStorage.getItem("user");

  if (!loggedInUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}

export default RequiredAuth;

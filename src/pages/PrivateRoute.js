import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


//The outlet property replaces the children from Route v5. It is all the pages that is wrapped by the PrivateRoute in the App component, in this case it is only the dashboard.

const PrivateRoute = () => {
  const isUser = false;
  // const { isAuthenticated } = useAuth0();
  return isUser ? <Outlet /> : <Navigate to='/login' />;
};
export default PrivateRoute;

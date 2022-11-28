import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const isUser = true;
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Navigate to="/login" />;
      }}
    ></Route>
  );
};
export default PrivateRoute;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//Import Pages
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            exact={true}
            path="/"
            element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

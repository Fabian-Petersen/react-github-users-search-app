import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//Import Pages
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard></Dashboard>} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

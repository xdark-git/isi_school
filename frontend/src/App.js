import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/connexion/Login/Login";
import Dashboard from "./components/Dashbord";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

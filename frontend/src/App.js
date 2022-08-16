import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/connexion/Login/Login";
import Dashboard from "./components/Dashbord";
import Missing from "./components/Missing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

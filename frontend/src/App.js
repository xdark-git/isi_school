import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./components/connexion/Admin/LoginAdmin";
import Login from "./components/connexion/Login/Login";
import Dashboard from "./components/Dashbord";
import Missing from "./components/Missing";
import Classes from "./components/classes/Classes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classe" element={<Classes />} />

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

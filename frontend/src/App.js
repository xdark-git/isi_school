import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginAdmin from "./components/connexion/Admin/LoginAdmin";
import Login from "./components/connexion/Login/Login";
import Dashboard from "./components/Dashbord";
import Missing from "./components/NotFound/Missing";
import Classes from "./components/classes/Classes";
import DisplayOneClasse from "./components/DisplayOneClasse/DisplayOneClasse";

const App = () => {
  const lienClasse = useSelector((state) => state?.classe?.data?._id);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login/admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classes" element={<Classes />} />
          <Route path={"/classes/" + lienClasse} element={<DisplayOneClasse />} />

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

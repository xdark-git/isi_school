import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import decode from "jwt-decode";
import LoginForm from "../Form/LoginForm";
import "../style.css";
import { USER_TOKEN_LOCAL_STORAGE_NAME } from "../../../constantes";

const Login = () => {
  const navigate = useNavigate();

  const userToken = localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME);
  useEffect(() => {
    const token = userToken;
    if (token != null) {
      const decodedToken = decode(token);
      if (decodedToken?.status === "Administrateur") {
        navigate("/classes");
      }
      if (decodedToken?.status === "Professeur") {
        navigate("/cours");
      }
      if (decodedToken?.status === "Etudiant") {
        navigate("/cours");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      {/* shape  */}
      <div className="shape"></div>
      <div className="shape1"></div>
      <div className="shape2"></div>
      {/* shape  */}
      <div className="form">
        <div className="title">
          <h1>Connexion</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;

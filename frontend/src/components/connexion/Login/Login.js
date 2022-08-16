import React from "react";

import LoginForm from "../Form/LoginForm";
import "../style.css";

const Login = () => {
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

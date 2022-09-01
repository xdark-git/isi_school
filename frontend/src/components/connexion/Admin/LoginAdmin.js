import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinAdminitration } from "../../../actions/login";

import "../style.css";

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  //getting error from redux
  const error = useSelector((state) => state?.signin?.error);

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();
    dispatch(signinAdminitration({ email, motDePasse }, navigate));
  };

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
        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <div className="section-input">
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                id="email"
                className="email"
              />
            </div>
            <div id="pwd" className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                placeholder="Votre password"
                id="password"
                className="password"
              />
              <span id="forget">
                <a href="#">| Oublié ?</a>
              </span>
            </div>
            <div className="remember">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Se souvenir ?</label>
            </div>
            <div className="subscribe">
              <button type="submit">Se connecter</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginAdmin;

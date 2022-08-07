import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "react-bootstrap";

import "./style.css";
import { actions } from "../../store/profilOnClick";

const Login = () => {
  /*
      changing the profile style depending on the profil clicked
  */
  const etudiantDefaultStyle = useSelector((state) => state.etudiant);
  const professeurDefaultStyle = useSelector((state) => state.professeur);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    if (event.currentTarget.textContent === "Professeur") {
      dispatch(actions.professeur());
    }
    if (event.currentTarget.textContent === "Etudiant") {
      dispatch(actions.etudiant());
    }
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
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
          <div className="profil">
            <div
              className={etudiantDefaultStyle}
              onClick={handleClick}
            >
              <span className="label">Etudiant</span>
            </div>
            <div
              className={professeurDefaultStyle}
              onClick={handleClick}
            >
              <span className="label">Professeur</span>
            </div>
          </div>
          <div className="section-input">
            <div className="input">
              <label for="email">Email</label>
              <input
                type="text"
                placeholder="Votre email"
                id="email"
                className="email"
              />
            </div>
            <div id="pwd" className="input">
              <label for="password">Password</label>
              <input
                type="password"
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
              <label for="remember">Se souvenir ?</label>
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
export default Login;

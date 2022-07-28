import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const Login = () => {
  const [PROFIL_STYLE_ON_CLICK, SET_PROFIL_STYLE_ON_CLICK] = useState({
    etudiant: "btn-profil checked",
    professeur: "btn-profil",
  });
  /*
      changing the profile style depending on the profil clicked
  */
  const handleClick = (event) => {
    if (event.currentTarget.textContent == "Professeur") {
      SET_PROFIL_STYLE_ON_CLICK({ etudiant: "btn-profil", professeur: "btn-profil checked" });
    }
    if (event.currentTarget.textContent == "Etudiant") {
      SET_PROFIL_STYLE_ON_CLICK({ etudiant: "btn-profil checked", professeur: "btn-profil" });
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
            <div className={PROFIL_STYLE_ON_CLICK.etudiant} onClick={handleClick}>
              <span className="label">Etudiant</span>
            </div>
            <div className={PROFIL_STYLE_ON_CLICK.professeur} onClick={handleClick}>
              <span className="label">Professeur</span>
            </div>
          </div>
          <div className="section-input">
            <div className="input">
              <label for="email">Email</label>
              <input type="text" placeholder="Votre email" id="email" className="email" />
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

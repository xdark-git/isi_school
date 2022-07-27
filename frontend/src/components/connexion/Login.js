import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const Login = () => {
  // Generate JSX code for error message

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
  };

  return (
    <div class="container">
      {/* shape  */}
      <div class="shape"></div>
      <div class="shape1"></div>
      <div class="shape2"></div>
      {/* shape  */}
      <div class="form">
        <div class="title">
          <h1>Connexion</h1>
        </div>

        <form class="form" action="">
          <div class="profil">
            <div class="btn-profil checked">
              <span class="label">Etudiant</span>
            </div>
            <div class="btn-profil">
              <span class="label">Professeur</span>
            </div>
          </div>
          <div class="section-input">
            <div class="input">
              <label for="email">Email</label>
              <input type="text" placeholder="Votre email" id="email" class="email" />
            </div>
            <div id="pwd" class="input">
              <label for="password">Password</label>
              <input type="password" placeholder="Votre password" id="password" class="password" />
              <span id="forget">
                <a href="">| Oublié ?</a>
              </span>
            </div>
            <div class="remember">
              <input type="checkbox" name="" id="remember" />
              <label for="remember">Se souvenir ?</label>
            </div>
            <div class="subscribe">
              <button type="submit">Se connecter</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

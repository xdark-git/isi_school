import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

import "../style.css";
import { signinEtudiant } from "../../../actions/login";
import { LOGIN } from "../../../constantes";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate =  useNavigate();

  /*
      changing the profile style depending on the profil clicked
  */
  const etudiantDefaultStyle = useSelector((state) => state.profile.etudiant);
  const professeurDefaultStyle = useSelector((state) => state.profile.professeur);
  const profileStatus = useSelector((state) => state.profile.profile);

  //Changing the profil selection
  
  const handleClick = (event) => {
    if (event.currentTarget.textContent === "Professeur") {
      dispatch({ type: "PROFESSEUR" });
    }
    if (event.currentTarget.textContent === "Etudiant") {
      dispatch({ type: "ETUDIANT" });
    }
  };
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    if (profileStatus == "etudiant") {
      dispatch(signinEtudiant({ email, motDePasse }, navigate));
    }
    // if (profileStatus == "professeur") {
    //   const response = await fetch("http://localhost:5000/api/user/login/professeur", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       motDePasse,
    //     }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    // }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="profil">
        <div className={etudiantDefaultStyle} onClick={handleClick}>
          <span className="label">Etudiant</span>
        </div>
        <div className={professeurDefaultStyle} onClick={handleClick}>
          <span className="label">Professeur</span>
        </div>
      </div>
      <div className="section-input">
        <div className="input">
          <label for="email">Email</label>
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
          <label for="password">Password</label>
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
          <label for="remember">Se souvenir ?</label>
        </div>
        <div className="subscribe">
          <button type="submit">Se connecter</button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
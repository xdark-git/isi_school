import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../style.css";
import { signinEtudiant, signinProfesseur } from "../../../actions/login";
import { ETUDIANT, PROFESSEUR } from "../../../constantes";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*
      changing the profile style depending on the profil clicked
  */
  const etudiantDefaultStyle = useSelector((state) => state.profile.etudiant);
  const professeurDefaultStyle = useSelector((state) => state.profile.professeur);
  const profileStatus = useSelector((state) => state.profile.profile);

  //Changing the profil selection

  const handleClick = (event) => {
    if (event.currentTarget.textContent === "Professeur") {
      dispatch({ type: PROFESSEUR });
    }
    if (event.currentTarget.textContent === "Etudiant") {
      dispatch({ type: ETUDIANT });
    }
  };
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");

  //getting error from redux
  const error = useSelector((state) => state?.signin?.error);
  // if()

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    if (profileStatus === ETUDIANT) {
      dispatch(signinEtudiant({ email, motDePasse }, navigate));
    }

    if (profileStatus === PROFESSEUR) {
      console.log("okay");
      dispatch(signinProfesseur({ email, motDePasse }, navigate));
    }
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
  );
};
export default LoginForm;

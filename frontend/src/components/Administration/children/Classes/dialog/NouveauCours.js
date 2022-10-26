import React from "react";
import { useDispatch } from "react-redux";
import { CLOSE_NOUVEAU_COURS_DIALOG } from "../../../../../constantes";
import "../css/nouveau-cours.css";

const NouveauCours = () => {
  const dispatch = useDispatch();

  return (
    <div id="nouveau-cours" className="nouveau-cours">
      <div className="nouveau-cours-contenu">
        <div className="title">Nouveau Cours</div>
        <div className="body">
          <div className="owner">
            <label htmlFor="username-prof">Username du professeur</label>
            <input id="username-prof" nom="professeur" type="text" />
          </div>
          <div className="classe">
            <label htmlFor="classe">Classe</label>
            <input id="classe" nom="classe" type="text" />
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className="cours">
            <label htmlFor="nom-cours">Nom du cours</label>
            <input id="nom-cours" nom="cours" type="text" />
          </div>
        </div>
        <div className="buttons">
          <button
            className="annuler"
            onClick={() => dispatch({ type: CLOSE_NOUVEAU_COURS_DIALOG })}
          >
            Annuler
          </button>
          <button className="ajouter">Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default NouveauCours;

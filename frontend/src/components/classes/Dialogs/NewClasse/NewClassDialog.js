import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClasse } from "../../../../actions/classe/createUpdateClasses";
import { closeNewClassDialog } from "../../../../constantes";
import "../style.css";

const NewClassDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  window.onclick = function (event) {
    var nouvelleClasseDiv = document.getElementById("nouvelleClasse");
    if (event.target === nouvelleClasseDiv) {
      dispatch({ type: closeNewClassDialog });
    }
  };
  const closeDialog = () => {
    dispatch({ type: closeNewClassDialog });
    console.log("okay");
  };

  const [nomClasse, setNomClasse] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(nomClasse);
    dispatch(createClasse({nom: nomClasse}, navigate))
  };

  return (
    <div id="nouvelleClasse" className="nouvelle-classe">
      <div className="nouvelle-classe-contenu">
        <div className="title">Nouvelle Classe</div>
        <div className="description">Merci de donner le nom de la nouvelle classe </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={nomClasse}
            onChange={(e) => setNomClasse(e.target.value)}
          />
          <button className="ajouter" type="submit">
            Ajouter
          </button>
          <button className="reset" type="reset">
            Tout effacer
          </button>
        </form>
        <button className="annuler" onClick={closeDialog}>
          Annuler
        </button>
      </div>
    </div>
  );
};

export default NewClassDialog;

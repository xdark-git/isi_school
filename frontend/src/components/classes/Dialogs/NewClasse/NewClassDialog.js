import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeNewClassDialog } from "../../../../constantes";
import "../style.css";

const NewClassDialog = () => {
  const dispatch = useDispatch();
  window.onclick = function (event) {
    var nouvelleClasseDiv = document.getElementById("nouvelleClasse");
    if (event.target === nouvelleClasseDiv) {
      dispatch({ type: closeNewClassDialog });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const closeDialog = () => {
    dispatch({ type: closeNewClassDialog });
    console.log("okay");
  };

  return (
    <div id="nouvelleClasse" className="nouvelle-classe">
      <div className="nouvelle-classe-contenu">
        <div className="title">Nouvelle Classe</div>
        <div className="description">Merci de donner le nom de la nouvelle classe </div>
        <form  onSubmit={handleSubmit}>
          <input placeholder="Nom" />
          <button className="ajouter" type="submit">
            Ajouter
          </button>
          <button className="reset" type="reset">
            Tout effacer
          </button>
        </form>
        <button className="annuler">Annuler</button>
      </div>
    </div>
  );
};

export default NewClassDialog;

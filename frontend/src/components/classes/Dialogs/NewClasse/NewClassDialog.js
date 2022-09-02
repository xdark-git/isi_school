import React, { useState, useEffect } from "react";
import "../style.css";

const NewClassDialog = () => {
  window.onclick = function (event) {
    var nouvelleClasseDiv = document.getElementById("nouvelleClasse");
    if (event.target == nouvelleClasseDiv) {
      console.log(event.target);
    }
  };
  return (
    <div id="nouvelleClasse" className="nouvelle-classe">
      <div className="nouvelle-classe-contenu">
        <div className="title">Nouvelle Classe</div>
        <div className="description">Merci de donner le nom de la nouvelle classe </div>
        <form>
          <input placeholder="Nom"/>
          <button className="annuler">Annuler</button>
          <button className="ajouter">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default NewClassDialog;

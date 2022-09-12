import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClasse } from "../../../../actions/classe/createUpdateClasses";
import { closeNewClassDialog, CREATIONCLASSEDIALOGCLOSED } from "../../../../constantes";
import "../style.css";

const NewClassDialog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  window.onclick = function (event) {
    var nouvelleClasseDiv = document.getElementById("nouvelleClasse");
    if (event.target === nouvelleClasseDiv) {
      dispatch({ type: closeNewClassDialog });
      //cleaning error message
      dispatch({ type: CREATIONCLASSEDIALOGCLOSED });
    }
  };
  const closeDialog = () => {
    dispatch({ type: closeNewClassDialog });
    //cleaning error message
    dispatch({ type: CREATIONCLASSEDIALOGCLOSED });
  };

  const [nomClasse, setNomClasse] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(nomClasse);
    dispatch(createClasse({ nom: nomClasse }, navigate));
  };
  const error = useSelector((state) => state?.createClasse?.errors);

  return (
    <div id="nouvelleClasse" className="nouvelle-classe">
      <div className="nouvelle-classe-contenu">
        <div className="title">Nouvelle Classe</div>
        <div className="description">Merci de donner le nom de la nouvelle classe </div>
        <form onSubmit={handleSubmit}>
          {error?.message && <div className="error">{error?.message}</div>}
          {error?.nom && <div className="error">{error?.nom}</div>}
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

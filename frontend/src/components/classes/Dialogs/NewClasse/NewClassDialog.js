import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClasse, updateName } from "../../../../actions/classe/createUpdateClasses";
import {
  closeNewClassDialog,
  CREATIONCLASSEDIALOGCLOSED,
  loaderComponentClosed,
  openLoaderComponent,
} from "../../../../constantes";
import "../style.css";

const NewClassDialog = (action) => {
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
  const isLoading = useSelector((state) => state?.isLoading?.loader);
  const [nomClasse, setNomClasse] = useState("");
  const [nomClasseOnUpdate, setNomClasseOnUpdate] = useState();
  const classeToUpdate = useSelector((state) => state?.classe?.data?.classe);

  const error = useSelector((state) => state?.createClasse?.errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(nomClasse);
    if (action?.objectif === "Creation") {
      dispatch(createClasse({ nom: nomClasse }, navigate));
      dispatch({ type: openLoaderComponent });
    }
    if (action?.objectif === "Modification") {
      dispatch(updateName(classeToUpdate?._id, { nom: nomClasseOnUpdate }, navigate));
      dispatch({ type: openLoaderComponent });
    }
  };

  if (action?.objectif === "Creation") {
    return isLoading === loaderComponentClosed ? (
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
    ) : (
      <div id="nouvelleClasse" className="nouvelle-classe"></div>
    );
  } else if (action?.objectif === "Modification") {
    return isLoading === loaderComponentClosed ? (
      <div id="nouvelleClasse" className="nouvelle-classe">
        <div className="nouvelle-classe-contenu">
          <div className="title">Modification Classe</div>
          <div className="description">Merci de donner le nouveau nom de la classe </div>
          <form onSubmit={handleSubmit}>
            {error?.message && <div className="error">{error?.message}</div>}
            {error?.nom && <div className="error">{error?.nom}</div>}
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={nomClasseOnUpdate !== undefined ? nomClasseOnUpdate : classeToUpdate?.nom}
              onChange={(e) => setNomClasseOnUpdate(e.target.value)}
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
    ) : (
      <div id="nouvelleClasse" className="nouvelle-classe"></div>
    );
  }
};

export default NewClassDialog;

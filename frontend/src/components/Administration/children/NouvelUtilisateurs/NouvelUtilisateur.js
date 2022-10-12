import React, { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import "./css/style.css";

const NouvelUtilisateur = (props) => {
  const status = useSelector((state) => state?.users?.data?.status);

  const statusSelectOption = useRef();
  if (status) {
    statusSelectOption.current = status.map((el, index) => {
      return (
        <option key={index} value={el?._id}>
          {el?.nom}
        </option>
      );
    });
  }

  const closeCurrentDialog = useCallback(() => {
    return props.state?.setStateNouvelleUtilisateur(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="nouvelUtilisateur">
      <div className="background-shape">
        <div className="header">
          <div> Nouvel Utilisateur</div>
          <i className="fa-solid fa-xmark" onClick={closeCurrentDialog}></i>
        </div>
        <div className="body">
          <div>
            <span className="span-title">
              <label htmlFor="part1">Titre</label>
              <div className="error">This will be replace by the error catched</div>
              <select id="title">
                <option>Sélectionner</option>
                {statusSelectOption.current}
              </select>
            </span>
          </div>
          <div>
            <span className="span-prenom">
              <label htmlFor="prenom">Prénom</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="prenom" type="input" />
            </span>
            <span className="span-nom">
              <label htmlFor="nom">Nom</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="nom" type="input" />
            </span>
          </div>
          <div>
            <span className="span-dateDeNaissance">
              <label htmlFor="dateDeNaissance">Date de Naissance</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="dateDeNaissance" type="date" />
            </span>
            <span className="span-lieuDeNaissance">
              <label htmlFor="lieuDeNaissance">Lieu de Naissance</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="lieuDeNaissance" type="text" />
            </span>
          </div>
          <div>
            <span className="span-identifiant">
              <label htmlFor="identifiant">Identifiant</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="identifiant" type="text" />
            </span>
            <span className="span-username">
              <label htmlFor="username">Username</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="username" type="text" />
            </span>
          </div>
          <div>
            <span className="span-email">
              <label htmlFor="email">Email</label>
              <div className="error">This will be replace by the error catched</div>
              <input id="email" type="email" />
            </span>
          </div>
        </div>
        <div className="buttons">
          <button className="btn btn-annuler" onClick={closeCurrentDialog}>
            Annuler
          </button>
          <button className="btn btn-ajouter">Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default NouvelUtilisateur;

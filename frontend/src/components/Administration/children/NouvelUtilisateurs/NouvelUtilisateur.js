import React, { useCallback } from "react";
import "./css/style.css";

const NouvelUtilisateur = (props) => {
  const closeCurrentDialog = useCallback(() => {
    return props.state?.setStateNouvelleUtilisateur(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="nouvelUtilisateur">
      <div className="background-shape">
        <div className="header">
          <div> Nouvelle Utilisateur</div>
          <i className="fa-solid fa-xmark" onClick={closeCurrentDialog}></i>
        </div>
        <div className="body">
          <div>
            <span className="span-title">
              <label htmlFor="part1">Titre</label>
              <select id="title">
                <option>Sélectionner</option>
                <option value="Administrateur">Administrateur</option>
                <option value="Professeur">Professeur</option>
                <option value="Etudiant">Etudiant</option>
              </select>
            </span>
          </div>
          <div>
            <span className="span-prenom">
              <label htmlFor="prenom">Prénom</label>
              <input id="prenom" type="input" />
            </span>
            <span className="span-nom">
              <label htmlFor="nom">Nom</label>
              <input id="nom" type="input" />
            </span>
          </div>
          <div>
            <span className="span-dateDeNaissance">
              <label htmlFor="dateDeNaissance">Date de Naissance</label>
              <input id="dateDeNaissance" type="date" />
            </span>
            <span className="span-lieuDeNaissance">
              <label htmlFor="lieuDeNaissance">Lieu de Naissance</label>
              <input id="lieuDeNaissance" type="text" />
            </span>
          </div>
          <div>
            <span className="span-identifiant">
              <label htmlFor="identifiant">Identifiant</label>
              <input id="identifiant" type="text" />
            </span>
            <span className="span-username">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" />
            </span>
          </div>
          <div>
            <span className="span-email">
              <label htmlFor="email">Email</label>
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

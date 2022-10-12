import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./css/style.css";

const NouvelUtilisateur = (props) => {
  const closeCurrentDialog = useCallback(() => {
    return props.state?.setStateNouvelleUtilisateur(false);
    // eslint-disable-next-line
  }, []);

  const [titre, setTitre] = useState(null);
  const [titreError, setTitreError] = useState(null);

  const [nom, setNom] = useState(null);
  const [nomError, setNomError] = useState(null);

  const [prenom, setPrenom] = useState(null);
  const [prenomError, setPrenomError] = useState(null);

  const [telephone, setTelephone] = useState(null);
  const [telephoneError, setTelephoneError] = useState(null);

  const [dateDeNaissance, setDateDeNaissance] = useState(null);
  const [dateDeNaissanceError, setdateDeNaissanceError] = useState(null);

  const [lieuDeNaissance, setLieuDeNaissance] = useState(null);
  const [lieuDeNaissanceError, setLieuDeNaissanceError] = useState(null);

  const [username, setUsername] = useState(null);
  const [usernameError, setUsernameError] = useState(null);

  const [identifiant, setIdentifiant] = useState(null);
  const [identifiantError, setIdentifiantError] = useState(null);

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);

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

  const handleError = useCallback(() => {
    if (titre === null || titre === "") setTitreError("champs requis");
    else setTitreError(null);

    if (nom === null || nom === "") setNomError("champs requis");
    else setNomError(null);

    if (prenom === null || prenom === "") setPrenomError("champs requis");
    else setPrenomError(null);

    if (telephone === null || telephone === "") setTelephoneError("champs requis");
    else setTelephoneError(null);

    if (dateDeNaissance === null || dateDeNaissance === "")
      setdateDeNaissanceError("champs requis");
    else setdateDeNaissanceError(null);

    if (lieuDeNaissance === null || lieuDeNaissance === "")
      setLieuDeNaissanceError("champs requis");
    else setLieuDeNaissanceError(null);

    if (email === null || email === "") setEmailError("champs requis");
    else setEmailError(null);

    if (username === null || username === "") setUsernameError("champs requis");
    else setUsernameError(null);

    if (identifiant === null || identifiant === "") setIdentifiantError("champs requis");
    else setIdentifiantError(null);
  }, [
    nom,
    prenom,
    telephone,
    dateDeNaissance,
    lieuDeNaissance,
    email,
    username,
    identifiant,
    titre,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      nom === null ||
      nom === "" ||
      prenom === null ||
      prenom === "" ||
      telephone === null ||
      telephone === "" ||
      dateDeNaissance === null ||
      dateDeNaissance === "" ||
      lieuDeNaissance === null ||
      lieuDeNaissance === "" ||
      email === null ||
      email === "" ||
      username === null ||
      username === "" ||
      identifiant === null ||
      identifiant === "" ||
      titre === null ||
      titre === ""
    ) {
      handleError();
      return;
    }

    
  };
  return (
    <div className="nouvelUtilisateur">
      <div className="background-shape">
        <div className="header">
          <div> Nouvel Utilisateur</div>
          <i className="fa-solid fa-xmark" onClick={closeCurrentDialog}></i>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="body">
            {/* <div className="error">This will be replace by the error catched</div> */}
            <div>
              <span className="span-title">
                <label htmlFor="part1">Titre*</label>
                {titreError && <div className="error">{titreError}</div>}
                <select id="title" onChange={(e) => setTitre(e.target.value)}>
                  <option>Sélectionner</option>
                  {statusSelectOption.current}
                </select>
              </span>
            </div>
            <div>
              <span className="span-prenom">
                <label htmlFor="prenom">Prénom*</label>
                {prenomError && <div className="error">{prenomError}</div>}
                <input
                  id="prenom"
                  type="input"
                  value={prenom != null ? prenom : ""}
                  onChange={(e) => setPrenom(e.target.value)}
                />
              </span>
              <span className="span-nom">
                <label htmlFor="nom">Nom*</label>
                {nomError && <div className="error">{nomError}</div>}
                <input
                  id="nom"
                  type="input"
                  value={nom != null ? nom : ""}
                  onChange={(e) => setNom(e.target.value)}
                />
              </span>
            </div>
            <div>
              <span className="span-dateDeNaissance">
                <label htmlFor="dateDeNaissance">Date de Naissance*</label>
                {dateDeNaissanceError && <div className="error">{dateDeNaissanceError}</div>}
                <input
                  id="dateDeNaissance"
                  type="date"
                  value={dateDeNaissance != null ? dateDeNaissance : ""}
                  onChange={(e) => setDateDeNaissance(e.target.value)}
                />
              </span>
              <span className="span-lieuDeNaissance">
                <label htmlFor="lieuDeNaissance">Lieu de Naissance*</label>
                {lieuDeNaissanceError && <div className="error">{lieuDeNaissanceError}</div>}
                <input
                  id="lieuDeNaissance"
                  type="text"
                  value={lieuDeNaissance != null ? lieuDeNaissance : ""}
                  onChange={(e) => setLieuDeNaissance(e.target.value)}
                />
              </span>
            </div>
            <div>
              <span className="span-identifiant">
                <label htmlFor="identifiant">Identifiant*</label>
                {identifiantError && <div className="error">{identifiantError}</div>}
                <input
                  id="identifiant"
                  type="text"
                  value={identifiant != null ? identifiant : ""}
                  onChange={(e) => setIdentifiant(e.target.value)}
                />
              </span>
              <span className="span-username">
                <label htmlFor="username">Username*</label>
                {usernameError && <div className="error">{usernameError}</div>}
                <input
                  id="username"
                  type="text"
                  value={username != null ? username : ""}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </span>
            </div>
            <div>
              <span className="span-telephone">
                <label htmlFor="telephone">Téléphone*</label>
                {telephoneError && <div className="error">{telephoneError}</div>}
                <input
                  id="telephone"
                  type="text"
                  value={telephone != null ? telephone : ""}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </span>
              <span className="span-email">
                <label htmlFor="email">Email*</label>
                {emailError && <div className="error">{emailError}</div>}
                <input
                  id="email"
                  type="email"
                  value={email != null ? email : ""}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
            </div>
          </div>
          <div className="buttons">
            <button className="btn btn-annuler" onClick={closeCurrentDialog}>
              Annuler
            </button>
            <button className="btn btn-ajouter">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NouvelUtilisateur;

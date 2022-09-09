import React from "react";
import { useDispatch } from "react-redux";
import { openListProfEtudiantDialog } from "../../../constantes";

const Plus = (changeState, state) => {
  const dispatch = useDispatch();
  const listProf = () => {
    dispatch({ type: openListProfEtudiantDialog, profile: "Professeur" });
  };
  const listEtudiant = () => {
    dispatch({ type: openListProfEtudiantDialog, profile: "Etudiant" });
  };
  return (
    <ul id="plusDialog" className="dialog">
      <li className="display-prof" onClick={listProf}>
        Liste des professeurs
      </li>
      <li className="display-etudiant" onClick={listEtudiant}>
        Liste des etudiants
      </li>
      <li>Supprimer la classe</li>
    </ul>
  );
};

export default Plus;

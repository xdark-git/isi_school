import React, { useRef } from "react";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {
  openDeleteDialog,
  openListProfEtudiantDialog,
  openNewClassDialog,
  USER_DATA_COOKIE_NAME,
} from "../../../constantes";

const Plus = (classe) => {
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const user = useRef(cookies.get(USER_DATA_COOKIE_NAME));

  const listProf = () => {
    dispatch({ type: openListProfEtudiantDialog, profile: "Professeur" });
  };
  const listEtudiant = () => {
    dispatch({ type: openListProfEtudiantDialog, profile: "Etudiant" });
  };
  const displayNewClasseDialog = async () => {
    dispatch({ type: openNewClassDialog });
  };
  //opening deleteDialog to confirm or cancel
  const confirmDeletion = () => {
    dispatch({ type: openDeleteDialog, target: "Classe", id: classe?.classe?._id });
  };
  return (
    <div className="plusDialog">
      <ul id="plusDialog" className="dialog">
        <li className="display-prof" onClick={listProf}>
          Liste des professeurs
        </li>
        <li className="display-etudiant" onClick={listEtudiant}>
          Liste des etudiants
        </li>
        {user.current?.status === "Administrateur" && <li onClick={displayNewClasseDialog}>Modifier la classe</li>}
        {user.current?.status === "Administrateur" && (
          <li onClick={confirmDeletion}>Supprimer la classe</li>
        )}
      </ul>
    </div>
  );
};

export default Plus;

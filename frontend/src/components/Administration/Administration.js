import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import Classes from "./children/Classes/Classes";
import Utilisateurs from "./children/Utilisateurs/Utilisateurs";
import NouvelUtilisateur from "./children/NouvelUtilisateurs/NouvelUtilisateur";
import NewClassDialog from "../classes/Dialogs/NewClasse/NewClassDialog";
import { useSelector } from "react-redux";
import { newClassDialogOpened, OPENED } from "../../constantes";
import NouveauCours from "./children/Classes/dialog/NouveauCours";

const Administration = () => {
  const [children, setChildren] = useState({
    Utilisateurs: true,
    Classes: false,
  });
  const [stateNouvelUtilisateur, setStateNouvelleUtilisateur] = useState(false);
  const nouvelleUtilisateurParams = {
    stateNouvelUtilisateur,
    setStateNouvelleUtilisateur,
  };
  let isNewClassDialogOpen = useSelector((state) => state?.stateNewClassDialog?.status);
  const isNouveauCoursDialogOpen = useSelector((state) => state?.stateNouveauCoursDialog?.status);
  
  return (
    <main>
      <Navbar />
      {stateNouvelUtilisateur === true && <NouvelUtilisateur state={nouvelleUtilisateurParams} />}
      {isNewClassDialogOpen === newClassDialogOpened && <NewClassDialog objectif="Creation" />}
      {isNouveauCoursDialogOpen === OPENED && <NouveauCours />}
      <div className="admnistration-component">
        <div className="background-shape">
          <div className="header">
            <div
              className={children?.Utilisateurs === true ? "utilisateurs focused" : "utilisateurs"}
              onClick={() =>
                setChildren({
                  Utilisateurs: true,
                  Classes: false,
                })
              }
            >
              Utilisateurs
            </div>
            <div
              className={children?.Classes === true ? "classes focused" : "classes"}
              onClick={() =>
                setChildren({
                  Utilisateurs: false,
                  Classes: true,
                })
              }
            >
              Classes
            </div>
            <div className="line"></div>
          </div>
          <div className="body">
            {children?.Utilisateurs === true && (
              <Utilisateurs nouvelUtilisateur={nouvelleUtilisateurParams} />
            )}
            {children?.Classes === true && <Classes />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Administration;

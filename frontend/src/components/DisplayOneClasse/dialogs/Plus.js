import React from "react";

const Plus = (changeState, state) => {
  return (
    <ul id="plusDialog" className="dialog">
      <li className="display-prof">Liste des professeurs</li>
      <li className="display-etudiant">Liste des etudiants</li>
      <li>Supprimer la classe</li>
    </ul>
  );
};

export default Plus;

import React from "react";

import {} from "../../../../constantes";
import "../style.css";
const LogoutDialog = (logout) => {
  return (
    <div className="logout-dialog" onClick={logout?.logout}>
      <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
      <div>Se déconnecter</div>
    </div>
  );
};

export default LogoutDialog;

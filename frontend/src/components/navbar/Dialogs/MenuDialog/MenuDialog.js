import React from "react";
import "./style.css"
const MenuDialog = (user ) => {
  return (
    <div className="menu-dialog">
      <div className="menu-dialog-content">
        <a href="/classes">ISI</a>
        <div className="pages">
          <div className="profile">
            <i className="fa-solid fa-gear fa-lg"></i>
            <div>Profil</div>
          </div>
          {user?.status === "Administrateur" && (
            <div className="classes checked">
              <i className="fa-solid fa-building fa-lg"></i>
              <div>classes</div>
            </div>
          )}
          <div className="cours">
            <i className="fa-solid fa-file-lines fa-lg"></i>
            <div>Cours</div>
          </div>
          <div className="informations">
            <i className="fa-solid fa-bell fa-lg"></i>
            <div>Informations</div>
          </div>
          {user?.status === "Administrateur" && (
            <div className="admin-users">
              <i className="fa-solid fa-users fa-lg"></i>
              <div>utilisateurs</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuDialog;

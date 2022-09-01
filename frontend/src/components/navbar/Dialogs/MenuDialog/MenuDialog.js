import React from "react";
import { useDispatch} from "react-redux";
import { closeMenuDialog} from "../../../../constantes";
import "../style.css";
const MenuDialog = (user, status) => {
  const dispatch = useDispatch();

  function closeMenu() {
    dispatch({ type: closeMenuDialog });
  }

  return (
    <div className="menu-dialog">
      <div className="menu-dialog-content">
        <div className="close-menu-dialog" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="page-name">Classe</div>
        <div className="pages">
          <div className="profile">
            <div>Profil</div>
          </div>
          {user?.user?.status === "Administrateur" && (
            <div className="classes checked">
              <div>classes</div>
            </div>
          )}
          <div className="cours">
            <div>Cours</div>
          </div>
          <div className="informations">
            <div>Informations</div>
          </div>
          {user?.user?.status === "Administrateur" && (
            <div className="admin-users">
              <div>utilisateurs</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuDialog;

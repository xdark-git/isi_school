import React from "react";
import "./style.css"
const MenuDialog = (user, menuDialog, close) => {
  document.addEventListener('click', function handleClickOutsideBox(event) {
    console.log("clicked")
  });
  // if(menuDialog?.isMenuDialogOpen === 1){
  //   console.log(true)
  // }else{
  //   console.log(menuDialog?.isMenuDialogOpen)
  // }
  
  return (
    <div className="menu-dialog">
      <div className="menu-dialog-content">
      <div className="close-menu-dialog">
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

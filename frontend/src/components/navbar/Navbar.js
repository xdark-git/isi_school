import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "./asset/css/style.css";

import { USER_DATA_COOKIE_NAME } from "../../constantes";

const Navbar = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_DATA_COOKIE_NAME);

  return (
    <div>
      <header>
        {/* <a className="logo" href="/nav">
          ISI School
        </a> */}
        <div className="page-name">Classe</div>
        <div className="profile">
          <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
          <div className="user-name">{user?.prenom}</div>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </header>
      <nav>
        <a href="/nav">ISI</a>
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
          {user?.status === "Administrateur" && (
            <div className="informations">
              <i className="fa-solid fa-bell fa-lg"></i>
              <div>Informations</div>
            </div>
          )}
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
      </nav>
    </div>
  );
};
export default Navbar;

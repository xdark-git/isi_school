import React from "react";
import { useEffect } from "react";
import "./asset/css/style.css";

const Navbar = () => {  
  return (
    <div>
      <header>
        {/* <a className="logo" href="/nav">
          ISI School
        </a> */}
        <div className="page-name">Classe</div>
        <div className="profile">
          <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
          <div className="user-name">Test</div>
          <i class="fa-solid fa-caret-down"></i>
        </div>
      </header>
      <nav>
        <a href="/nav">ISI</a>
        <div className="pages">
          <div className="profile">
            <i className="fa-solid fa-gear fa-lg"></i>
            <div>Profil</div>
          </div>
          <div className="classes checked">
            <i className="fa-solid fa-building fa-lg"></i>
            <div>classes</div>
          </div>
          <div className="cours">
            <i className="fa-solid fa-file-lines fa-lg"></i>
            <div>Cours</div>
          </div>
          <div className="informations">
            <i className="fa-solid fa-bell fa-lg"></i>
            <div>Informations</div>
          </div>
          <div className="admin-users">
            <i class="fa-solid fa-users fa-lg"></i>
            <div>utilisateurs</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

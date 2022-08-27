import React from "react";
import "./asset/css/style.css";

const Navbar = () => {
  return (
    <div className="nav">
      <header>
        <a className="logo" href="/nav">
          ISI School
        </a>
        <div className="input">
          <label htmlFor="search">Rechercher</label>
          <input type="text" id="search" name="search" className="search" />
          <button class="fa-solid fa-magnifying-glass search-icon"></button>
        </div>
      </header>
      <div className="profil">
        <div className="user-infos">
          {/* <div className="user-photo"></div> */}
          <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil" />
          <div className="user-title">
            <span className="label">Admin</span>
            <div className="user-name">Test test</div>
            <div className="user-email">test@gmail.com</div>
            <button name="btn-logout">Se deconnecter</button>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <span className="profil-page checked">
              <i className="fa-solid fa-gear fa-lg"></i>
              Profil
            </span>
            <span className="cours-page">
              <i className="fa-solid fa-file-lines fa-lg"></i>
              Cours
            </span>
          </div>
          <div className="row">
            <span className="notification-page">
              <i className="fa-solid fa-bell fa-lg"></i>
              Messages
            </span>
            <span className="classe-page">
              <i className="fa-solid fa-building fa-lg"></i>
              Classes
            </span>
          </div>
        </div>
      </div>
      <div className="component">
        <div className="header">
          <div className="shape">
            <h1>Administration</h1>
            <span className="label">classes</span>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
};
export default Navbar;

import React from "react";
import "./css/style.css";

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
            <span className="profil-page">Profil</span>
            <span className="cours-page">Cours</span>
          </div>
          <div className="row">
            <span className="notification-page">Messages</span>
            <span className="classe-page">Classes</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

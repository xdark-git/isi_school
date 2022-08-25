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
          <img src={process.env.PUBLIC_URL +"/img/user/default.jpg"} />
          <div className="user-title"></div>
          <div className="user-email"></div>
          <button>Se deconnecter</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

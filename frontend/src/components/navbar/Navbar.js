import React from "react";
import "./css/style.css";

const Navbar = () => {
  return (
    <header>
      <a className="logo" href="/nav">
        ISI School
      </a>
      <div className="input">
        <label htmlFor="search">Rechercher</label>
        <input type="text" id="search" name="search" className="search" />
        <span class="fa-solid fa-magnifying-glass search-icon"></span>
      </div>
    </header>
  );
};
export default Navbar;

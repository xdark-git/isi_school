import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../navbar/Navbar";
import "./asset/style.css";

const DisplayOneCours = () => {
  const cours = useSelector((state) => state?.cours?.data?.cours);
  return (
    <main>
      <Navbar path={cours?.titre} />
      <div className="component">
        <div className="display-search">
          <div className="display">
            <div id="plus" className="more">
              <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              <span>Plus</span>
            </div>
          </div>
          <div className="search">
            <form>
              <input
                type="text"
                id="search"
                placeholder="Recherche"
                name="search"
                className="search"
              />
              <button className="fa-solid fa-magnifying-glass search-icon"></button>
            </form>
          </div>
        </div>
        <div className="content-cours">
          <ul>
            <li>
              <span className="cours-number">Numéro</span>
              <span className="cours-title">titre</span>
              <span className="cours-date">date de création</span>
              <span className="cours-options">
                <i className="fa-solid fa-download"></i>
                <i className="fa-solid fa-eye"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DisplayOneCours;

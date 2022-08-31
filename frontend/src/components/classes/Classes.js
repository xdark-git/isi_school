import React from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";

const Classes = () => {

  return (
    <main>
      <Navbar />
      <div className="component">
        <div className="new-search">
          <div className="new">
            <i className="fa-solid fa-plus"></i>
            <div>nouvelle classe</div>
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
        <div className="content">
          <div className="classe">
            <div className="classe-name">Génie logiciel</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Réseau</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Communication</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Classes;

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
            <i class="fa-solid fa-plus"></i>
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
              <button class="fa-solid fa-magnifying-glass search-icon"></button>
            </form>
          </div>
        </div>
        <div className="content"></div>
      </div>
    </main>
  );
};

export default Classes;

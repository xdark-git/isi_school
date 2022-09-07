import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import Plus from "./dialogs/Plus";

const DisplayOneClasse = () => {
  const [plusDialog, setPlusDialog] = useState(false);
  const openPlusDialog = () => {
    if (plusDialog === true) setPlusDialog(false);
    else setPlusDialog(true);
  };
  return (
    <main>
      <Navbar />
      <div className="component">
        <div className="display-search">
          <div className="display">
            <div id="plus" className="more" onClick={openPlusDialog}>
              <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              <span>Plus</span>
            </div>
            {plusDialog === true && <Plus />}
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
        <div className="content1">
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
          <div className="cours">
            <div className="cours-owner">
              <img
                src={process.env.PUBLIC_URL + "/img/user/default.jpg"}
                alt="profil utilisateur"
              />
              <div className="cours-owner-name">Test Test</div>
            </div>
            <div className="cours-name">Developpement Web</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DisplayOneClasse;

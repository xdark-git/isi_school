import React from "react";
import Navbar from "../../navbar/Navbar";
// import "./asset/css/style.css";

const DisplayOneClasse = () => {
  return (
    <main>
      <Navbar />
      <div className="component">
        <div className="display-search">
          <div className="display">
            <div className="more">
              <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
              <span>Plus</span>
            </div>
            <ul className="dialog">
              <li className="display-prof">Liste des professeurs</li>
              <li className="display-etudiant">Liste des etudiants</li>
              <li>Supprimer la classe</li>
            </ul>
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

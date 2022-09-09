import React from "react";
import "./asset/css/style.css";

const ListProfEtudiant = () => {
  return (
    <div id="listing" className="listing">
      <div className="listing-header">
        <div>
          <i class="fa-solid fa-xmark fa-xl"></i>
          <span className="listing-header-title">Professeurs</span>
        </div>
        <span className="listing-header-button">
          <button type="submit" className="btn-ajouter">
            Ajouter
          </button>
          <button type="submit" className="btn-supprimer">
            Supprimer
          </button>
        </span>
      </div>
      <div className="listing-content">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <div>
              <label htmlFor="user-checkbox">Test test</label>
              <input id="user-checkbox" type="checkbox" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListProfEtudiant;

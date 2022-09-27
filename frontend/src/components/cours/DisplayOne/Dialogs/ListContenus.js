import React from "react";
import "./asset/css/style.css";

const ListContenus = () => {
  return (
    <div className="contenu-listing">
      <div className="contenu-listing-header">
        <div className="contenu-listing-close">
          <i className="fa-thin fa-xmark"></i>
        </div>
        <span className="contenu-listing-header-title">Première partie</span>
      </div>
      <div className="contenu-listing-body">
        <div className="description"></div>
        <div className="title">LISTE DES PIECES JOINTES</div>
        <div className="buttons">
          <button className="select-contenu">
            Sélectionner <i className="fa-light fa-check"></i>
          </button>
          <button className="download-contenu">
            Télécharger <i className="fa-thin fa-download"></i>
          </button>
          <button className="delete-contenu">
            Supprimer <i className="fa-regular fa-trash"></i>
          </button>
        </div>
        <div className="list"></div>
      </div>
    </div>
  );
};

export default ListContenus;

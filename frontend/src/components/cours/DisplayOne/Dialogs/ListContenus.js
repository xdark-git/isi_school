import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeListContenusDialog } from "../../../../constantes";
import "./asset/css/style.css";

const ListContenus = () => {
  const dispatch = useDispatch();
  const [buttonSelectClicked, setButtonSelectClicked] = useState(false);

  return (
    <div className="contenu-listing">
      <div className="contenu-listing-header">
        <div
          className="contenu-listing-close"
          onClick={() => dispatch({ type: closeListContenusDialog })}
        >
          <i className="fa-thin fa-xmark"></i>
        </div>
        <span className="contenu-listing-header-title">Première partie</span>
      </div>
      <div className="contenu-listing-body">
        <div className="description"></div>
        <div className="title">LISTE DES PIECES JOINTES</div>
        <div className="buttons">
          <button
            className="select-contenu"
            onClick={() =>
              buttonSelectClicked === false
                ? setButtonSelectClicked(true)
                : setButtonSelectClicked(false)
            }
          >
            Sélectionner <i className="fa-light fa-check"></i>
          </button>
          <button className="download-contenu">
            Télécharger <i className="fa-thin fa-download"></i>
          </button>
          {buttonSelectClicked === true && (
            <button className="delete-contenu">
              Supprimer <i className="fa-regular fa-trash"></i>
            </button>
          )}
        </div>
        <div className="list-piece-jointe">
          <div>
            <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
            <div className="title-checkbox">
              <label htmlFor="select-piece-jointe">exemple.pdf</label>
              {buttonSelectClicked === true && (
                <input type="checkbox" name="select-piece-jointe" id="select-piece-jointe" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListContenus;

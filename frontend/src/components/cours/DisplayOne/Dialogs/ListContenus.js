import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeListContenusDialog } from "../../../../constantes";
import "./asset/css/style.css";

const ListContenus = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.stateListContenusDialog?.data);
  const [buttonSelectClicked, setButtonSelectClicked] = useState(false);

  let listOfPiecJointe = data?.piece_jointe.map((el, index) => {
    return (
      <div key={index}>
        {/* <div className="document-detail">
          <span className="document-type">type: png</span>
          <span className="document-size">taille :124mb</span>
        </div> */}
        <img src={process.env.PUBLIC_URL + "/img/pdf.png"} alt="" />
        <div className="title-checkbox">
          <label htmlFor="#">
            {el?.originalname.length > 17
              ? `${el?.originalname.substring(0, 15)}...`
              : `${el?.originalname}`}
          </label>
          {buttonSelectClicked === true && (
            <input type="checkbox" name="select-piece-jointe" id="select-piece-jointe" />
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="contenu-listing">
      <div className="contenu-listing-header">
        <div
          className="contenu-listing-close"
          onClick={() => dispatch({ type: closeListContenusDialog })}
        >
          <i className="fa-thin fa-xmark"></i>
        </div>
        <span className="contenu-listing-header-title">{data?.titre}</span>
      </div>
      <div className="contenu-listing-body">
        <div className="description">{data?.description}</div>
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
        <div className="list-piece-jointe">{listOfPiecJointe}</div>
      </div>
    </div>
  );
};

export default ListContenus;

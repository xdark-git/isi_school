import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";
import { closeListContenusDialog, USER_TOKEN_LOCAL_STORAGE_NAME } from "../../../../constantes";
import "./asset/css/style.css";

const ListContenus = () => {
  const dispatch = useDispatch();

  const userToken = useRef(localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME));
  const decodedToken = useRef(decode(userToken.current));

  const data = useSelector((state) => state?.stateListContenusDialog?.data);
  const [buttonSelectClicked, setButtonSelectClicked] = useState(false);
  const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  };

  let listOfPiecJointe = data?.piece_jointe.map((el, index) => {
    return (
      <div key={index}>
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
        <div className="file-detail">
          <div>TYPE: {el?.mimetype}</div>
          <div>TAILLE: {bytesToSize(el?.size)}</div>
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
          {buttonSelectClicked === true && decodedToken.current.id === data?.prof_id ? (
            <button className="delete-contenu">
              Supprimer <i className="fa-regular fa-trash"></i>
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="list-piece-jointe">{listOfPiecJointe}</div>
      </div>
    </div>
  );
};

export default ListContenus;

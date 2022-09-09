import React from "react";
import { useDispatch } from "react-redux";
import { closeDeleteDialog } from "../../constantes";
import "./asset/css/style.css";

const DeleteDialog = () => {
  const dispatch = useDispatch();
  // closing the dialog onclik on annuler button
  const closeConfirmDeletion = () => {
    dispatch({
      type: closeDeleteDialog,
    });
  };
  // closing the dialog on click ouside chil div
  window.onclick = (event) => {
    var parentDiv = document.getElementById("delete");
    if (event.target === parentDiv)
      dispatch({
        type: closeDeleteDialog,
      });
  };
  return (
    <div id="delete" className="delete">
      <div className="delete-main">
        <i className="fa-thin fa-circle-xmark"></i>
        <div className="description">Voulez-vous vraiment procéder à la suppression ?</div>
        <div className="btn">
          <button className="btn-annuler" onClick={closeConfirmDeletion}>
            Annuler
          </button>
          <button className="btn-supprimer">Supprimer</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;

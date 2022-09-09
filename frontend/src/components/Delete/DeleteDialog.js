import React from "react";
import "./asset/css/style.css";

const DeleteDialog = () => {
  return (
    <div id="delete" className="delete">
      <div className="delete-main">
        <i class="fa-thin fa-circle-xmark"></i>
        <div className="description">Voulez-vous vraiment procéder à la suppression ?</div>
        <div className="btn">
          <button className="btn-annuler">Annuler</button>
          <button className="btn-supprimer">Supprimer</button>
        </div>
      </div>
      
    </div>
  );
};

export default DeleteDialog;

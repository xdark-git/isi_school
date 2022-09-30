import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeListProfEtudiantDialog } from "../../../../constantes";
import "./asset/css/style.css";

const ListProfEtudiant = () => {
  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch({ type: closeListProfEtudiantDialog });
  };
  const profileToList = useSelector((state) => state?.stateProfEtudiantDialog?.profile);
  const classe = useSelector((state) => state?.classe?.data);
  const listOfEtudiantOrProf = useRef();
  var whoAreThey;
  var listing;
  if (profileToList === "Professeur") {
    whoAreThey = "Professeurs";
    listOfEtudiantOrProf.current = classe?.professeurs;
  }
  if (profileToList === "Etudiant") {
    whoAreThey = "Etudiants";
    listOfEtudiantOrProf.current = classe?.etudiants;
  }
  if (listOfEtudiantOrProf.current && listOfEtudiantOrProf.current.length >= 1) {
    listing = listOfEtudiantOrProf?.current.map((el) => (
      <li key={el?._id}>
        <img src={`http://localhost:5000/api/user/img/${el?.photoDeProfil}`} alt="" />
        <div>
          <label htmlFor="user-checkbox">{`${el?.prenom} ${el?.nom}`}</label>
          {/* <input id="user-checkbox" type="checkbox" /> */}
        </div>
      </li>
    ));
  }
  return (
    <div id="listing" className="listing">
      <div className="listing-header">
        <div>
          <i className="fa-solid fa-xmark fa-xl" onClick={closeDialog}></i>
          <span className="listing-header-title">{whoAreThey}</span>
        </div>
        <span className="listing-header-button">
          {/* <button type="submit" className="btn-ajouter">
            Ajouter
          </button>
          <button type="submit" className="btn-supprimer">
            Supprimer
          </button> */}
        </span>
      </div>
      <div className="listing-content">
        {listOfEtudiantOrProf.current.length >= 1 && <ul>{listing}</ul>}
      </div>
    </div>
  );
};

export default ListProfEtudiant;

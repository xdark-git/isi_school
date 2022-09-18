import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteDialogOpened, listProfEtudiantDialogOpened } from "../../constantes";
import DeleteDialog from "../Delete/DeleteDialog";
import Navbar from "../navbar/Navbar";
import NoContent from "../NotFound/NoContent";
import "./asset/css/style.css";
import ListProfEtudiant from "./dialogs/ListProf/ListProfEtudiant";
import Plus from "./dialogs/Plus";

const DisplayOneClasse = () => {
  const [plusDialog, setPlusDialog] = useState(false);
  const openPlusDialog = () => {
    if (plusDialog === true) setPlusDialog(false);
    else setPlusDialog(true);
  };
  const actualClasse = useSelector((state) => state?.classe?.data?.classe);

  var listOfCours;
  const cours = useSelector((state) => state?.classe?.data?.cours);
  if (cours?.length >= 1) {
    listOfCours = cours.map((el) => (
      <div className="cours" key={el?._id}>
        <div className="cours-owner">
          <img src={`http://localhost:5000/api/user/img/${el?.prof?.photoDeprofil}`} alt="" />
          <div className="cours-owner-name">{`Mr/Mme ${el?.prof?.nom}`}</div>
        </div>
        <div className="cours-name">{`${el?.titre}`}</div>
      </div>
    ));
  } else {
    listOfCours = <NoContent />;
  }

  const isProfEtudiantDialogOpened = useSelector((state) => state?.stateProfEtudiantDialog?.status);
  const isDeleteDialogOpened = useSelector((state) => state?.stateDeleteDialog?.status);
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
            {plusDialog === true && <Plus classe={actualClasse} />}
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
        <div className="content1">{listOfCours}</div>
        {isProfEtudiantDialogOpened === listProfEtudiantDialogOpened && <ListProfEtudiant />}
        {isDeleteDialogOpened === deleteDialogOpened && <DeleteDialog />}
      </div>
    </main>
  );
};

export default DisplayOneClasse;

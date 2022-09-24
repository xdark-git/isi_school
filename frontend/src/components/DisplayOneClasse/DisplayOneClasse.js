import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOne } from "../../actions/cours/crudCours";
import {
  deleteDialogOpened,
  listProfEtudiantDialogOpened,
  loaderComponentOpened,
  newClassDialogOpened,
  openLoaderComponent,
} from "../../constantes";
import NewClassDialog from "../classes/Dialogs/NewClasse/NewClassDialog";
import DeleteDialog from "../Delete/DeleteDialog";
import Loading from "../Loading/Loading";
import Navbar from "../navbar/Navbar";
import NoContent from "../NotFound/NoContent";
import "./asset/css/style.css";
import ListProfEtudiant from "./dialogs/ListProf/ListProfEtudiant";
import Plus from "./dialogs/Plus";

const DisplayOneClasse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSearching, setIsSearching] = useState("");
  const [plusDialog, setPlusDialog] = useState(false);
  const openPlusDialog = () => {
    if (plusDialog === true) setPlusDialog(false);
    else setPlusDialog(true);
  };
  const isLoading = useSelector((state) => state?.isLoading?.loader);
  const actualClasse = useSelector((state) => state?.classe?.data?.classe);

  const listOfCours = useRef();
  const cours = useSelector((state) => state?.classe?.data?.cours);
  if (cours?.length >= 1 && !isSearching) {
    listOfCours.current = cours.map((el) => (
      <div className="cours" key={el?._id} onClick={() => getOneCours(el?._id)}>
        <div className="cours-owner">
          <img src={`http://localhost:5000/api/user/img/${el?.prof?.photoDeprofil}`} alt="" />
          <div className="cours-owner-name">{`Mr/Mme ${el?.prof?.nom}`}</div>
        </div>
        <div className="cours-name">{`${el?.titre}`}</div>
      </div>
    ));
  }
  if (cours?.length === 0) {
    listOfCours.current = <NoContent />;
  }

  const handleSearch = async (event) => {
    listOfCours.current = cours
      .filter((el) => {
        const regex = new RegExp(`^${event.target.value}.*$`, "i");
        return el?.titre.match(regex);
      })
      .map((el) => {
        return (
          <div className="cours" key={el?._id} onClick={() => getOneCours(el?._id)}>
            <div className="cours-owner">
              <img src={`http://localhost:5000/api/user/img/${el?.prof?.photoDeprofil}`} alt="" />
              <div className="cours-owner-name">{`Mr/Mme ${el?.prof?.nom}`}</div>
            </div>
            <div className="cours-name">{`${el?.titre}`}</div>
          </div>
        );
      });
  };
  const getOneCours = (id) => {
    dispatch(getOne(id, navigate));
    dispatch({type: openLoaderComponent})
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  let isNewClassDialogOpen = useSelector((state) => state?.stateNewClassDialog?.status);
  const isProfEtudiantDialogOpened = useSelector((state) => state?.stateProfEtudiantDialog?.status);
  const isDeleteDialogOpened = useSelector((state) => state?.stateDeleteDialog?.status);
  return (
    <main>
      <Navbar path={actualClasse.nom} />
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
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                id="search"
                placeholder="Recherche"
                name="search"
                value={isSearching}
                className="search"
                onChange={(e) => {
                  setIsSearching(e.target.value);
                  handleSearch(e);
                }}
              />
              <button className="fa-solid fa-magnifying-glass search-icon"></button>
            </form>
          </div>
        </div>
        {isNewClassDialogOpen === newClassDialogOpened && (
          <NewClassDialog objectif="Modification" />
        )}
        {isLoading === loaderComponentOpened ? (
          <Loading />
        ) : (
          <div className="content1">{listOfCours.current}</div>
        )}
        {isProfEtudiantDialogOpened === listProfEtudiantDialogOpened && <ListProfEtudiant />}
        {isDeleteDialogOpened === deleteDialogOpened && <DeleteDialog />}
      </div>
    </main>
  );
};

export default DisplayOneClasse;

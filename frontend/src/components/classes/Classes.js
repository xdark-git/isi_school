import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newClassDialogClosed, newClassDialogOpened, openNewClassDialog } from "../../constantes";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import NewClassDialog from "./Dialogs/NewClasse/NewClassDialog";

const Classes = () => {
  const dispatch = useDispatch();
  let isNewClassDialogOpen = useSelector((state) => state?.stateNewClassDialog?.status);

  const displayNewClasseDialog = async () => {
   dispatch({ type: openNewClassDialog });
    console.log(isNewClassDialogOpen)
  };

  return (
    <main>
      <Navbar />
      <div className="component">
        <div className="new-search">
          <div className="new" onClick={displayNewClasseDialog}>
            <i className="fa-solid fa-plus"></i>
            <div>nouvelle classe</div>
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
        {isNewClassDialogOpen === newClassDialogOpened && <NewClassDialog />}
        <div className="content">
          <div className="classe">
            <div className="classe-name">Génie logiciel</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Réseau</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Communication</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
          <div className="classe">
            <div className="classe-name">Droit</div>
            <span>37 étudiants</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Classes;

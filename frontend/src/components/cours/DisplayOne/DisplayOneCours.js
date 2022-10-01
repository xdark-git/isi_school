import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listContenusDialogOpened, months, openListContenusDialog } from "../../../constantes";
import Navbar from "../../navbar/Navbar";
import NoContent from "../../NotFound/NoContent";
import "./asset/style.css";
import ListContenus from "./Dialogs/ListContenus";
import NewContenuDialog from "./Dialogs/NewContenu/NewContenuDialog";
import PlusCoursOptions from "./Dialogs/PlusCoursOptions";

const DisplayOneCours = () => {
  const dispatch = useDispatch();

  const cours = useSelector((state) => state?.cours?.data?.cours);
  const contenus = useSelector((state) => state?.cours?.data?.contenus);
  const isListContenusDialogOpened = useSelector((state) => state?.stateListContenusDialog?.status);
  const [plusDialog, setPlusDialog] = useState(false);
  let list = [];
  if (Array.isArray(contenus)) {
    list = [...contenus];
  }
  let listContenus = list.map((el, index) => {
    const date = new Date(el?.createdAt);
    let diff;
    //checking if it's one day since creating(Date.parse("Fri Jan 02 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"))
    if (Date.now() - Date.parse(date) < 86400000) {
      diff = new Date(Date.now() - Date.parse(date)).getHours();
      if (diff < 1) {
        diff = -1;
      }
    }

    return (
      <li
        key={el?._id}
        onClick={() =>
          dispatch({
            type: openListContenusDialog,
            data: {
              titre: el?.titre,
              description: el?.description,
              piece_jointe: el?.piece_jointe,
              prof_id: cours?.prof?._id,
            },
          })
        }
      >
        <span className="cours-number">{index + 1}</span>
        <span className="cours-title">{el?.titre}</span>
        <span className="cours-date">
          {diff && diff < 24
            ? `il y a ${diff}h`
            : `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
        </span>
        <span className="cours-options">
          <i className="fa-solid fa-download"></i>
          <i
            className="fa-solid fa-eye"
            onClick={() =>
              dispatch({
                type: openListContenusDialog,
                data: {
                  titre: el?.titre,
                  description: el?.description,
                  piece_jointe: el?.piece_jointe,
                  prof_id: cours?.prof?._id,
                },
              })
            }
          ></i>
        </span>
      </li>
    );
  });

  return (
    <main>
      <Navbar path={cours?.titre} />
      <div className="component">
        <div className="display-search">
          <div className="display">
            <div
              id="plus"
              className="more"
              onClick={() => {
                if (plusDialog === false) setPlusDialog(true);
                if (plusDialog === true) setPlusDialog(false);
              }}
            >
              <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              <span>Plus</span>
            </div>
            {plusDialog === true && <PlusCoursOptions />}
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
        <NewContenuDialog />
        <div className="content-cours">
         {list.length >=1 ? <ul>{listContenus}</ul>: <NoContent />}
        </div>
        {isListContenusDialogOpened === listContenusDialogOpened && <ListContenus />}
      </div>
    </main>
  );
};

export default DisplayOneCours;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listContenusDialogOpened, months, openListContenusDialog } from "../../../constantes";
import Navbar from "../../navbar/Navbar";
import "./asset/style.css";
import ListContenus from "./Dialogs/ListContenus";

const DisplayOneCours = () => {
  const dispatch = useDispatch();
  const cours = useSelector((state) => state?.cours?.data?.cours);
  const contenus = useSelector((state) => state?.cours?.data?.contenus);
  const isListContenusDialogOpened = useSelector((state) => state?.stateListContenusDialog?.status);
  let listContenus = contenus.map((el, index) => {
    const date = new Date(el?.createdAt);
    let diff = new Date(Date.now() - date).getHours();
    if (diff < 1) {
      diff = -1;
    }
    return (
      <li key={el?._id}>
        <span className="cours-number">{index + 1}</span>
        <span className="cours-title">{el?.titre}</span>
        <span className="cours-date">
          {diff < 24
            ? `il y a ${diff}h`
            : `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`}
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
            <div id="plus" className="more">
              <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
              <span>Plus</span>
            </div>
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
        <div className="content-cours">
          <ul>{listContenus}</ul>
        </div>
        {isListContenusDialogOpened === listContenusDialogOpened && <ListContenus />}
      </div>
    </main>
  );
};

export default DisplayOneCours;

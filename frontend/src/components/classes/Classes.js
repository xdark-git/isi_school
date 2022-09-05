import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import {
  newClassDialogOpened,
  openNewClassDialog,
  USER_TOKEN_LOCAL_STORAGE_NAME,
} from "../../constantes";
import { getAll, getOne } from "../../actions/classe/getClasses";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import NewClassDialog from "./Dialogs/NewClasse/NewClassDialog";

const Classes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isNewClassDialogOpen = useSelector((state) => state?.stateNewClassDialog?.status);

  const displayNewClasseDialog = async () => {
    dispatch({ type: openNewClassDialog });
  };
  // eslint-disable-next-line
  const [userToken, setUserToken] = useState(localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME));
  const classes = useSelector((state) => state?.classes);
  var lisOfClasses;
  useEffect(() => {
    const token = userToken;
    if (token != null) {
      const decodedToken = decode(token);
      if (decodedToken?.exp * 1000 > new Date().getTime()) {
        dispatch(getAll(navigate));
      }
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getOneClasse = (id) =>{
    dispatch(getOne(id, navigate))
  }
 

  if (classes.length >= 1) {
    lisOfClasses = classes.map((el) => (
      <div className="classe" key={el?._id} onClick={()=> getOneClasse(el?._id)}>
        {el?.nom.length < 17 && <div className="classe-name">{el?.nom}</div>}
        {el?.nom.length > 17 && <div className="classe-name">{el?.nom.substring(0, 21)}...</div>}
        <span>{el?.etudiants_id.length} étudiants</span>
      </div>
    ));
  }
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
        <div className="content">{lisOfClasses}</div>
      </div>
    </main>
  );
};

export default Classes;

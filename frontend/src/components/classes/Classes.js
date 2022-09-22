import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import {
  loaderComponentClosed,
  loaderComponentOpened,
  newClassDialogOpened,
  openLoaderComponent,
  openNewClassDialog,
  USER_TOKEN_LOCAL_STORAGE_NAME,
} from "../../constantes";
import { getAll, getOne } from "../../actions/classe/getClasses";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import NewClassDialog from "./Dialogs/NewClasse/NewClassDialog";
import Loading from "../Loading/Loading";
import NoContent from "../NotFound/NoContent";

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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSearching, setIsSearching] = useState("");
  const isLoading = useSelector((state) => state?.isLoading?.loader);
  const listOfclasses = useRef();
  useEffect(() => {
    const token = userToken;
    if (token != null) {
      const decodedToken = decode(token);
      //displaying newClassOption
      if (decodedToken?.status === "Administrateur") {
        setIsAdmin(true);
      }
      if (decodedToken?.exp * 1000 > new Date().getTime()) {
        dispatch({ type: openLoaderComponent });
        dispatch(getAll(navigate));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOneClasse = (id) => {
    dispatch({ type: openLoaderComponent });
    dispatch(getOne(id, navigate));
  };

  if (classes?.data.length >= 1 && !isSearching) {
    listOfclasses.current = classes?.data.map((el) => (
      <div className="classe" key={el?._id} onClick={() => getOneClasse(el?._id)}>
        {el?.nom.length < 17 && <div className="classe-name">{el?.nom}</div>}
        {el?.nom.length >= 17 && <div className="classe-name">{el?.nom.substring(0, 17)}...</div>}
        <span>{el?.etudiants_id.length} étudiants</span>
      </div>
    ));
  }
  if (classes?.data?.length === 0 && classes?.status && isLoading === loaderComponentClosed) {
    listOfclasses.current = <NoContent />;
  }
  const handleSearch = async (event) => {
    event.preventDefault();

    listOfclasses.current = classes?.data
      .filter((el) => {
        const regex = new RegExp(`^${event.target.value}.*$`, "i");
        return el?.nom.match(regex);
      })
      .map((el) => {
        return (
          <div className="classe" key={el?._id} onClick={() => getOneClasse(el?._id)}>
            {el?.nom.length < 17 && <div className="classe-name">{el?.nom}</div>}
            {el?.nom.length >= 17 && (
              <div className="classe-name">{el?.nom.substring(0, 17)}...</div>
            )}
            <span>{el?.etudiants_id.length} étudiants</span>
          </div>
        );
      });
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <main>
      <Navbar />
      <div className="component">
        <div className="new-search">
          {isAdmin === true && (
            <div className="new" onClick={displayNewClasseDialog}>
              <i className="fa-solid fa-plus"></i>
              <div>nouvelle classe</div>
            </div>
          )}
          <div className="search">
            {classes?.data.length >=1 && (
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
            )}
          </div>
        </div>
        {isNewClassDialogOpen === newClassDialogOpened && <NewClassDialog objectif="Creation" />}

        {isLoading === loaderComponentOpened ? (
          <Loading />
        ) : (
          <div className="content">{listOfclasses.current}</div>
        )}
      </div>
    </main>
  );
};

export default Classes;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import decode from "jwt-decode";
import "./asset/css/style.css";
import {
  openMenuDialog,
  menuDialogOpened,
  USER_DATA_COOKIE_NAME,
  logoutDialogClosed,
  logoutDialogOpened,
  LOGOUT,
  USER_TOKEN_LOCAL_STORAGE_NAME,
  alertDialogOpened,
  openAlertDialog,
  ON_USERS_PAGE,
  ON_INFORMATION_PAGE,
  ON_PROFILE_PAGE,
  ON_CLASSE_PAGE,
} from "../../constantes";
import MenuDialog from "./Dialogs/MenuDialog/MenuDialog";
import LogoutDialog from "./Dialogs/LogoutDialog/LogoutDialog";
import AlertDialog from "./Dialogs/Alert/AlertDialog";
import { getOne } from "../../actions/classe/getClasses";
import { getTheCours } from "../../actions/cours/crudCours";

const Navbar = (currentPage) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const cookies = new Cookies();
  const user = cookies.get(USER_DATA_COOKIE_NAME);

  const logout = () => {
    dispatch({ type: LOGOUT });

    navigate("/");

    setUserToken(null);
  };
  const [userToken, setUserToken] = useState(localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME));

  useEffect(() => {
    const token = userToken;
    if (token != null) {
      try {
        const decodedToken = decode(token);
        if (decodedToken?.exp * 1000 < new Date().getTime()) {
          dispatch({ type: openAlertDialog, message: "Session expirée" });
          setTimeout(logout, 2500);
        }
      } catch (error) {
        dispatch({ type: openAlertDialog, message: "Problème détecté" });
        setTimeout(logout, 2500);
      }
    }
    if (userToken == null) {
      logout();
    }
    setUserToken(localStorage.getItem(USER_TOKEN_LOCAL_STORAGE_NAME));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, userToken]);

  const isDisplayOneClasseOpened = useSelector((state) => state?.classe?.opened);
  const isDisplayOneCoursOpened = useSelector((state) => state?.cours?.opened);
  useEffect(() => {
    //if the location is "/classes/something" then we get the param fetch the element
    const urlId = location?.pathname.split("/")[2];
    const urlPathName = location?.pathname.split("/")[1];

    if (urlPathName === "classes" && urlId) {
      if (!isDisplayOneClasseOpened) {
        dispatch(getOne(urlId, navigate));
      }
    } else if (urlPathName === "cours" && urlId) {
      //if the location is "/cours/something" then we get the param fetch the element
      if (!isDisplayOneCoursOpened) {
        dispatch(getTheCours(urlId, navigate));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    /**get the window dimention when resized */
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const isAlertDialogOpen = useSelector((state) => state?.stateAlertDialog?.status);

  const isMenuDialogOpen = useSelector((state) => state?.stateMenuDialog?.status);
  const displayDialog = () => {
    dispatch({ type: openMenuDialog });
  };

  const [isLogoutDialogOpen, changeIsLogoutDialogOpen] = useState(
    useSelector((state) => state?.stateLogoutDialog?.status)
  );

  const wantToLogout = () => {
    if (isLogoutDialogOpen === logoutDialogClosed) {
      changeIsLogoutDialogOpen(logoutDialogOpened);
    } else if (isLogoutDialogOpen === logoutDialogOpened) {
      changeIsLogoutDialogOpen(logoutDialogClosed);
    }
  };
  const pageName = useRef();
  if (currentPage?.path === undefined) {
    pageName.current = location?.pathname.split("/")[1];
  } else {
    pageName.current = currentPage?.path;
  }
  const navigateOnProfilePage = useCallback(() => {
    navigate("/profile");
    dispatch({type: ON_PROFILE_PAGE})
    // eslint-disable-next-line
  }, []);
  const navigateOnInformationPage = useCallback(() => {
    navigate("/informations");
    dispatch({type: ON_INFORMATION_PAGE})
    // eslint-disable-next-line
  }, []);
  const navigateOnUsersPage = useCallback(() => {
    navigate("/users");
    dispatch({type: ON_USERS_PAGE})
    // eslint-disable-next-line
  }, []);
  const navigateClassePage = useCallback(() => {
    navigate("/classes");
    dispatch({type: ON_CLASSE_PAGE})
    // eslint-disable-next-line
  }, []);

  const getClasseName = useSelector((state) => state?.navigationBar);

  if (dimensions?.width > 785) {
    return (
      <div>
        <header>
          {isAlertDialogOpen === alertDialogOpened && <AlertDialog />}

          {pageName.current.length >= 27 && (
            <div className="page-name">{pageName.current.substring(0, 27)}...</div>
          )}
          {pageName.current.length < 27 && <div className="page-name">{pageName.current}</div>}
          <div className="profile" onClick={wantToLogout}>
            <img
              preload="auto"
              src={`http://localhost:5000/api/user/img/${user?.photoDeProfil}`}
              alt="profil utilisateur"
            />
            <div className="user-name">{user?.prenom}</div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {isLogoutDialogOpen === logoutDialogOpened && <LogoutDialog logout={logout} />}
        </header>

        <nav>
          <a href="/classes">ISI</a>
          <div className="pages">
            <div className={getClasseName?.profil} onClick={navigateOnProfilePage}>
              <i className="fa-solid fa-gear fa-lg"></i>
              <div>Profil</div>
            </div>
            <div className={getClasseName?.classe} onClick={navigateClassePage}>
              <i className="fa-solid fa-building fa-lg"></i>
              <div>classes</div>
            </div>
            {/* <div className="cours">
              <i className="fa-solid fa-file-lines fa-lg"></i>
              <div>Cours</div>
            </div> */}
            <div className={getClasseName?.information} onClick={navigateOnInformationPage}>
              <i className="fa-solid fa-bell fa-lg"></i>
              <div>Informations</div>
            </div>
            {user?.status === "Administrateur" && (
              <div className={getClasseName?.users} onClick={navigateOnUsersPage}>
                <i className="fa-solid fa-users fa-lg"></i>
                <div>utilisateurs</div>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <header>
          {isAlertDialogOpen === alertDialogOpened && <AlertDialog />}
          <div className="page-name">ISI</div>
          <a href="#menu" id="toggle" onClick={displayDialog}>
            <span></span>
          </a>
        </header>
        {isMenuDialogOpen === menuDialogOpened && <MenuDialog user={user} />}
      </div>
    );
  }
};
export default Navbar;

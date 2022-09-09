import React, { useState, useEffect } from "react";
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
} from "../../constantes";
import MenuDialog from "./Dialogs/MenuDialog/MenuDialog";
import LogoutDialog from "./Dialogs/LogoutDialog/LogoutDialog";
import AlertDialog from "./Dialogs/Alert/AlertDialog";
import { getOne } from "../../actions/classe/getClasses";

const Navbar = () => {
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
  useEffect(() => {
    //if the location is "/classes/something" then we get the param fetch the element
    const classeID = location?.pathname.split("/")[2];
    const isItAClasse = location?.pathname.split("/")[1];

    if (isItAClasse === "classes" && classeID) {
      if (!isDisplayOneClasseOpened && isDisplayOneClasseOpened !== true){
        dispatch(getOne(classeID, navigate));
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

  if (dimensions?.width > 785) {
    return (
      <div>
        <header>
          {isAlertDialogOpen === alertDialogOpened && <AlertDialog />}
          <div className="page-name">Classe</div>
          <div className="profile" onClick={wantToLogout}>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <div className="user-name">{user?.prenom}</div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {isLogoutDialogOpen === logoutDialogOpened && <LogoutDialog logout={logout} />}
        </header>

        <nav>
          <a href="/classes">ISI</a>
          <div className="pages">
            <div className="profile">
              <i className="fa-solid fa-gear fa-lg"></i>
              <div>Profil</div>
            </div>
            {user?.status === "Administrateur" && (
              <div className="classes checked">
                <i className="fa-solid fa-building fa-lg"></i>
                <div>classes</div>
              </div>
            )}
            {/* <div className="cours">
              <i className="fa-solid fa-file-lines fa-lg"></i>
              <div>Cours</div>
            </div> */}
            <div className="informations">
              <i className="fa-solid fa-bell fa-lg"></i>
              <div>Informations</div>
            </div>
            {user?.status === "Administrateur" && (
              <div className="admin-users">
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

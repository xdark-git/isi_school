import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import "./asset/css/style.css";

import { USER_DATA_COOKIE_NAME } from "../../constantes";

const Navbar = () => {
  const cookies = new Cookies();
  const user = cookies.get(USER_DATA_COOKIE_NAME);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [didToggleDisplayed, setDidToggleDisplayed] = useState(0);
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
  /*-------------------TOGGLE MENU JS--------------------- */
  /**
   * changing the value everytime tha the dimension changes
   */
  useEffect(() => {
    if (dimensions?.width <= 785) {
      setDidToggleDisplayed(1);
    } else {
      setDidToggleDisplayed(0);
    }
  }, [dimensions?.width]);
  useEffect(() => {
    if (didToggleDisplayed === 1) {
      // based on Todd Motto functions
      // https://toddmotto.com/labs/reusable-js/
      var theToggle = document.getElementById("toggle");
      // hasClass
      function hasClass(elem, className) {
        return new RegExp(" " + className + " ").test(" " + elem.className + " ");
      }
      // addClass
      // function addClass(elem, className) {
      //   if (!hasClass(elem, className)) {
      //     elem.className += " " + className;
      //   }
      // }
      // removeClass
      // function removeClass(elem, className) {
      //   var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
      //   if (hasClass(elem, className)) {
      //     while (newClass.indexOf(" " + className + " ") >= 0) {
      //       newClass = newClass.replace(" " + className + " ", " ");
      //     }
      //     elem.className = newClass.replace(/^\s+|\s+$/g, "");
      //   }
      // }
      // toggleClass
      function toggleClass(elem, className) {
        var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
        if (hasClass(elem, className)) {
          while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
          }
          elem.className = newClass.replace(/^\s+|\s+$/g, "");
        } else {
          elem.className += " " + className;
        }
      }

      theToggle.onclick = function () {
        toggleClass(this, "on");
        return false;
      };
    }
  }, [didToggleDisplayed]);

  /*-------------------TOGGLE MENU JS--------------------- */

  const displayDialog = () =>{
    console.log(true)
  }
  if (dimensions?.width > 785) {
    return (
      <div>
        <header>
          <div className="page-name">Classe</div>
          <div className="profile">
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <div className="user-name">{user?.prenom}</div>
            <i className="fa-solid fa-caret-down"></i>
          </div>
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
            <div className="cours">
              <i className="fa-solid fa-file-lines fa-lg"></i>
              <div>Cours</div>
            </div>
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
          <div className="page-name">ISI</div>
          <a href="#menu" id="toggle" onClick={displayDialog}>
            <span></span>
          </a>
        </header>
      </div>
    );
  }
};
export default Navbar;

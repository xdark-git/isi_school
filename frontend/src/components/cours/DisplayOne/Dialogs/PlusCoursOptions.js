import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { OPEN_CREATION_CONTENU_COURS_DIALOG, USER_DATA_COOKIE_NAME } from "../../../../constantes";

const PlusCoursOptions = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const user = useRef(cookies.get(USER_DATA_COOKIE_NAME));
  return (
    <div className="plusDialog">
      <ul id="plusDialog" className="dialog">
        {user.current?.status === "Professeur" && (
          <li
            onClick={() => {
              dispatch({ type: OPEN_CREATION_CONTENU_COURS_DIALOG });
            }}
          >
            Nouvel élément
          </li>
        )}
        {user.current?.status === "Administrateur" && <li>Modifier cours</li>}
        {user.current?.status === "Administrateur" && <li>Supprimer le cours</li>}
      </ul>
    </div>
  );
};

export default PlusCoursOptions;

import React, { useRef } from "react";
import Cookies from "universal-cookie";
import { USER_DATA_COOKIE_NAME } from "../../../../constantes";

const PlusCoursOptions = () => {
  const cookies = new Cookies();
  const user = useRef(cookies.get(USER_DATA_COOKIE_NAME));
  return (
    <div className="plusDialog">
      <ul id="plusDialog" className="dialog">
        {user.current?.status === "Professeur" && <li>Nouvel élément</li>}
        {user.current?.status === "Administrateur" && <li>Modifier cours</li>}
        {user.current?.status === "Administrateur" && <li>Supprimer le cours</li>}
      </ul>
    </div>
  );
};

export default PlusCoursOptions;

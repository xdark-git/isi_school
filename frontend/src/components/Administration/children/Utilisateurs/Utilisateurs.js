import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../../../../actions/users/crudUsers";
import { loaderComponentOpened, openLoaderComponent } from "../../../../constantes";
import Loading from "../../../Loading/Loading";
import "./css/style.css";

const Utilisateurs = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.isLoading?.loader);

  useEffect(() => {
    dispatch({ type: openLoaderComponent });
    dispatch(getAllUsersAction());
    // eslint-disable-next-line
  }, []);
  const users = useSelector((state) => state?.users?.data);

  const listingUsers = useRef();

  if (users?.users) {
    listingUsers.current = users?.users.map((el, index) => {
      const status = users?.status.filter((el1) => el1["_id"] === el?.statusId);
      
      return (
        <tr key={index}>
          <td>
            <input type="checkbox" />
            <i className="fa-solid fa-pencil"></i>
          </td>
          <td>{`${el?.nom} ${el?.prenom}`}</td>
          <td>{`${el?.telephone}`}</td>
          <td>{`${el?.username}`}</td>
          <td>{`${el?.email}`}</td>
          <td>{status[0]["nom"]}</td>
          <td>
            {status[0]["nom"] === "Etudiant"
              ? `${el?.numeroDeCarte}`
              : status[0]["nom"] === "Professeur"
              ? `${el?.identifiantProf}`
              : `N/A`}
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <div className="utilisateur-btn-search">
        <div className="btn">
          <button
            onClick={() => {
              props?.nouvelUtilisateur?.setStateNouvelleUtilisateur(true);
            }}
          >
            Créer un compte
          </button>
          <button>Supprimer</button>
        </div>
        <div className="search">
          <i className="fa-light fa-sliders"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input name="research" type="text" className="research" />
        </div>
      </div>
      {isLoading === loaderComponentOpened ? (
        <div id="loader">
          <Loading />
        </div>
      ) : (
        <div className="list-utilisateur">
          <table id="utilisateurs">
            <thead>
              <tr>
                <th className="tb-input"></th>
                <th className="tb-nom">Nom</th>
                <th className="tb-telephone">Téléphone</th>
                <th className="tb-username">Username</th>
                <th className="tb-email">Email</th>
                <th className="tb-profil">Profil</th>
                <th className="tb-identifiant">Identifiant</th>
              </tr>
            </thead>
            <tbody>{listingUsers.current}</tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Utilisateurs;

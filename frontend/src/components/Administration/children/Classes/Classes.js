import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../actions/classe/getClasses";
import {
  loaderComponentOpened,
  openLoaderComponent,
  openNewClassDialog,
} from "../../../../constantes";
import Loading from "../../../Loading/Loading";
import "./css/style.css";

const Classes = () => {
  const dispatch = useDispatch();

  const classes = useSelector((state) => state?.classes?.data);
  const isLoading = useSelector((state) => state?.isLoading?.loader);

  useEffect(() => {
    dispatch({ type: openLoaderComponent });
    dispatch(getAll());

    // eslint-disable-next-line
  }, []);
  const listOfClasses = useRef();
  listOfClasses.current = classes.map((el, index) => {
    return (
      <tr key={index}>
        <td>
          <input type="checkbox" />
          <i className="fa-solid fa-pencil"></i>
        </td>
        <td>{el?.nom}</td>
        <td>{el?.profs_id.length}</td>
        <td>{el?.etudiants_id.length}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="classes-btn-search">
        <div className="btn">
          <button onClick={() => dispatch({ type: openNewClassDialog })}>Créer une classe</button>
          <button>Ajouter Etudiant/Prof</button>
          <button>Créer un cours</button>
          <button>Supprimer</button>
        </div>
        <div className="search">
          <i className="fa-light fa-sliders"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input name="research" type="text" className="research" />
        </div>
      </div>
      <div className="list-classes">
        {isLoading === loaderComponentOpened ? (
          <Loading />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="tb-input"></th>
                <th className="tb-nom">Nom</th>
                <th className="tb-nbrProfesseur">Totals professeurs</th>
                <th className="tb-nbrProfesseur">Totals étudiants</th>
              </tr>
            </thead>
            <tbody>{listOfClasses.current}</tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Classes;

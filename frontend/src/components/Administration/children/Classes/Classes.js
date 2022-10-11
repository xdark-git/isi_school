import React from "react";
import "./css/style.css";

const Classes = () => {
  return (
    <>
      <div className="classes-btn-search">
        <div className="btn">
          <button>Créer une classe</button>
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
        <table>
          <thead>
            <tr>
              <th className="tb-input"></th>
              <th className="tb-nom">Nom</th>
              <th className="tb-nbrProfesseur">Totals professeurs</th>
              <th className="tb-nbrProfesseur">Totals étudiants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
                <i className="fa-solid fa-pencil"></i>
              </td>
              <td>Licence 1 Génie Logiciel</td>
              <td>30</td>
              <td>30</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
                <i className="fa-solid fa-pencil"></i>
              </td>
              <td>Licence 1 Génie Logiciel</td>
              <td>30</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Classes;

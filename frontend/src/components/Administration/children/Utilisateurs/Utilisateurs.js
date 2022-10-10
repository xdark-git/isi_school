import React from "react";
import "./css/style.css";

const Utilisateurs = () => {
  return (
    <>
      <div className="utilisateur-btn-search">
        <div className="btn">
          <button>Créer un compte</button>
          <button>Supprimer</button>
        </div>
        <div className="search">
          <i className="fa-light fa-sliders"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input name="research" type="text" className="research" />
        </div>
      </div>
      <div className="list-utilisateur">
        <table id="utilisateurs">
          <tr>
            <th className="tb-input"></th>
            <th className="tb-nom">Nom</th>
            <th className="tb-telephone">Téléphone</th>
            <th className="tb-username">Username</th>
            <th className="tb-email">Email</th>
            <th className="tb-profil">Profil</th>
            <th className="tb-identifiant">Identifiant</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
              <i className="fa-solid fa-pencil"></i>
            </td>
            <td>Fall Papa Ahmadou</td>
            <td>77 000 00 00</td>
            <td>pahmadou</td>
            <td>usfujaerddfq@gmail.com</td>
            <td>Administrateur</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
              <i className="fa-solid fa-pencil"></i>
            </td>
            <td>Fall Papa Ahmadou</td>
            <td>77 000 00 00</td>
            <td>pahmadou</td>
            <td>usfujaerddfq@gmail.com</td>
            <td>Administrateur</td>
            <td>N/A</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Utilisateurs;

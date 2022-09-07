import React from "react";
import "./asset/css/style.css";

const ListProf = () => {
  return (
    <div id="listing" className="listing">
      <div className="listing-header">
        <i class="fa-solid fa-xmark fa-xl"></i>
        <span className="listing-header-title">Professeurs</span>
        <span className="listing-header-button">
          <button className="btn-ajouter">Ajouter</button>
          <button className="btn-supprimer">Supprimer</button>
        </span>
      </div>
      <div className="listing-content">
        <ul>
          <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li> <li>
            <img src={process.env.PUBLIC_URL + "/img/user/default.jpg"} alt="profil utilisateur" />
            <span>Test test</span>
            <input type="checkbox"/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListProf;

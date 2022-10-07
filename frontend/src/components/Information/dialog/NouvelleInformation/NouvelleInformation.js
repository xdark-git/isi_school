import React, { useCallback, useState } from "react";
import "./css/style.css";
import ListClasse from "./List/ListClasse";

const NouvelleInformation = () => {
  const [destinataires, setDestinataires] = useState("une classe");

  const getValueOfSelectedDestionataire = useCallback(() => {
    const target = document.getElementById("select-destinataires");

    if (target.value === "") setDestinataires(null);
    else setDestinataires(target.value);

    if (target.value != "une classe") setClasseName(null);
    if (target.value != "une personne") setEmail(null);
    if (target.value != "tout le monde") setToEveryone(false);
    else setToEveryone(true);
  }, []);

  const [openListClasse, setOpenListClasse] = useState(false);
  const [classeName, setClasseName] = useState(null);
  const [ClasseId, setClasseId] = useState(null);
  const [email, setEmail] = useState(null);
  const [toEveryone, setToEveryone] = useState(false);

  /*
    this const is going to be passed as props to ListClasse component
    throught it we will be able to filter the list, change display and set classeName 
    change the set classeId and close the componet
  */
  const classe = {
    open: { openListClasse, setOpenListClasse },
    classe: { classeName, setClasseName, ClasseId, setClasseId },
  };

  return (
    <div className="nouvelleInformation">
      <div className="contenu">
        <div className="header">
          <div>Nouvelle information</div>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="body">
          <div className="body-header">
            <div className="destinataire">
              <label htmlFor="select-destinataires">Destinataires: </label>
              <select
                name="select-destinataires"
                id="select-destinataires"
                onChange={getValueOfSelectedDestionataire}
              >
                <option value="">Sélectionner le type de destinataire</option>
                <option value="une personne">une personne</option>
                <option value="une classe">une classe</option>
                <option value="tout le monde">tout le monde</option>
              </select>
            </div>
            {destinataires === "une personne" || destinataires === "une classe" ? (
              <div className="to">
                {destinataires === "une personne" && (
                  <div className="une-personne">
                    {/* <label htmlFor="destinaire-email"></label> */}
                    <input
                      id="txt-destinaire-email"
                      name="email"
                      type="text"
                      placeholder="&Agrave;"
                    />
                  </div>
                )}
                {destinataires === "une classe" && (
                  <div className="classe">
                    <input
                      id="txt-classe-destinataire"
                      name="classe-name"
                      type="text"
                      placeholder="Classe"
                      value={classeName != null ? classeName : ""}
                      onFocus={() => {
                        setOpenListClasse(true);
                      }}
                      onChange={(e) => {
                        setClasseName(e.target.value);
                      }}
                    />
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={() => {
                        if (openListClasse === true) setOpenListClasse(false);
                        else setOpenListClasse(true);
                      }}
                    ></i>
                    <div className="list-of-classe">
                      {openListClasse && <ListClasse classe={classe} />}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <></>
            )}
            <div className="objet">
              <input type="text" id="txt-objet" name="objet" placeholder="Objet" />
            </div>
          </div>
          <div>
            <div className="text"></div>
            <div className="files"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NouvelleInformation;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DISPLAY_ALL_INFORMAITON_RECEIVED,
  DISPLAY_ALL_INFORMAITON_SENT,
  OPENED,
} from "../../constantes";
import Navbar from "../navbar/Navbar";
import "./asset/css/style.css";
import ListInformationEnvoye from "./dialog/ListInformation/ListInformationEnvoye";
import ListInformationRecu from "./dialog/ListInformation/ListInformationRecu";
import NouvelleInformation from "./dialog/NouvelleInformation/NouvelleInformation";

const Information = () => {
  const dispatch = useDispatch();
  const [openNouvelleInformation, setOpenNouvelleInformation] = useState(false);
  const stateOpenNouvelleInformation = { openNouvelleInformation, setOpenNouvelleInformation };
  const stateListInformation = useSelector((state) => state?.stateListInformation);

  return (
    <main>
      <Navbar />
      {openNouvelleInformation === true && (
        <NouvelleInformation state={stateOpenNouvelleInformation} />
      )}
      <div className="information-component">
        <div className="search">
          <i className="fa-light fa-sliders"></i>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input name="research" type="text" className="research" />
        </div>
        <div className="body">
          <div className="information-nav">
            <div className="btn-nouvelle" onClick={() => setOpenNouvelleInformation(true)}>
              <i className="fa-thin fa-pen"></i>
              <span>Nouvelle information</span>
            </div>
            <div className="list-option">
              <div
                className={
                  stateListInformation?.mailbox === OPENED
                    ? `boite-reception focused`
                    : `boite-reception`
                }
                onClick={() => {
                  dispatch({ type: DISPLAY_ALL_INFORMAITON_RECEIVED });
                }}
              >
                <i className="fa-solid fa-inbox"></i>
                <span>Boîte de reception</span>
              </div>
              <div
                className={stateListInformation?.sent === OPENED ? `envoye focused` : `envoye`}
                onClick={() => {
                  dispatch({ type: DISPLAY_ALL_INFORMAITON_SENT });
                }}
              >
                <i className="fa-regular fa-paper-plane"></i>
                <span>Envoyés</span>
              </div>
            </div>
          </div>
          <div className="information-content">
            {stateListInformation?.mailbox === OPENED && <ListInformationRecu />}
            {stateListInformation?.sent === OPENED && <ListInformationEnvoye />}
            {/* {displayFullInformationPage === false ? (
              <ListInformationRecu information={information} display={display} />
            ) : (
              <DisplayInformation information={information} display={display} />
            )} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Information;
